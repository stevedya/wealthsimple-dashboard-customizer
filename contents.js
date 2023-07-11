
chrome.storage.sync.get(['linesToHide'], function(result) {
    const linesToHide = result.linesToHide;
    if (linesToHide) {
      const lines = linesToHide.split(',');
      lines.forEach(function(line) {
        const elements = document.querySelectorAll(`:contains("${line.trim()}")`);
        elements.forEach(function(element) {
            const parentButton = element.closest('button');
            if (parentButton) {
                parentButton.style.dispaly = 'none';
            }
        });
      });
    }
  });