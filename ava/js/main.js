// Check if card has more info element or if  
function checkReveal() {
    $('.card').each(function () {
        if ($(this).find('.card-reveal-content').text() !== '') {
            $(this).find('.card-content-dots').css('display', 'block');
        } else {
            $(this).find('.card-reveal').hide();
        }
    });
}

// Expand cards
function expandCards() {
    $('.card-content-dots').click(function (e) {
        $(this).parent().next().next('.card-reveal').css({
            'transform': 'translateY(0%)',
            'height': 'calc(100% - 46px)'
        });
    });
    $('.card-reveal-close').click(function () {
        $(this).parent().css({
            'transform': 'translateY(100%)',
            'height': '100%'
        });
    });
}

// Resize card size
function resizeCards() {
    function cardCalc(el) {
        var lenght = [];
        $(el).each(function () {
            $(this).attr('style', 'height: ');
            lenght.push($(this).height());
            lenght.sort();
        });

        var height = lenght.pop();

        $(el).each(function () {
            $(this).attr('style', 'height: ' + height + 'px');
        });
    }

    //Run first time.
    cardCalc($('.card .card-content .card-content-category'));
    cardCalc($('.card .card-content .card-content-title'));

    //Run again every time the window resized.
    var resizeCard;
    $(window).resize(function () {
        clearTimeout(resizeCard);
        resizeCard = setTimeout(function () {
            cardCalc($('.card .card-content .card-content-category'));
            cardCalc($('.card .card-content .card-content-title'));
            console.log($(window).width());
        }, 250);
    });
}

checkReveal();
expandCards();
resizeCards();