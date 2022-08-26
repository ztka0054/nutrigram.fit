import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { map } from "lodash";

import TagLang from "../../../../../../../modules/GetTagLang";

import request from "../../../../../../../../helper/core_services/core/requestService";
import apiMenu from "../../../../../../../../helper/core_services/endpoints/menu";

import ElementMenu from "./ElementMenu";

export default function ShowMenu({ idMenu }) {
    const router = useRouter();

    const [menuData, setMenuData] = useState({});
    const [elements, setElements] = useState([]);

    useEffect(() => {
        if (idMenu != null) DrawElements();
    }, [idMenu]);

    const DrawElements = async () => {
        let resultMenu = await request(apiMenu.get_menu, null, [idMenu], {
            locale: router.locale,
        });
        if (resultMenu != null) {
            let elements = map(resultMenu.mealTypeMenus, (element) => {
                return <ElementMenu element={element} />;
            });
            setMenuData(resultMenu);
            setElements(elements);
        }
    };

    return (
        <div className="row">
            <div className="col-12">
                <div className="sty-cont-input-2">
                    <div className="sty-tag">
                        <TagLang group={"input"} tag={"name_menu"} />
                    </div>
                    <div className="sty-value">{menuData?.name}</div>
                </div>
            </div>
            <div className="col-12">{elements}</div>
        </div>
    );
}
