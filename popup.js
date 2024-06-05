document.addEventListener('DOMContentLoaded', () => {
    const likeCountInput = document.getElementById('likeCount');
    const commentCountInput = document.getElementById('commentCount');
    const scrapeButton = document.getElementById('scrape');
    const likePostsButton = document.getElementById('likePosts');

    function updateButtonState() {
        const likeCount = likeCountInput.value;
        const commentCount = commentCountInput.value;
        scrapeButton.disabled = !likeCount || !commentCount;
        likePostsButton.disabled = !likeCount || !commentCount;
    }

    likeCountInput.addEventListener('input', updateButtonState);
    commentCountInput.addEventListener('input', updateButtonState);

    scrapeButton.addEventListener('click', () => {
        const profileLinks = [
            'https://www.linkedin.com/in/princemeghani',
            'https://www.linkedin.com/in/priyanshu-kumar-0b426b304',
            'https://www.linkedin.com/in/arjun-singh14'
        ];

        chrome.runtime.sendMessage({ action: 'openLinks', links: profileLinks });
    });

    likePostsButton.addEventListener('click', () => {
        const likeCount = parseInt(likeCountInput.value);
        const commentCount = parseInt(commentCountInput.value);
        chrome.runtime.sendMessage({ action: 'likeAndCommentPosts', likeCount, commentCount });
    });
});
