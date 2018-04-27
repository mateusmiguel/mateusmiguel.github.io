function trackClick(site, page) {
    gtag('event', 'click', {
        'event_category': site,
        'event_label': page
    });
};