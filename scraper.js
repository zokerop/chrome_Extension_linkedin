const profileData = {
    name: document.querySelector('.pv-top-card--list li:first-child').innerText,
    url: window.location.href,
    about: document.querySelector('.pv-about__summary-text .visually-hidden').innerText,
    bio: document.querySelector('.pv-top-card--list-1 .pv-top-card__list-item').innerText,
    location: document.querySelector('.pv-top-card--list-bullet .pv-top-card__location').innerText,
    follower_count: parseInt(document.querySelector('.pv-top-card--list-bullet .t-16').innerText.replace(/[^\d]/g, '')),
    connection_count: parseInt(document.querySelector('.pv-top-card--list-bullet .t-16').innerText.replace(/[^\d]/g, '')),
    bio_line: document.querySelector('.pv-entity__summary-info .t-16').innerText
  };
  
  fetch('http://localhost:3000/profiles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(profileData)
  }).then(response => {
    if (response.ok) {
      console.log('Profile data posted successfully.');
    } else {
      console.error('Failed to post profile data.');
    }
  });
  