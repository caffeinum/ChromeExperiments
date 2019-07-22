const blockGoogleAds = function () {
  // finds all the ads
  const ads = document.querySelectorAll('.ytd-browse.ytd-ad')

  // <div data-google-query-id="..."></div>

  // hide them
  ads.forEach(function (ad) {
    console.log('ad text', ad.innerText)
    if (ad.innerText.includes('ad')) {
      ad.remove()
    }
  })
}

blockGoogleAds()
