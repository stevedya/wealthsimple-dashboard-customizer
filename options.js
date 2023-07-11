document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('hideTickersForm');

    chrome.storage.sync.get(['linesToHide'], function(result) {
      const linesToHide = result.linesToHide;
      const linesToHideInput = document.getElementById('linesToHide');
      linesToHideInput.value = linesToHide;
    })

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const linesToHide = document.getElementById('linesToHide').value;
      chrome.storage.sync.set({ 'linesToHide': linesToHide }, function() {
        console.log('Lines to hide saved:', linesToHide);
      });
    });
  });