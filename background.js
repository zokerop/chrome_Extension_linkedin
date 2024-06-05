chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'openLinks') {
        const { links } = request;

        links.forEach((link, index) => {
            setTimeout(() => {
                chrome.tabs.create({ url: link, active: index === 0 });
            }, index * 5000); // Open a new tab every 5 seconds
        });
    } else if (request.action === 'likeAndCommentPosts') {
        chrome.tabs.create({ url: 'https://www.linkedin.com/feed/', active: true }, (tab) => {
            chrome.tabs.onUpdated.addListener(function listener(tabId, changeInfo) {
                if (tabId === tab.id && changeInfo.status === 'complete') {
                    chrome.tabs.onUpdated.removeListener(listener);
                    chrome.tabs.executeScript(tabId, { code: `var likeCount = ${request.likeCount}; var commentCount = ${request.commentCount};` }, () => {
                        chrome.tabs.executeScript(tabId, { file: 'like_and_comment_posts.js' });
                    });
                }
            });
        });
    }
});
