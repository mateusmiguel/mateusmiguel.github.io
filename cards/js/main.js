function cards() {

    //Make clicable
    let card = '.card-group .card'

    $(card).each(function () {
        $(this).click(function () {
            window.location = $(this).find('a').attr('href');
            return false;
        })
    })


    // Invert title and img order
    if ($(window).width() > 560) {
        $(card).each(function () {
            $(this).find('.card-title').insertBefore($(this).find('.card-sub'))
        })
    } else {
        $(card).each(function () {
            $(this).find('.card-title').insertBefore($(this).find('.card-img'))
        })
    }

    //Recalc card sizes
    function cardCalc(el) {

        var lenght = []

        $(el).each(function () {
            $(this).attr('style', 'height: ')
            lenght.push($(this).height())
            lenght.sort()
        })

        var height = lenght.pop()

        $(el).each(function () {
            $(this).attr('style', 'height: ' + height + 'px')
        })
    }

    cardCalc(card + ' .card-title')
    cardCalc(card + ' .card-sub')
}

var resizeCard
$(window).resize(function () {
    clearTimeout(resizeCard)
    resizeCard = setTimeout(function () {
        cards()
        console.log($(window).width())
    }, 250)
})


window.onload = cards;