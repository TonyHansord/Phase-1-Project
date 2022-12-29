const resultsSection = document.getElementById('results-section');
const menuContainer = document.getElementById('filter-container');
const searchTypeRadios = document.querySelectorAll('input[name="search-type"]');
const seventiesBtn = document.getElementById('70s');
const eightiesBtn = document.getElementById('80s');
const ninetiesBtn = document.getElementById('90s');
const allShows = [];

document.addEventListener('DOMContentLoaded', () => {
  fetchAllShows();

  seventiesBtn.addEventListener('click', () => {
    let filteredData = filterShows('197');
    showFilterSortMenu(filteredData);
    renderResults(filteredData);
  });
  eightiesBtn.addEventListener('click', () => {
    let filteredData = filterShows('198');
    showFilterSortMenu(filteredData);
    renderResults(filteredData);
  });
  ninetiesBtn.addEventListener('click', () => {
    let filteredData = filterShows('199');
    showFilterSortMenu(filteredData);
    renderResults(filteredData);
  });

  renderSearchForm(searchTypeRadios[0].id);
  searchTypeRadios.forEach((radio) => {
    radio.addEventListener('change', (event) => {
      renderSearchForm(event.target.id);
    });
  });
});

function fetchAllShows() {
  for (let i = 0; i < 265; i++) {
    fetch(`https://api.tvmaze.com/shows?page=${i}`)
      .then((res) => res.json())
      .then((shows) => {
        shows.forEach((show) => {
          allShows.push(show);
        });
        console.log('done');
      });
  }
}

function filterShows(timeFrame) {
  return allShows.filter((show) => {
    if (show['premiered'] !== null) {
      return show['premiered'].startsWith(timeFrame);
    }
  });
}

function filterResultsByGenre(data, genre = 'comedy') {
  return data.filter((show) => {
    return show.genres.includes(genre);
  });
}

// console.log(filteredData);

function renderSearchForm(searchType) {
  const formContainer = document.getElementById('form-div');
  formContainer.innerHTML = '';
  const form = document.createElement('form');
  const input = document.createElement('input');
  const dropDown = document.createElement('select');
  showCountry.forEach((country) => {
    const option = document.createElement('option');
    option.id = country.countryCode;
    option.value = country.countryCode;
    option.textContent = country.countryName;
    dropDown.appendChild(option);
  });
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
      dropDown.style.display = 'flex';
      fetchSchedule(dropDown.value, input.value);
      break;
    case 'show-name':
      input.type = 'text';
      input.placeholder = 'Enter Show Name';
      inputLabel.textContent = 'Show Name';
      dropDown.style.display = 'none';
      break;
  }

  submitBtn.type = 'submit';
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
    const searchBox = document.getElementById(e.target[0].id);
    const countrySel = document.querySelector('select');
    console.log(searchBox.value);
    searchType === 'schedule'
      ? fetchSchedule(countrySel.value, searchBox.value)
      : fetchQuery(searchBox.value);
  });
  form.append(inputLabel, input, dropDown, submitBtn);
  formContainer.append(form);
}

function showFilterSortMenu(data) {
  const genreFilter = document.createElement('select');
  genreFilter.id = 'genre-filter';
  const genreFilterLabel = document.createElement('label');

  showGenres.forEach((genre) => {
    const genreMenuOption = document.createElement('option');
    genreMenuOption.id = genre.toLowerCase();
    genreMenuOption.value = genre;
    genreMenuOption.textContent = genre;
    genreFilter.addEventListener('change', (e) => {
      const filteredData = filterResultsByGenre(data, e.target.value);
      renderResults(filteredData);
    });
    genreFilter.appendChild(genreMenuOption);
  });
  genreFilterLabel.htmlFor = 'genre-filter';
  genreFilterLabel.textContent = 'Genre';

  clearContainer(menuContainer);
  menuContainer.append(genreFilterLabel, genreFilter);
}

//Get value of searchbox when submit button pressed

//GET data from API based on what is entered in search box
// eg:`https://api.tvmaze.com/search/shows?%q=${value of search box}'`;

function fetchQuery(query) {
  const searchResults = allShows.filter((show) => {
    if (show['name'] !== null) {
      return show['name'].startsWith(query);
    }
  });
  showFilterSortMenu(searchResults);
  renderResults(searchResults);

  // const searchQuery = `${showSearch}?&q=${query}`;
  // fetch(searchQuery)
  //   .then((res) => res.json())
  //   .then((results) => renderResults(results));
}

