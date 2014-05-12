var Browser = require("zombie")

// Configure the browser globally
Browser.debug = true;

Browser.visit("http://www.d20pfsrd.com/feats", function (e, browser) {
  var hits = browser.queryAll("td a")
  var feats= [];
  for (var i = 0; i < hits.length; i++) {
    var anchor = hits[i];

    if (browser.html(anchor).match(/feats\//))
      feats.push(browser.text(anchor))
  }

  console.log(feats.length);
});
