
$('#page').on('click', function () {
    gtag('event', 'enviar-tarefa', {
        'method': 'quiz',
    });
});

// gtag('event', 'click'>, {
//     'event_category': 'home',
//     'event_label': 'btn-home',
//     'value': <value>
//   });


  function trackClick(site, page) {
    gtag('event', 'click', {
        'event_category': site,
        'event_label': page
    });
};