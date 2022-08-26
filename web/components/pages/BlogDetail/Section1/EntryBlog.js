import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { map } from "lodash";
import moment from "moment";

import useApp from "../../../../hooks/useApp";

import request from "../../../../helper/core_services/core/requestService";
import blog from "../../../../helper/core_services/endpoints/blog";
import capitalize from "../../../../helper/text/capitalize";
import { sortByAttr } from "../../../../helper/array/sort";

export default function EntryBlog() {
    const { query } = useRouter();
    const { locale } = useApp();
    const [data, setData] = useState({});

    useEffect(() => {
        if (query?.id) GetDataEntry();
    }, [query, locale]);

    const GetDataEntry = async () => {
        let req = await request(blog.get_post_staff, null, [query.id], {
            locale,
        });
        if (req != null) DrawDataEntry(req);
    };

    const DrawDataEntry = (info) => {
        sortByAttr();
        let date = info.created.replace("Z", "");
        let day = moment(date).format("DD");
        let month = moment(date).locale(locale).format("MMMM").slice(0, 3);
        month = capitalize(month);
        let pic = info.image == null ? defaultPic : info.image;
        let title = info.title;
        let content = info.content;
        let allContent = [];
        map(info.paragraphs, (element, index) => {
            let section = (
                <div className="sty-content" key={`content_${index}`}>
                    <p>{element.text}</p>
                </div>
            );
            allContent.push({ order: element.order, section });
        });
        map(info.images, (element, index) => {
            let pic = element.image == null ? defaultPic : element.image;
            let section = (
                <div className="sty-content-pic" key={`pic_${index}`}>
                    <img src={pic} />
                </div>
            );
            allContent.push({ order: element.order, section });
        });
        allContent = allContent.sortBy("order");
        let elements = [];
        elements = map(allContent, (element, i) => {
            return element.section;
        });
        let data = { day, month, pic, title, content, elements };
        setData(data);
    };

    return (
        <div className="sty-data-all-blog">
            <div className="text-center sty-cont-date">
                <div className="sty-day">{data.day}</div>
                <div className="sty-month">{data.month}</div>
            </div>
            <div className="sty-pic">{<img src={data.pic} />}</div>
            <div className="sty-cont-data">
                {<div className="sty-title">{data.title}</div>}
                <hr />
                <div className="sty-content">{<p>{data.content}</p>}</div>
                {data.elements}
            </div>
        </div>
    );
}
