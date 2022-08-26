import React from "react";
import { useRouter } from "next/router";

import GetLanguage from "../../../../../helper/i18n/getValueTagLang";

import Form from "../Forms/FormNewBlog";

export default function Detail() {
    const { query } = useRouter();

    return (
        <div className="sty-content-data-1">
            <div className="sty-card-title">
                {GetLanguage("dashboard", "tit_blog_1_3")}
            </div>
            <div className="col-12 sty-cont-form-1">
                <Form idElement={query.id} />
            </div>
        </div>
    );
}