function fetchEpisodes(showID) {
  fetch(`https://api.tvmaze.com/shows/${showID}/episodes`)
    .then((res) => res.json())
    .then((results) => displayEpisodes(results));
}

function fetchSchedule(country, date) {
  fetch(`${scheduleSearch}country=${country}&date=${date}`)
    .then((res) => res.json())
    .then((schedule) => displaySchedule(schedule));
}

//clear any results currently on the page
//render the results of the search query
//??? limit to only show 20 results per page?

const clearContainer = (element) => {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
};

function renderResults(data) {
  clearContainer(resultsSection);
  resultsSection.className = 'search-results';

  for (let result of data) {
    //create an element for each result

    // console.log(result.genres.includes('Comedy'));

    const showInfo = 'show' in result ? result.show : result;

    let showContainer = document.createElement('div');
    showContainer.className = 'result-container';
    // add a click event listener to clear results and display show information instead
    showContainer.addEventListener('click', () => {
      console.log(showInfo);
      fetchEpisodes(showInfo.id);
      clearContainer(resultsSection);
      clearContainer(menuContainer);
      resultsSection.className = 'episodes';
    });

    // console.log(showInfo);
    let title = document.createElement('h1');
    title.textContent = showInfo.name;
    let showImg = document.createElement('img');
    showInfo.image !== null
      ? (showImg.src = showInfo.image.medium)
      : (showImg.style.display = 'none');
    showContainer.appendChild(title);
    showContainer.appendChild(showImg);
    resultsSection.appendChild(showContainer);
  }
}

function displayEpisodes(data) {
  // console.log(data);
  const numSeasons = data[data.length - 1].season;
  console.log(numSeasons);

  for (let i = 1; i <= numSeasons; i++) {
    //create a container for each season
    let seasonContainer = document.createElement('div');
    seasonContainer.className = `season-container`;
    seasonContainer.id = `season-${i}`;
    let seasonTitle = document.createElement('h1');
    seasonTitle.textContent = `Season ${i}`;
    seasonContainer.appendChild(seasonTitle);

    //create an element for each episode
    let seasonEpisodes = data.filter((episode) => {
      return episode.season === i;
    });

    for (let episode of seasonEpisodes) {
      let epContainer = document.createElement('div');
      epContainer.className = 'result-container';
      // add a click event listener to clear results and display show information instead
      let title = document.createElement('h3');
      title.textContent = episode.name;
      let showImg = document.createElement('img');
      episode.image !== null
        ? (showImg.src = episode.image.medium)
        : (showImg.style.display = 'none');
      let summary = document.createElement('div');
      summary.innerHTML = episode.summary;
      epContainer.appendChild(title);
      epContainer.appendChild(showImg);
      epContainer.appendChild(summary);
      seasonContainer.appendChild(epContainer);
    }

    resultsSection.appendChild(seasonContainer);
  }

  // for (let result of data) {
  //   //create an element for each result
  //   let epContainer = document.createElement('div');
  //   epContainer.className = 'result-container';
  //   // add a click event listener to clear results and display show information instead
  //   let title = document.createElement('h1');
  //   title.textContent = result.name;
  //   let showImg = document.createElement('img');
  //   result.image !== null
  //     ? (showImg.src = result.image.medium)
  //     : (showImg.style.display = 'none');
  //   let summary = document.createElement('div');
  //   summary.innerHTML = result.summary;
  //   epContainer.appendChild(title);
  //   epContainer.appendChild(showImg);
  //   epContainer.appendChild(summary);
  //   resultsSection.appendChild(epContainer);
  // }
}

function displaySchedule(data) {
  console.log(data);
  clearContainer(resultsSection);
  resultsSection.className = 'schedule';
  const scheduleTable = document.createElement('table');

  data.forEach((result) => {
    const tableRow = document.createElement('tr');
    const timeslot = document.createElement('td');
    timeslot.textContent = result.airtime;
    const showTitle = document.createElement('td');
    showTitle.textContent = result.show.name;
    const showDescription = document.createElement('td');
    showDescription.innerHTML = result.summary;
    tableRow.append(timeslot, showTitle, showDescription);
    scheduleTable.appendChild(tableRow);
  });
  resultsSection.appendChild(scheduleTable);
}

//callback function to render show information
// fetch data for specific show using its ID
// also display list of episodes
