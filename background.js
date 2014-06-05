chrome.webNavigation.onErrorOccurred.addListener(function(details) 
{
    if (details.frameId != 0) //ignore subframes. 0 is main frame
    { return; }
    setTimeout(function () {chrome.tabs.update(details.tabId, {url:details.url})}, 30000);    
});
