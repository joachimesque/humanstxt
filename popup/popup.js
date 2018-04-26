function onError(error) {
  console.log(`Error: ${error}`);
}

function loadText(tab) {
  var humans = chrome.extension.getBackgroundPage().humansByTab[tab.id];
  if (humans) {
    var finalText = Autolinker.link(
      humans.text,
      {
        mention: "twitter",
        hashtag: "twitter"
      });

    document.getElementById("humansText").innerHTML = finalText;
    document.getElementById("humansLink").setAttribute("href", humans.link);
  } else {
    document.getElementById("humansText").textContent = "No humans were detected.";
  }
};


chrome.tabs.query({active: true, currentWindow: true}, function(result) {
  result.forEach(function(tab){loadText(tab)});
});


