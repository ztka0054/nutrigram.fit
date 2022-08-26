import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import { Link } from '../../../routes'
import {urlsApp} from '../../../helper/constants/externalUrl'

import getTagLang from '../../../helper/i18n/getValueTagLang'
import constParallax from '../../../helper/appearance/parallax'

export default class Section2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {lang} = this.props
    return (
        <section className="class-heightNavBar class-autoheight-m">
            <Parallax strength={300} className="sty-cont-parallax">
              <div className="container-fluid sty-home">
                  <div className="row justify-content-center">
                      <div className="col-11 col-md-5">
                        <div className="row sty-justify-content class-autoheight-m">
                          <div className="col-12 text-center">
                            <div className="sty-u-sub-1-1">
                              {getTagLang('app','com_title_1')}
                            </div>
                            <div className="sty-u-sub-2">
                              {getTagLang('app','com_title_2')}
                            </div>
                            <div className="sty-u-data-1">
                              {getTagLang('app','com_title_3')}
                            </div>
                            <div className="sty-home-cont-1-1 text-center">
                              <div className="sty-cont-button-1">
                                <div className="sty-cont-button-1">
                                  <div className="sty-button-app">
                                    <img src="/static/img/app/store.png"/>
                                  </div>
                                </div>
                              </div>
                              <div className="sty-cont-button-2">
                                <div className="sty-cont-button-2">
                                  <div className="sty-button-app">
                                    <img src="/static/img/app/google.png"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
              <Background className="sty-custom-bg class-autoheight-p">
                  <img src="/static/img/app/comingsoon.jpg" alt="fill murray" />
              </Background>
            </Parallax>
            {/* <div className="sty-back-img-1">
              <img src="/static/img/home/home_1.jpg"/>
            </div> */}
        </section>
    );
  }
}