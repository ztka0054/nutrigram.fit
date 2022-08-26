import React, { Component } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay, virtualize } from "react-swipeable-views-utils";
import { mod } from "react-swipeable-views-core";
const AutoPlaySwipeableViews = autoPlay(virtualize(SwipeableViews));

import getTagLang from "../../../../helper/i18n/getValueTagLang";
import { testimonials } from "../../../../helper/constants/elements/home";

export default class Section2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            sliders: [],
            elements: testimonials(),
        };
    }

    componentWillMount() {
        this.handleSliders();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.lang != this.props.lang) {
            let component = this;
            this.setState({ elements: testimonials() });
            setTimeout(function () {
                component.handleSliders();
            }, 100);
        }
    }

    handleSliders = () => {
        let { elements } = this.state;
        let sliders = [];

        sliders = elements.map((element, i) => {
            return (
                <div className={"sty-cont-slide-1"} key={`sliders_${i}`}>
                    <div className="sty-u-data-3 sty-w">{element.text}</div>
                    <div className="sty-cont-data sty-justify-content">
                        <div className="sty-cont-pic">
                            <div className="sty-pic">
                                <img src={element.pic} />
                            </div>
                        </div>
                        <div className="sty-cont-text">
                            <div className="sty-name">{element.name}</div>
                            <div className="sty-job">{element.job}</div>
                        </div>
                    </div>
                </div>
            );
        });

        this.setState({
            sliders: sliders,
        });
    };

    onChangeIndex = (index) => {
        const { sliders } = this.state;

        this.setState({
            index: mod(index, sliders.length),
        });
    };

    slideRenderer = (params) => {
        const { sliders } = this.state;
        const { index, key } = params;

        return (
            <div className={"col-12"} key={key}>
                {sliders[mod(index, sliders.length)]}
            </div>
        );
    };

    clickChange = (e) => {
        let index = parseInt(e.currentTarget.id);
        this.setState({ index });
    };

    handleDraw = (index) => {
        let { elements } = this.state;
        let component = this;
        let tags = [];
        let navigation = [...Array(elements.length).keys()].map(function (
            element,
            i
        ) {
            var className = "";
            if (index == i) className = "sty-select";
            tags.push(
                <div className="sty-cont-tag">
                    <div
                        className={`sty-tag sty-justify-content ${className}`}
                        id={i}
                        onClick={component.clickChange}
                    >
                        <div className="sty-circle"></div>
                    </div>
                </div>
            );

            return <div className="sty-cont-all-tag">{tags}</div>;
        });

        return navigation;
    };

    render() {
        let { index } = this.state;

        return (
            <section className="class-height-b-1 sty-cont-back-img sty-home">
                <div className="sty-back-img-1">
                    <img src="/static/img/home/home_5.jpg" />
                </div>
                <div className="sty-courtain-b-2"></div>
                <div className="sty-back-img-5 sty-hide-resp-1">
                    <img src="/static/img/home/home_5_1.jpg" />
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-11">
                            <div className="row sty-justify-content class-height-b-1">
                                <div className="col-12 col-md-6">
                                    <div className="sty-u-sub-1 sty-w">
                                        {getTagLang("home", "sub_5")}
                                    </div>
                                    <div className="sty-u-sub-3 sty-w">
                                        {getTagLang("home", "title_5")}
                                    </div>
                                    <div className="sty-home-cont-5-1">
                                        <div className="row justify-content-end">
                                            <div className="col-12">
                                                <div className="sty-cont-sliders">
                                                    <AutoPlaySwipeableViews
                                                        index={index}
                                                        enableMouseEvents
                                                        interval={5000}
                                                        slideRenderer={
                                                            this.slideRenderer
                                                        }
                                                        onChangeIndex={
                                                            this.onChangeIndex
                                                        }
                                                    />
                                                    {this.handleDraw(index)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
