var cardsResize = function () {
    function cardCalc(el) {

        var lenght = []

        $(el).each(function () {
            $(this).attr('style', 'height: ')
            lenght.push($(this).height())
            lenght.sort()
        })
        
        $(el).each(function () {
            $(this).attr('style', 'height: ' + enght.pop() + 'px')
        })
    }

    cardCalc('#page-site-index #block-region-h-lg-e-course .catalog-card-title-top')
    cardCalc('#page-site-index .card-body .titleHeightCard')
}



var cards = function () {
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

    cardCalc('.card-group .card .card-title')
    cardCalc('.card-group .card .card-sub')
}

window.onload = cards
window.onresize = cards