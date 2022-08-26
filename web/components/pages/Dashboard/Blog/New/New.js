import React from "react";

import GetLanguage from "../../../../../helper/i18n/getValueTagLang";

import Form from "../Forms/FormNewBlog";

export default function NewBlog() {
    return (
        <div className="sty-content-data-1">
            <div className="sty-card-title">
                {GetLanguage("dashboard", "tit_blog_1_2")}
            </div>
            <div className="col-12 sty-cont-form-1">
                <Form
                // onSubmit={this.handleForm}
                // handlePic={this.handlePic}
                // handleVideo={this.handleVideo}
                />
            </div>
        </div>
    );
}
