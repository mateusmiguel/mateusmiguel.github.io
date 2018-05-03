function trackClick(site, page) {
    gtag('event', 'click', {
        'event_category': site,
        'event_label': page
    });
};

gtag('event', 'conversion', {
  'value': 1.0,
  'currency': 'USD'
});