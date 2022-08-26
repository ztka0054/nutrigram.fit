export function mountHeight(classname) {
    // var nav = document.getElementById('id_navBar').offsetHeight
    var h = window.innerHeight
    var elements = document.getElementsByClassName(classname);
    Array.prototype.forEach.call(elements, function(element) {
        element.style.height = (h)+'px'
    });
}
