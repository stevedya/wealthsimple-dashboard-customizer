function searchForText(element, searchText) {
  if (element.textContent.includes(searchText)) {
    return element;
  }

  for (let i = 0; i < element.children.length; i++) {
    const foundElement = searchForText(element.children[i], searchText);
    if (foundElement) {
      return foundElement;
    }
  }

  return null;
}

chrome.storage.sync.get(['linesToHide'], function(result) {
    const linesToHide = result.linesToHide;
    if (linesToHide) {
      const lines = linesToHide.split(',');
      lines.forEach(function(line) {
        const list = document.querySelector('[data-qa="wstrade-position-list"]');
        const buttons = list.querySelectorAll('button');
        buttons.forEach(function(button) {
            const foundElement = searchForText(button, line);
            if (foundElement) {
              foundElement.style.display = 'none';
            }
        });
      });
    }
  });