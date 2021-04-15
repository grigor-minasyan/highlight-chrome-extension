let color = '#cccccc';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cred', `color: ${color}`);
});
