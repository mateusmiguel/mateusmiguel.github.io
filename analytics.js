function trackClick(site, page) {
    gtag('event', 'click', {
        'event_category': site,
        'event_label': page
    });
};

gtag('event', 'Usuario', {
  'nome': 'Mateus',
  'curso': 'ead',
  'cidade': 'Campinas',
  'cpf':'40894414801'
});