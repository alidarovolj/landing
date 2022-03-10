import $ from 'jquery'

$(document).ready(function () {
    $('.slide').each(function () {

    });
    $('.arrow_second').on('click', function () {
        if ($('.slide:nth-child(2)').hasClass('active')) {
            $('.slide:nth-child(3)').css({
                transform: 'translateX(-200%)'
            })
        } else {
            console.log('asdsadasdsa')
        }
    });
});