document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btn').addEventListener('click', function() {
    chrome.tabs.executeScript({
      file: 'main.js'
    })
  });
})
