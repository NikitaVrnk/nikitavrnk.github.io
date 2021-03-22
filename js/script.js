$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 2,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 800,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});



// СПОЙЛЕР

function hasClass(elem, className) { // проверка на hasClass
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

function spoiler(el) {
    var text = el.parentNode.querySelector(".spoilerText"); // находим .spoilerText в полученном элементе 

    if (!hasClass(text, 'active')) {
        // text.style.height = "150px";
        text.classList.add('active');

    } else {
        // text.style.height = "0px";
        text.classList.remove('active');
    }

}