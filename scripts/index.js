const resultsSection = document.getElementById('results-section');
document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector(`form`);
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchBox = document.querySelector('#search_box');
    console.log(searchBox);
    fetchQuery(searchBox.value);
    searchForm.reset();
  });
});

//Get value of searchbox when submit button pressed

//GET data from API based on what is entered in search box
// eg:`https://api.tvmaze.com/search/shows?%q=${value of search box}'`;

function fetchQuery(query) {
  const searchQuery = `${showSearch}?&q=${query}`;
  fetch(searchQuery)
    .then((res) => res.json())
    .then((results) => renderResults(results));
}

function fetchEpisodes(showID) {
  fetch(`https://api.tvmaze.com/shows/${showID}/episodes`)
    .then((res) => res.json())
    .then((results) => displayEpisodes(results));
}

//clear any results currently on the page
//render the results of the search query
//??? limit to only show 20 results per page?

const clearResults = (element) => {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
};

function renderResults(data) {
  clearResults(resultsSection);
  console.log(data);
  // let filteredData = filterResults(data.results, 'AU');
  // console.log(filteredData);
  for (let result of data) {
    //create an element for each result
    let showContainer = document.createElement('div');
    showContainer.className = 'result-container';
    // add a click event listener to clear results and display show information instead
    showContainer.addEventListener('click', () => {
      fetchEpisodes(result.show.id);
      clearResults(resultsSection);
    });
    let title = document.createElement('h1');
    title.textContent = result.show.name;
    let showImg = document.createElement('img');
    result.show.image !== null
      ? (showImg.src = result.show.image.medium)
      : (showImg.src = '#');
    showContainer.appendChild(title);
    showContainer.appendChild(showImg);
    resultsSection.appendChild(showContainer);
  }
}

function displayEpisodes(data) {
  console.log(data);
  for (let result of data) {
    //create an element for each result
    let epContainer = document.createElement('div');
    epContainer.className = 'result-container';
    // add a click event listener to clear results and display show information instead
    let title = document.createElement('h1');
    title.textContent = result.name;
    let showImg = document.createElement('img');
    result.image !== null
      ? (showImg.src = result.image.medium)
      : (showImg.src = '#');
    let summary = document.createElement('div');
    summary.innerHTML = result.summary;
    epContainer.appendChild(title);
    epContainer.appendChild(showImg);
    epContainer.appendChild(summary);
    resultsSection.appendChild(epContainer);
  }
}

//callback function to render show information
// fetch data for specific show using its ID
// also display list of episodes
