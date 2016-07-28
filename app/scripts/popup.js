'use strict';

var options = {
  hideAll: function hideAll(e) {
    return clickHandler('hideAll');
  },
  showAll: function showAll(e) {
    return clickHandler('showAll');
  }
};

function clickHandler(option) {
  chrome.runtime.sendMessage({ directive: option }, function (response) {
    // nothing to do with response
  });
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('hideAll').addEventListener('click', options.hideAll);
  document.getElementById('showAll').addEventListener('click', options.showAll);
});