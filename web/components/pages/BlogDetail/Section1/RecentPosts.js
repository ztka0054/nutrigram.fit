import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { map } from "lodash";
import moment from "moment";

import SetLink from "../../../modules/SetLink";
import useApp from "../../../../hooks/useApp";

import GetLanguage from "../../../../helper/i18n/getValueTagLang";
import request from "../../../../helper/core_services/core/requestService";
import blog from "../../../../helper/core_services/endpoints/blog";

export default function RecentPosts() {
    const { query } = useRouter();
    const { locale } = useApp();
    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(() => {
        if (query?.id) GetRecentPost();
    }, [query, locale]);

    const GetRecentPost = async () => {
        let params = { page_size: 5, page: 1 };
        let req = await request(blog.get_posts_staff, params, null, {
            locale,
        });
        if (req != null) DrawRecentPost(req);
    };

    const DrawRecentPost = (info) => {
        let recentPost = map(info.result, (element, i) => {
            let pic = element.image == null ? defaultPic : element.image;
            let id = element.id;
            let date = element.created.replace("Z", "");
            let dateF = moment(date).locale(locale).format("DD MMMM, YYYY");
            let title = element.title;
            return (
                <>
                    <SetLink route="/blog_detail" params={{ id }}>
                        <div className="sty-cont-ent">
                            <div className="sty-pic">
                                <img src={pic} />
                            </div>
                            <div className="sty-data">
                                <div className="sty-all-date sty-justify-left">
                                    <div className="sty-icon-c">
                                        <img src="/static/img/favicons/app/calendar.svg" />
                                    </div>
                                    <div className="sty-date">{dateF}</div>
                                </div>
                                <div className="sty-title">{title}</div>
                            </div>
                        </div>
                    </SetLink>
                </>
            );
        });
        setRecentPosts(recentPost);
    };

    return (
        <>
            <div className="sty-cont-tag-1">
                <div className="sty-u-sub-1">
                    {GetLanguage("blog", "sub_1")}
                </div>
            </div>
            <div className="">{recentPosts}</div>
        </>
    );
}
