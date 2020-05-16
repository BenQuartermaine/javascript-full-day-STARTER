const list = document.querySelector('#results');

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

const fetchMovies = (query) => {
  fetch(`https://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then(insertMovies);
};

fetchMovies('harry potter'); // on 1st page load

const form = document.querySelector('#search-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  list.innerHTML = '';
  const input = document.querySelector('#search-input');
  fetchMovies(input.value);
});