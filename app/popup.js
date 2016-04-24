var options = {
  hideAll: function(e) {
    return clickHandler('hideAll');
  }
};

function clickHandler(option) {
    chrome.runtime.sendMessage({directive: option}, function(response) {
        // nothing to do with response
    });
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('hideAll').addEventListener('click', options.hideAll);
});
