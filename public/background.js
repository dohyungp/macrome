/* global chrome */

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log(tabId);
  console.log(tab);
  console.log(changeInfo);
  if (changeInfo?.status === "complete" && tab?.url?.startsWith("http"))
    chrome.tabs.executeScript(tabId, {
      file: "/static/js/main.js",
      allFrames: true,
      runAt: "document_end",
    });
});
