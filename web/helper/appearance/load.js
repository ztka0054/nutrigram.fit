export var loadElement = (flag) => {
    let element = document.getElementById("id-load-element");
    if (flag) element.classList.add("show");
    if (!flag) {
        element.classList.remove("show");
        // element.addEventListener("webkitAnimationEnd", function(){
        //     element.classList.remove("hide")
        // });
    }
};
