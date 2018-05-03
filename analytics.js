function trackClick(site, page) {
    gtag('event', 'click', {
        'event_category': site,
        'event_label': page
    });
};

gtag('event', 'dinheiro', {
  'value': 1.0,
  'currency': 'R$'
});