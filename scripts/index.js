const allShows = [];

document.addEventListener('DOMContentLoaded', () => {
  fetchAllShows();

  const decadeBtns = document.querySelectorAll('.decade-btn');

  decadeBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const decade = event.target.id;
      const filteredData = filterShowsByTimeframe(decade.slice(0, 3));
      console.log(filteredData);

      let resultsHeading = `Shows from the ${decade}`;

      showFilterSortMenu(filteredData, resultsHeading);
      renderResults(filteredData, resultsHeading);
    });
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
        if (i === 264) {
          const sortedData = sortShowsByRating(allShows);

          const topFifty = sortedData.slice(0, 50);

          showFilterSortMenu(allShows);
          renderResults(topFifty, 'Top 50 Shows');
        }
      });
  }
}

//Get value of searchbox when submit button pressed

//GET data from API based on what is entered in search box
// eg:`https://api.tvmaze.com/search/shows?%q=${value of search box}'`;

function fetchQuery(query) {
  console.log(`in fetchQuery`);

  const searchResults = allShows.filter((show) => {
    if (show['name'] !== null) {
      return show['name'].startsWith(query);
    }
  });

  const numResults = searchResults.length;

  const sortedData = sortShowsByRating(searchResults);

  showFilterSortMenu(sortedData);
  renderResults(sortedData, `${numResults} results for ${query}`);
}

function fetchEpisodes(showID, showName) {
  fetch(`https://api.tvmaze.com/shows/${showID}/episodes`)
    .then((res) => res.json())
    .then((results) => displayEpisodes(results, showName));
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
    default:
      input.type = 'text';
      input.placeholder = `Enter ${searchType === 'year' ? 'year' : 'show'}`;
      inputLabel.textContent = 'Search';
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

    switch (searchType) {
      case 'schedule':
        fetchSchedule(countrySel.value, searchBox.value);
        break;
      case 'year':
        renderResults(
          filterShowsByTimeframe(searchBox.value),
          `Shows from ${searchBox.value}`
        );
        break;
      default:
        fetchQuery(searchBox.value);
        break;
    }
  });

  form.append(inputLabel, input, dropDown, submitBtn);
  formContainer.append(form);
}

function renderResults(data, heading = 'Results') {
  clearContainer(resultsSection);

  const resultsContainer = document.createElement('div');
  resultsContainer.id = 'results-container';
  resultsContainer.className = 'search-results';

  const resultsHeading = document.createElement('h2');
  resultsHeading.className = 'results-heading';
  resultsHeading.textContent = heading;
  resultsSection.appendChild(resultsHeading);

  resultsSection.appendChild(menuContainer);

  for (let result of data) {
    //create an element for each result

    const showInfo = 'show' in result ? result.show : result;

    let showContainer = document.createElement('div');
    showContainer.className = 'result-container';
    // add a click event listener to clear results and display show information instead
    showContainer.addEventListener('click', () => {
      // console.log(showInfo);
      fetchEpisodes(showInfo.id, showInfo.name);
      clearContainer(resultsSection);
      clearContainer(menuContainer);
      resultsContainer.className = 'episodes';
    });

    // console.log(showInfo);
    let title = document.createElement('h3');
    title.className = 'show-title';
    title.textContent = showInfo.name;
    let showImg = document.createElement('img');
    showImg.className = 'show-img';

    if (showInfo.image !== null) {
      showImg.src = showInfo.image.medium;
      showContainer.appendChild(title);
      showContainer.appendChild(showImg);
      resultsContainer.appendChild(showContainer);
    }
  }

  resultsSection.appendChild(resultsContainer);
}

function displayEpisodes(data, heading) {
  console.log(data);
  const numSeasons = data[data.length - 1].season;
  console.log(numSeasons);

  const resultsHeading = document.createElement('h2');
  resultsHeading.textContent = heading;
  resultsHeading.className = 'results-heading';
  resultsSection.appendChild(resultsHeading);

  for (let i = 1; i <= numSeasons; i++) {
    //create a container for each season
    let seasonContainer = document.createElement('details');
    seasonContainer.className = `season-container`;
    seasonContainer.id = `season-${i}`;
    let seasonTitle = document.createElement('summary');
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

// Filter functions

function showYears(min, max) {
  let years = [];
  for (let i = min; i <= max; i++) {
    years.push(i.toString());
  }
  console.log(years);
  return years;
}

function filterShowsByTimeframe(timeFrame) {
  return allShows.filter((show) => {
    if (show['premiered'] !== null) {
      const premieredYear = show['premiered'].slice(0, 4);
      const endedYear =
        show['ended'] !== null
          ? show['ended'].slice(0, 4)
          : new Date().getFullYear();

      const airedYears = showYears(premieredYear, endedYear);

      return airedYears.some((year) => year.startsWith(timeFrame));
    }
  });
}

function filterResultsByGenre(data, genre) {
  return data.filter((show) => {
    return show.genres.includes(genre);
  });
}

// Sort functions

function sortByNameOrYear(data, sortType) {
  let key = sortType === 'Name' ? 'name' : 'premiered';

  return data.sort((a, b) => {
    if (a[key] < b[key]) {
      return -1;
    } else if (a[key] > b[key]) {
      return 1;
    } else {
      return 0;
    }
  });
}

function sortShowsByRating(data) {
  return data.sort((a, b) => {
    return b.rating.average - a.rating.average;
  });
}

function showFilterSortMenu(data, heading = 'Results') {
  let results = data;
  clearContainer(menuContainer);

  const filterHeadingContainer = document.createElement('div');

  const filterHeading = document.createElement('h2');
  filterHeading.textContent = 'Filter';
  filterHeadingContainer.append(filterHeading);

  const genreFilter = document.createElement('select');
  genreFilter.id = 'genre-filter';
  const genreFilterLabel = document.createElement('label');

  showGenres.forEach((genre) => {
    const genreMenuOption = document.createElement('option');
    genreMenuOption.id = genre.toLowerCase();
    genreMenuOption.value = genre;
    genreMenuOption.textContent = genre;
    genreFilter.addEventListener('change', (e) => {
      const filteredData =
        e.target.value !== ''
          ? filterResultsByGenre(data, e.target.value)
          : data;
      results = filteredData;
      renderResults(results, heading);
    });
    genreFilter.appendChild(genreMenuOption);
  });
  genreFilterLabel.htmlFor = 'genre-filter';
  genreFilterLabel.textContent = 'Genre';

  const sortMenu = document.createElement('select');
  sortMenu.id = 'sort-menu';
  const sortMenuLabel = document.createElement('label');
  sortMenuLabel.htmlFor = 'sort-menu';
  sortMenuLabel.textContent = 'Sort By';

  const sortMenuOptions = ['', 'Name', 'Rating', 'Year'];
  sortMenuOptions.forEach((option) => {
    const sortMenuOption = document.createElement('option');
    sortMenuOption.id = option.toLowerCase();
    sortMenuOption.value = option;
    sortMenuOption.textContent = option;
    sortMenu.addEventListener('change', (e) => {
      const dataCopy = [...results];
      const sortedData =
        e.target.value === 'Rating'
          ? sortShowsByRating(dataCopy)
          : sortByNameOrYear(dataCopy, e.target.value);
      renderResults(sortedData, heading);
    });
    sortMenu.appendChild(sortMenuOption);
  });

  menuContainer.append(genreFilterLabel, genreFilter, sortMenuLabel, sortMenu);
}
//callback function to render show information
// fetch data for specific show using its ID
// also display list of episodes
