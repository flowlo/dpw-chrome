chrome.webRequest.onBeforeSendHeaders.addListener(
    function (info) {
        info.requestHeaders.forEach(function(header) {
            if (header.name.toLowerCase() == 'user-agent')
                header.value = "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)";
        });  
        return {requestHeaders: info.requestHeaders};
    },
    {
        urls: ["https://webportal.deloitte.at/dpw/scripts/webextern.wsc/*"],
        types: ["main_frame", "sub_frame"]
    },
    ["blocking", "requestHeaders"]
);
