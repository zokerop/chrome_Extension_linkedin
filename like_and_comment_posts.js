function likeAndCommentRandomPosts(likeCount, commentCount) {
    const posts = Array.from(document.querySelectorAll('.react-button__trigger'));
    const selectedPosts = posts.sort(() => 0.5 - Math.random()).slice(0, likeCount);
    const commentButtonSelector = '.comments-comment-box__comment-button';

    selectedPosts.forEach((post, index) => {
        setTimeout(() => {
            post.click();

            if (index < commentCount) {
                setTimeout(() => {
                    const commentBox = document.querySelector('div.comments-comment-box__editor textarea');
                    if (commentBox) {
                        commentBox.value = 'CFBR';
                        const inputEvent = new Event('input', { bubbles: true });
                        commentBox.dispatchEvent(inputEvent);
                        setTimeout(() => {
                            const commentButton = document.querySelector(commentButtonSelector);
                            if (commentButton) {
                                commentButton.click();
                            }
                        }, 2000);
                    }
                }, 2000);
            }
        }, index * 4000); // Perform actions every 4 seconds to mimic human behavior
    });
}

likeAndCommentRandomPosts(likeCount, commentCount);
