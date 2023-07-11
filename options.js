document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('hideTickersForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const linesToHide = document.getElementById('linesToHide').value;
      chrome.storage.sync.set({ 'linesToHide': linesToHide }, function() {
        console.log('Lines to hide saved:', linesToHide);
      });
    });
  });