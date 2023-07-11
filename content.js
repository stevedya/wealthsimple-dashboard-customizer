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

  function observeDOM() {
    const list = document.querySelector('[data-qa="wstrade-position-list"]');
    if (list) {
          chrome.storage.sync.get(['linesToHide'], function(result) {
          const linesToHide = result.linesToHide;
          const buttons = list.querySelectorAll('button');
          // Perform your actions on the buttons here
          hideSecurities(linesToHide, buttons);
        });
    } 
  }
  
  const observer = new MutationObserver(observeDOM);
  
  // Start watching for mutations
  observer.observe(document.body, { childList: true, subtree: true });
  
  function hideSecurities(linesToHide, buttons) {
    const lines = linesToHide.split(',');
    
    lines.forEach((line) => {
      buttons.forEach(function(button) {
        const textExists = searchForText(button, line.trim());
        if (textExists) {
          // Hide the button or perform other actions
          button.style.display = 'none';
        }
      });
    });
  }