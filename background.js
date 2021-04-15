let color = '#cccccc';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
//   console.log('Default background color set to %cred', `color: ${color}`);


//   document.querySelector('body').addEventListener('select',  logSelection);

  // The body of this function will be executed as a content script inside the
  // current page



});

// function logSelection(event) {
//     const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//     console.log(selection);
//     console.log('testaaa');
// }

