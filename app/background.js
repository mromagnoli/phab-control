// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains 'youtube.com'...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'phabricator.evbhome.com/D' },
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});


chrome.pageAction.onClicked.addListener(function(tab) {});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        switch (request.directive) {
        case "hideAll":
            // execute the content script
            chrome.tabs.executeScript(null, { // defaults to the current tab
                file: "main.js", // script to inject into page and run in sandbox
                allFrames: true // This injects script into iframes in the page and doesn't work before 4.0.266.0.
            });
            sendResponse({}); // sending back empty response to sender
            break;
        default:
            // helps debug when request directive doesn't match
            alert("Unmatched request of '" + request + "' from script to background.js from " + sender);
        }
    }
);