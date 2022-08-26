import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import StructuredData from "react-google-structured-data";

import useApp from "../../../hooks/useApp";

const logo = "";

const defaultTitle = "Nutrigram";
const defaultDescription = "";
const defaultAuthor = "Nutrigram";

const ogType = "website";
const ogMetaImage = logo;
const ogMetaImageUrl = logo;
const ogMetaImageSecure = logo;
const ogMetaImageWidth = "960";
const ogMetaImageHeight = "960";
const ogMetaImageType = "image/png";
const ogMetaImageAlt = "Nutrigram";
const ogMetaTitle = "Nutrigram";
const ogMetaDescription = "";
const ogMetaUrl = "";
const ogKeywords = "";

export default function Header(props) {
    const { header } = props;
    const router = useRouter();
    // const { loadTagManager } = useApp();s

    const titleValue = header?.title ? header.title : defaultTitle;
    const descriptionValue = header?.description
        ? header.description
        : defaultDescription;
    const authorValue = header?.author ? header.author : defaultAuthor;

    useEffect(() => {
        // if (loadTagManager) {
        //     window.dataLayer.push({
        //         event: "pageview",
        //     });
        // }
    }, [router]);

    return (
        <>
            <Head>
                <meta
                    name="google-site-verification"
                    content="ttsynwyUQSgfGooWSfS1C06YtQiwn-ioFlWP7Uau5do"
                />
                <meta charSet="UTF-8"></meta>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=0"
                />
                {/* Pre */}
                {/* <link
                    rel="preload"
                    href="/static/fonts/formular/Formular.ttf"
                    as="font"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/static/fonts/formular/Formular-Light.ttf"
                    as="font"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/static/fonts/formular/Formular-Bold.ttf"
                    as="font"
                    crossOrigin="anonymous"
                /> */}
                {/*Ubication*/}
                <link rel="alternate" href="https://gluup.mx/" hrefLang="es" />
                <meta name="language" content="Spanish" />
                <meta httpEquiv="content-language" content="es" />
                <link rel="canonical" href="https://gluup.mx/" />
                {/*icon */}
                <link
                    media="all"
                    rel="shortcut icon"
                    href="/static/img/favicons/app/icon.ico"
                    type="image/x-icon"
                ></link>
                <link
                    media="all"
                    rel="icon"
                    href="/static/img/favicons/app/icon.ico"
                />
                {/* varaibles */}
                <title>{titleValue}</title>
                <meta name="description" content={descriptionValue} />
                <meta name="author" content={authorValue} />
                <meta name="keywords" content=""></meta>
                {/* og */}
                <meta
                    property="og:type"
                    content={
                        header?.ogValue?.type ? header.ogValue.type : ogType
                    }
                />
                <meta
                    property="og:title"
                    content={
                        header?.ogValue?.metaTitle
                            ? header.ogValue.metaTitle
                            : ogMetaTitle
                    }
                />
                <meta
                    property="og:description"
                    content={
                        header?.ogValue?.metaDescription
                            ? header.ogValue.metaDescription
                            : ogMetaDescription
                    }
                />
                <meta
                    property="og:image"
                    content={
                        header?.ogValue?.metaImage
                            ? header.ogValue.metaImage
                            : ogMetaImage
                    }
                />
                <meta
                    property="og:image:url"
                    content={
                        header?.ogValue?.metaImageUrl
                            ? header.ogValue.metaImageUrl
                            : ogMetaImageUrl
                    }
                />
                <meta
                    property="og:image:secure_url"
                    content={
                        header?.ogValue?.metaImageSecure
                            ? header.ogValue.metaImageSecure
                            : ogMetaImageUrl
                    }
                />
                <meta
                    property="og:image:width"
                    content={
                        header?.ogValue?.metaImageWidth
                            ? header.ogValue.metaImageWidth
                            : ogMetaImageWidth
                    }
                />
                <meta
                    property="og:image:height"
                    content={
                        header?.ogValue?.metaImageHeight
                            ? header.ogValue.metaImageHeight
                            : ogMetaImageHeight
                    }
                />
                <meta
                    property="og:image:type"
                    content={
                        header?.ogValue?.metaImageType
                            ? header.ogValue.metaImageType
                            : ogMetaImageType
                    }
                />
                <meta
                    property="og:image:alt"
                    content={
                        header?.ogValue?.metaImageAlt
                            ? header.ogValue.metaImageAlt
                            : ogMetaImageAlt
                    }
                />
                <meta
                    property="og:url"
                    content={
                        header?.ogValue?.metaUrl
                            ? header.ogValue.metaUrl
                            : ogMetaUrl
                    }
                />
                <meta
                    property="keywords"
                    content={
                        header?.ogValue?.keywords
                            ? header.ogValue.keywords
                            : ogKeywords
                    }
                />
            </Head>
            {/* <StructuredData
                type="Organization"
                data={{
                    url: "https://gluup.mx/",
                    logo: `https://osyres-software.com/static/img/favicons/app/logo.svg`,
                    name: "Osyres Software",
                    sameAs: [
                        "https://www.facebook.com/osyresSoftware",
                        "https://twitter.com/osyresSoftware",
                        "https://www.linkedin.com/company/osyres-software/",
                    ],
                }}
            /> */}
        </>
    );
}
