var fs = require("fs");
var Browser = require("zombie");
var featCategories = ["general", "combat", "racial"];

// Configure the browser globally
Browser.debug = true;

Browser.visit("http://www.d20pfsrd.com/feats", function (e, browser) {
  var hits, feats, dump, pretty;
  hits = browser.queryAll("td a")
  feats = [];

  for (var i = 0; i < hits.length; i++) {
    var anchor = hits[i];

    for (var j = 0; j < featCategories.length; j++) {
      var reg = new RegExp(featCategories[j] + "-feats/");

      if (browser.html(anchor).match(reg)) {
        feats.push({name: anchor.textContent, url: anchor.href});
      }

    }

  }
  fs.writeFile("./dump-feats", JSON.stringify(feats, null, 2));
});
