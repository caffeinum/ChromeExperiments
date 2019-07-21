const blockGoogleAds = function () {
  // finds all the ads
  const ads = document.querySelectorAll('[data-google-query-id]')

  // hide them
  ads.forEach(function (ad) {
    ad.remove()
  })
}
