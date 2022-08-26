import React from "react";

import EntryBlog from "./EntryBlog";
import RecentPosts from "./RecentPosts";

export default function Section1() {
    return (
        <section className="class-heightNavBar sty-blog">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 col-md-8">
                                <div className="sty-cont-data-blog">
                                    <EntryBlog />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 sty-padding-side-0">
                                <div className="sty-cont-recent">
                                    <RecentPosts />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
