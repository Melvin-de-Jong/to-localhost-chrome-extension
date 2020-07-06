
chrome.browserAction.onClicked.addListener(function (tab) {

  chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    let url = tabs[0].url;
    // use `url` here inside the callback because it's asynchronous!

    var parser = new URL(url);

    var localhost = ' localhost:8888';

    var newUrl = localhost + parser.pathname + parser.search;

    chrome.tabs.update(tabs[0].tabId, { "url": newUrl });
  });
});