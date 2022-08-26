import React, { useState, useEffect } from "react";
import { map } from "lodash";
import moment from "moment";

import SetLink from "../../../modules/SetLink";
import useApp from "../../../../hooks/useApp";

import capitalize from "../../../../helper/text/capitalize";
import request from "../../../../helper/core_services/core/requestService";
import blog from "../../../../helper/core_services/endpoints/blog";

export default function Section1() {
    const { locale } = useApp();
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        GetBlogEntries();
    }, []);

    const GetBlogEntries = async () => {
        let req = await request(blog.get_posts_staff, null, null, {
            locale,
        });
        if (req != null) DrawBlogEntries(req.result);
    };

    const DrawBlogEntries = (result) => {
        let elements = map(result, (element, index) => {
            let id = element.id;
            let date = element.created.replace("Z", "");
            let day = moment(date).format("DD");
            let month = moment(date).locale(locale).format("MMMM").slice(0, 3);
            month = capitalize(month);
            let pic = element.image == null ? defaultPic : element.image;
            let title = element.title;
            let content =
                locale == "es" ? element.content.es : element.content["en-us"];
            return (
                <div className="col-12 col-md-4" key={`blog_${index}}`}>
                    <SetLink route="/blog_detail" params={{ id }}>
                        <div className="sty-card-blog">
                            <div className="sty-calendar">
                                <div className="sty-day text-center">{day}</div>
                                <div className="sty-month text-center">
                                    {month}
                                </div>
                            </div>
                            <div className="sty-cont-pic">
                                <img src={pic} />
                            </div>
                            <div className="sty-blog-title">{title}</div>
                            <hr />
                            <div className="sty-blog-content line-clamp">
                                {content}
                            </div>
                        </div>
                    </SetLink>
                </div>
            );
        });
        setEntries(elements);
    };

    return (
        <section className="sty-blog">
            <div className="row justify-content-center sty-cont-blog-1">
                <div className="col-11">
                    <div className="row">{entries}</div>
                </div>
            </div>
        </section>
    );
}
