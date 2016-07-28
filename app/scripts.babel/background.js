'use strict';

// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function () {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {

    chrome.storage.sync.get('phabUrl', function (items) {
      var phabUrl = items.phabUrl;
      // With a new rule ...
      chrome.declarativeContent.onPageChanged.addRules([{
        // That fires when a page's URL contains the following
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { urlContains: phabUrl }
        })],
        // And shows the extension's page action.
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });
});

chrome.pageAction.onClicked.addListener(function (tab) {});

chrome.commands.onCommand.addListener(function (command) {
  switch (command) {
    case 'hide-comments':
      executeScript('scripts/hideAllComments.js');
      break;

    case 'show-comments':
      executeScript('scripts/showAllComments.js');
      break;
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request.directive) {
    case 'hideAll':
      executeScript('scripts/hideAllComments.js');
      sendResponse({}); // sending back empty response to sender
      break;
    case 'showAll':
      executeScript('scripts/showAllComments.js');
      sendResponse({}); // sending back empty response to sender
      break;
    default:
      // helps debug when request directive doesn't match
      alert('Unmatched request of ' + request + ' from script to background.js from ' + sender);
  }
});

function executeScript(scriptFilename) {
  chrome.tabs.executeScript(null, { // defaults to the current tab
    file: scriptFilename, // script to inject into page and run in sandbox
    allFrames: true // This injects script into iframes in the page and doesn't work before 4.0.266.0.
  });
}