import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { map, size } from "lodash";

import TagLang from "../../../../../modules/GetTagLang";

import request from "../../../../../../helper/core_services/core/requestService";
import apiRecipe from "../../../../../../helper/core_services/endpoints/recipes";
import { difficult } from "../../../.../../../../catalogs/recipe";
import GetLanguage from "../../../../../../helper/i18n/getValueTagLang";

import style from "./modal.module.scss";

export default function ModalDetail({ activeModal, dataRecipe }) {
    const router = useRouter();

    const [flagModal, setFlagModal] = useState(false);
    const [activeRefresh, setActiveRefresh] = useState(false);
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        if (!router.isReady) return;
        if (dataRecipe?.id) setActiveRefresh(true);
    }, [router.isReady, dataRecipe]);

    useEffect(() => {
        if (activeRefresh) {
            GetDataRecipe();
            setActiveRefresh(false);
        }
    }, [activeRefresh]);

    const GetDataRecipe = async () => {
        let result = await request(
            apiRecipe.get_recipe,
            null,
            [dataRecipe.id],
            { locale: router.locale }
        );
        if (result != null) {
            let newData = { ...result };
            let name = "";
            let difficulty = "";
            if (router.locale == "es") name = result?.name?.["es"];
            if (router.locale == "en") name = result?.name?.["en-us"];
            newData.nameLang = name;
            let findDifficult = difficult.find(
                (obj) => obj.id === newData?.difficulty
            );
            if (findDifficult != undefined)
                difficulty = GetLanguage("input", findDifficult.name);
            newData.tagDifficult = difficulty;
            newData.picture =
                size(result.images) > 0 ? result?.images[0].image : null;
            setRecipe(newData);
        }
    };

    useEffect(() => {
        if (activeModal) setFlagModal(true);
    }, [activeModal]);

    const Toogle = () => {
        setFlagModal(!flagModal);
    };

    return (
        <Modal isOpen={flagModal} toggle={Toogle} className="modal-lg">
            <ModalHeader toggle={Toogle}></ModalHeader>
            <ModalBody>
                <div className={style.content}>
                    <div className={style.name}>{recipe?.nameLang}</div>
                    <div className={style.contSections}>
                        <div className={style.contLeft}>
                            <div className={style.contPicture}>
                                {!recipe?.picture && (
                                    <div className={style.tagPicture}>
                                        <TagLang
                                            group="validation"
                                            tag="without_image"
                                        />
                                    </div>
                                )}
                                {recipe?.picture && (
                                    <div className={style.picture}>
                                        <img
                                            src={recipe?.picture}
                                            alt={"recipe_picture"}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className={style.contDataRow}>
                                <div className={style.titleIngredients}>
                                    <TagLang group="input" tag="ingredients" />
                                </div>
                                <div className={style.contIngredients}>
                                    {map(recipe?.ingredients, (elements) => {
                                        return (
                                            <div className={style.ingredient}>
                                                <div
                                                    className={
                                                        style.nameIngredient
                                                    }>
                                                    &#8231;{" "}
                                                    {elements?.food?.name}
                                                </div>
                                                <div class={style.dot}></div>
                                                <div
                                                    className={
                                                        style.valueIngredient
                                                    }>
                                                    {elements?.display}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={style.contRight}>
                            <div className={style.contDataInfos}>
                                <div className={style.contDataInfo}>
                                    <div className={style.contNameInfo}>
                                        <TagLang
                                            group="input"
                                            tag="difficulty"
                                        />
                                    </div>
                                    <div className={style.contValueInfo}>
                                        {recipe?.tagDifficult}
                                    </div>
                                </div>
                                <div className={style.contDataInfo}>
                                    <div className={style.contNameInfo}>
                                        <TagLang group="input" tag="portions" />
                                    </div>
                                    <div className={style.contValueInfo}>
                                        {recipe?.portions}
                                    </div>
                                </div>
                            </div>
                            <div className={style.contDataRow2}>
                                <div className={style.titlePrepa}>
                                    <TagLang group="input" tag="preparation" />
                                </div>
                                <div className={style.contSteps}>
                                    {map(
                                        recipe?.directions,
                                        (element, index) => {
                                            let direction = "";
                                            if (router.locale == "es")
                                                direction =
                                                    element?.direction?.["es"];
                                            if (router.locale == "en")
                                                direction =
                                                    element?.direction?.[
                                                        "en-us"
                                                    ];
                                            return (
                                                <div className={style.contStep}>
                                                    <div
                                                        className={
                                                            style.contNumber
                                                        }>
                                                        <div
                                                            className={
                                                                style.number
                                                            }>
                                                            {index + 1}
                                                        </div>
                                                        <div
                                                            className={
                                                                style.contLine
                                                            }
                                                        />
                                                    </div>
                                                    <div
                                                        className={
                                                            style.instruction
                                                        }>
                                                        {direction}
                                                    </div>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <button
                    className="sty-button-dash-1 color-3"
                    onClick={() => Toogle()}>
                    <TagLang group="button" tag="close" />
                </button>
            </ModalFooter>
        </Modal>
    );
}
