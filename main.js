// Select your list element
const list = document.querySelector('#results');

// Write insertMovies function
const insertMovies = (data) => {
  const movies = data.Search
  movies.forEach(result => {
    const movieCard = `
      <div>
        <h2>${result.Title}</h2>
        <p>${result.Year}</p>
        <img src=${result.Poster} alt=${result.Title}>
      </div>
    `;
    list.insertAdjacentHTML("beforeend", movieCard);
  })

  // data.Search.forEach((result) => {
  //   const movie = `<div class="card-movie">
  //         <div class="image-top">
  //           <img height="100%" src="${result.Poster}" />
  //         </div>
  //         <div class="content">
  //           <p>${result.Year}</p>
  //           <h5>${result.Title}</h5>
  //         </div>
  //     </div>`;
  //   list.insertAdjacentHTML('beforeend', movie);
  // });
};

// insertMovies(movieList);


// Write fetchMovies function
const API_key = "adf1f2d7";

const fetchMovies = query => {
  fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_key}`)
  .then(response => response.json())
  .then(data => insertMovies(data))
  .catch(() => alert("Got an error!"));
};

// fetchMovies("Scary");

const form = document.getElementById("search-form");

form.addEventListener("submit", event => {
  event.preventDefault();
  const input = document.getElementById("search-input");
  list.innerHTML = '';
  fetchMovies(input.value)
})

// const fetchMovies = (query) => {
//   fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_key}`)
//     .then(response => response.json())
//     .then(insertMovies);
// };

// Call your fetchMovies function
// fetchMovies('harry potter'); // on 1st page load

// Select form element
// const form = document.querySelector('#search-form');

// Add event listener to form
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   list.innerHTML = '';
//   const input = document.querySelector('#search-input');
//   fetchMovies(input.value);
// });