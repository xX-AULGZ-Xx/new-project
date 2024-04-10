const imageContainer = document.getElementById('image-container');

function fetchImages() {
  const url = 'https://script.google.com/macros/s/AKfycbz6mIJxNJB_lj1Qa2CWBaTo3ESD1lnNyDAOc1-rRuA/dev'; // Replace with your deployed script ID
  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.forEach(image => {
        const img = document.createElement('img');
        img.src = image.url;
        img.alt = image.filename; // Set alt text for accessibility
        imageContainer.appendChild(img);
      });
    })
    .catch(error => console.error(error));
}

fetchImages();
