let x = document.getElementById("trigger")

document.getElementById("trigger").onclick = function () {
    open()
    x.classList.toggle("change")

};

function open() {
    document.getElementById("burger-menu").classList.toggle("show");
}