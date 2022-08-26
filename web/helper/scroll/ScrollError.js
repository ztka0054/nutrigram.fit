import AbsolutePosition from "./AbsolutePosition";

const ScrollError = (idName = "field_error") => {
    setTimeout(() => {
        var element = document.getElementById(idName);
        if (element != null) {
            let scrollDiv = AbsolutePosition(element);

            window.scrollTo({ top: scrollDiv?.top, behavior: "smooth" });
        }
    }, 100);
};

export default ScrollError;
