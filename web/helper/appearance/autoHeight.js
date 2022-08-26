export function autoHeight(element) {
    var h = window.innerHeight;
    element.style.minHeight = `${h}px`;
}
export function autoHeightNav(element) {
    var nav = document.getElementById("navBarFirst").offsetHeight;
    var h = window.innerHeight;
    element.style.minHeight = `${h - nav}px`;
}

export function autoHeightParalax(classname) {
    var nav = document.getElementById("navBarFirst").offsetHeight;
    var h = window.innerHeight;
    var elements = document.getElementsByClassName(classname);
    Array.prototype.forEach.call(elements, function (element) {
        element.style.minHeight = `${h - nav + 160}px`;
    });
}
