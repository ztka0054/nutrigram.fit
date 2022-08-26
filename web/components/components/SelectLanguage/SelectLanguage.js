import TagLang from "../../modules/GetTagLang";

import style from "./selectlanguage.module.scss";

export default function SelectLanguage({
    children,
    statusLanguage = 1,
    setStatusLanguage = () => {},
    error = null,
}) {
    return (
        <>
            <div className={style.content} id={error ? "field_error" : ""}>
                <div className={style.languageTags}>
                    <div
                        className={`${style.languageTag} ${
                            statusLanguage == 1 ? style.active : ""
                        }`}
                        onClick={() => setStatusLanguage(1)}>
                        <TagLang group={"input"} tag={"spanish"} />
                    </div>
                    <div
                        className={`${style.languageTag} ${
                            statusLanguage == 2 ? style.active : ""
                        }`}
                        onClick={() => setStatusLanguage(2)}>
                        <TagLang group={"input"} tag={"english"} />
                    </div>
                </div>
                <div className={style.contData}>{children}</div>
            </div>
            <div className={`${style.tagError} ${error ? style.active : ""}`}>
                <TagLang group={"validation"} tag={error} />
            </div>
        </>
    );
}
