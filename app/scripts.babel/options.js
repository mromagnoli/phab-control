function saveOptions() {
    var phabUrl = document.getElementById('phabUrl').value; // @TODO Set default value
    chrome.storage.sync.set({
        phabUrl: phabUrl,
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved!';
        setTimeout(function() {
            status.textContent = '';
            chrome.runtime.reload();
        }, 750);
    });
}

function restoreOptions() {
    var previousUrl = document.getElementById('previous_url');
    chrome.storage.sync.get('phabUrl', function(items) {
        if (!items.phabUrl) {
            previousUrl.textContent = 'Phab url not set yet.'
        }
        previousUrl.textContent = items.phabUrl;
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
