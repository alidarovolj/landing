import $ from 'jquery'


$(document).ready(function () {

    $('.slide').each(function () {

    });

    var a = 0;
    var c = 1;
    $('.arrow_second').on('click', function () {
        if (a === 0) {
            $('.inner_carousel').css({
                transform: 'translateX(-33.3%)'
            });
            a = 1;
            c = 1;
            console.log(a, c);
        } else if (a === 1) {
            $('.inner_carousel').css({
                transform: 'translateX(-66.6%)'
            });
            a = 2;
            c = 2;
            console.log(a, c);

        } else if (a === 2) {
            $('.inner_carousel').css({
                transform: 'translateX(0)'
            })
            a = 0;
            c = 0;
            console.log(a, c);
        }
    });
    $('.arrow_first').on('click', function () {
        if (c === 0) {
            $('.inner_carousel').css({
                transform: 'translateX(0)'
            });
            c = 1;
            a = 1;
            console.log(c, a);
        } else if (c === 1) {
            $('.inner_carousel').css({
                transform: 'translateX(-66.6%)'
            });
            c = 2;
            a = 2;
            console.log(c, a);

        } else if (c === 2) {
            $('.inner_carousel').css({
                transform: 'translateX(-33.3%)'
            })
            c = 0;
            a = 0;
            console.log(c, a);
        }
    });
});