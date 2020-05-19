// Select your list element
const list = document.querySelector('#results');

// Write insertMovies function
const insertMovies = (data) => {
  console.log(data)
  data.Search.forEach((result) => {
    const movie = `<div class="card-movie">
          <div class="image-top">
            <img height="100%" src="${result.Poster}" />
          </div>
          <div class="content">
            <p>${result.Year}</p>
            <h5>${result.Title}</h5>
          </div>
      </div>`;
    list.insertAdjacentHTML('beforeend', movie);
  });
};

// Write fetchMovies function
const fetchMovies = (query) => {
  fetch(`https://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then(insertMovies);
};

// Call your fetchMovies function
fetchMovies('harry potter'); // on 1st page load

// Select form element
const form = document.querySelector('#search-form');

// Add event listener to form
form.addEventListener('submit', (event) => {
  event.preventDefault();
  list.innerHTML = '';
  const input = document.querySelector('#search-input');
  fetchMovies(input.value);
});