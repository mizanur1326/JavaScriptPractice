fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
