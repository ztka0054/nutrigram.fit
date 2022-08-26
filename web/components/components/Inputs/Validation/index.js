import TagLang from "../../../modules/GetTagLang";

import style from "./error.module.scss";

export default function Validation({ error }) {
    return (
        <>
            {error && (
                <div className={`${style.error} ${error ? style.active : ""}`}>
                    <TagLang group={"validation"} tag={error} />
                </div>
            )}
        </>
    );
}
