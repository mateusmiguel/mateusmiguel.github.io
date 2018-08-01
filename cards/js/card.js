function cards() {

    // Define Card element
    let card = '.card-group .card'
    let imgSize = checkHeight('.card-img img')
    let containerSize = checkHeight('.card-container')
    let headerSize = checkHeight('.card-header')

    $(card).each(function (i) {

        //Add a custom class for each card
        $(this).addClass('card-item-' + ++i);

        //Calc height of content and img:
        $(this).attr('style', 'height: ' + (imgSize + headerSize) + 'px')
        $('.card-container').attr('style', 'bottom: -' + (containerSize - headerSize) + 'px')
        
        //Hover effects
        $(this).hover(function () {
            $('.card-container').attr('style', 'bottom: 0')
        }, function () {
            //return to initial params
            $('.card-container').attr('style', 'bottom: -' + (containerSize - headerSize) + 'px')
        });

        // Make Clickable
        $(this).click(function () {
            window.location = $(this).find('a').attr('href');
            return false;
        })
    })

    // Apply hover class for animations


    // Apply hover class in tab navigation.
    // $(card).focus(function () {
    //     console.log('entrou')
    //     $(this).closest('.card').addClass('card-hover')
    // }).blur(function () {
    //     if (!$(this).val()) {
    //         console.log('saiu')
    //         $(this).closest('.card').removeClass('card-hover')
    //     }
    // })

    //get sizes Function
    function checkHeight(el) {
        return $(card + ' ' + el).outerHeight()
    }





    $(card).each(function () {


        //when hover
        // $(this).hover(function () {
        //     $(this).toggleClass('card-hover')
        //     $('.card-container').attr('style', 'bottom: 0')
        // })
        // $('this').hover(function(){
        //     $(this).toggleClass('card-hover')
        //     $('.card-container').attr('style', 'bottom: 0')
        // }, function(){
        //     $(this).css({ //other stuff });
        // });


    })








    function calcHeight() {

        function calc(el) {
            var lenght = []
            $(el).each(function () {
                lenght.push($(this).outerHeight())
                lenght.sort()
            })

            return lenght.pop()
        }



        //Aplicar para todas

        // $(this).attr('style', 'height: ' + img + 'px')

        // function ChangeHeight(el) {
        //     $(el).each(function () {
        //         $(this).attr('style', 'height:'  + headerCardSize +'px')
        //     })
        // }

        // Get the size header (title + subtitle, including padding)

        // Appply size of header in elements
        // ChangeHeight('.card-header')
        // ChangeHeight('.card-content')


        // $(el).each(function () {
        //     $(this).attr('style', 'height: ' + height + 'px')
        // })

        //set size for every card title.
        // function ChangeHeight(el) {
        //     $(el).each(function () {
        //         $(this).attr('style', 'height:'  + headerCardSize +'px')
        //     })
        // }
    }
    // calcHeight()

    //Get size of bigger card header




    //set size for every card title.
    // function ChangeHeight(el) {
    //     $(el).each(function () {
    //         $(this).attr('style', 'height:'  + headerCardSize +'px')
    //     })
    // }
}





// Invert title and img order
// if ($(window).width() > 560) {
//     $(card).each(function () {
//         $(this).find('.card-title').insertBefore($(this).find('.card-sub'))
//     })
// } else {
//     $(card).each(function () {
//         $(this).find('.card-title').insertBefore($(this).find('.card-img'))
//     })
// }

//Recalc card sizes
// function cardCalc(el) {

//     var lenght = []

//     $(el).each(function () {
//         $(this).attr('style', 'height: ')
//         lenght.push($(this).height())
//         lenght.sort()
//     })

//     var height = lenght.pop()

//     $(el).each(function () {
//         $(this).attr('style', 'height: ' + height + 'px')
//     })
// }

// cardCalc(card + ' .card-title')
// cardCalc(card + ' .card-sub')


// var resizeCard
// $(window).resize(function () {
//     clearTimeout(resizeCard)
//     resizeCard = setTimeout(function () {
//         cards()
//         console.log($(window).width())
//     }, 250)
// })




// let titleCardSize = $(card + ' .card-title').outerHeight() + $(card + ' .card-subtitle').outerHeight();

// First,  apply height of '.card-content' without the aditional information and 
// the full height of 'img'. This second part is important for animations works correctly.
// $(card + ' .card-content').attr('style', 'height: ' + (titleCardSize +) + 'px')

// After that,  two things must happen for work when mouse is hover on div:
//   1) In '.card-content', apply the full heigt of itself.
//   2) Calc the size of 'img' - 'aditional information' and apply in img.


// Duplicate cards
// var i;
// for (i = 0; i < 2; i++) {
//     $('.card-wrap').clone().appendTo('.card-group')
// }






//Init functions
cards()