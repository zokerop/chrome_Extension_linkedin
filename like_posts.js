function likeRandomPosts(likeCount) {
    const posts = Array.from(document.querySelectorAll('.react-button__trigger'));
    const selectedPosts = posts.sort(() => 0.5 - Math.random()).slice(0, likeCount);

    selectedPosts.forEach((post, index) => {
        setTimeout(() => {
            post.click();
        }, index * 2000); // Click every 2 seconds to mimic human behavior
    });
}

likeRandomPosts(likeCount);
