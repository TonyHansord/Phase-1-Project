const resultsSection = document.getElementById('results-section');
const searchTypeRadios = document.querySelectorAll('input[name="search-type"]');
document.addEventListener('DOMContentLoaded', () => {
  renderSearchForm(searchTypeRadios[0].id);
  searchTypeRadios.forEach((radio) => {
    radio.addEventListener('change', (event) => {
      renderSearchForm(event.target.id);
    });
  });
});

function renderSearchForm(searchType) {
  const formContainer = document.getElementById('form-div');
  formContainer.innerHTML = '';
  const form = document.createElement('form');
  const input = document.createElement('input');
  const inputLabel = document.createElement('label');
  const submitBtn = document.createElement('input');
  const inputString = `${searchType}-input`;
  input.id = inputString;
  input.name = inputString;
  inputLabel.htmlFor = inputString;

  switch (searchType) {
    case 'schedule':
      input.type = 'date';
      input.value = new Date().toISOString().slice(0, 10);
      console.log(input.value);
      input.min = '1950-01-01';
      input.max = '2050-12-31';
      inputLabel.textContent = 'Date';
      break;
    case 'show-name':
      input.type = 'text';
      input.placeholder = 'Enter Show Name';
      inputLabel.textContent = 'Show Name';
      break;
  }

  submitBtn.type = 'submit';
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchBox = document.getElementById(e.target[0].id);
    console.log(searchBox.value);
    searchType === 'schedule'
      ? fetchSchedule(searchBox.value)
      : fetchQuery(searchBox.value);
    form.reset();
  });
  form.append(inputLabel, input, submitBtn);
  formContainer.append(form);
}
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

function fetchSchedule(date) {
  fetch(scheduleSearch + date)
    .then((res) => res.json())
    .then((schedule) => console.log(schedule));
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
