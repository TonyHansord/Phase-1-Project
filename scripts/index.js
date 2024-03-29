showTopFifty();
fetchAllShows();

//#region FETCH FUNCTIONS

function showTopFifty() {
  renderResults(topFiftyShows, 'Top 50 Shows');

  fetch(`${db}/topfifty`)
    .then((res) => res.json())
    .then((topFifty) => {
      console.log(topFifty);
      fetchWatchList();
      showFilterSortMenu(allShows);
      topFiftyShows = topFifty;
      renderResults(topFiftyShows, 'Top 50 Shows');
    });
}

function addToWatchList(show) {
  fetch(`${db}/watchlist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(show),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

function removeFromWatchList(show) {
  fetch(`${db}/watchlist/${show.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(show),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      fetchWatchList();
    });
}

function fetchWatchList() {
  console.log('in fetchWatchList');
  fetch(`${db}/watchlist`)
    .then((res) => res.json())
    .then((list) => {
      console.log(list);
      watchList = list;
    });
}

let done = 0;
function fetchPage(page) {
  fetch(`${showIndex}${page}`)
    .then((res) => {
      return res.json();
    })
    .then((shows) => {
      shows.forEach((show) => {
        allShows.push(show);
      });
      done++;
      console.log(done);
      if (done === 265) {
        console.log(`all done`);
        // console.log(allShows.length);
        showFilterSortMenu(allShows);
        populateDecadeArrays();
      }
      console.log(`page ${page} done`);
    })
    .catch((err) => {
      console.log(err);
      fetchPage(page);
    });
}

function fetchAllShows() {
  for (let i = 0; i < 265; i++) {
    fetchPage(i);
  }
}

// fetch data for specific show using its ID
function fetchEpisodes(showInfo) {
  fetch(`https://api.tvmaze.com/shows/${showInfo.id}/episodes`)
    .then((res) => res.json())
    .then((results) => displayShowInfo(showInfo, results));
}

function fetchSchedule(country, date, dateFormatted) {
  fetch(`${scheduleSearch}country=${country}&date=${date}`)
    .then((res) => res.json())
    .then((schedule) => displaySchedule(schedule, dateFormatted));
}

//#endregion
//#region Data Manipulation Functions
function populateDecadeArrays() {
  // fiftiesShows = filterShowsByTimeframe('195');
  sixtiesShows = filterShowsByTimeframe('196');
  seventiesShows = filterShowsByTimeframe('197');
  eightiesShows = filterShowsByTimeframe('198');
  ninetiesShows = filterShowsByTimeframe('199');
  twoThousandsShows = filterShowsByTimeframe('200');
  twoThousandTensShows = filterShowsByTimeframe('201');
}
//#endregion
//#region RENDER FUNCTIONS

//clear any results currently on the page
function clearContainer(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}

//render the selected search form
function renderSearchForm(searchType) {
  const formContainer = document.getElementById('form-div');
  formContainer.innerHTML = '';
  const form = document.createElement('form');
  const input = document.createElement('input');
  const dropDown = document.createElement('select');
  dropDown.id = 'country-select';
  showCountry.forEach((country) => {
    const option = document.createElement('option');
    option.id = country.countryCode;
    option.value = country.countryCode;
    option.textContent = country.countryName;
    dropDown.appendChild(option);
  });
  const submitBtn = document.createElement('button');
  input.className = 'search-input';
  const inputString = `${searchType}-input`;
  input.id = inputString;
  input.name = inputString;

  switch (searchType) {
    case 'schedule':
      input.type = 'date';
      input.value = new Date().toISOString().slice(0, 10);
      console.log(input.value);
      input.min = '1950-01-01';
      input.max = '2050-12-31';
      dropDown.style.display = 'flex';

      let date = new Date(input.value).toLocaleDateString();
      fetchSchedule(dropDown.value, input.value, date);
      break;
    case 'year':
      input.type = 'number';
      input.min = '1910';
      input.max = '2050';
      input.placeholder = 'Enter year';
      dropDown.style.display = 'none';
      break;
    default:
      input.type = 'text';
      input.placeholder = `Enter show`;
      dropDown.style.display = 'none';
      break;
  }

  submitBtn.type = 'submit';
  submitBtn.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`;
  submitBtn.className = 'search-btn';
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
    const searchBox = document.getElementById(e.target[0].id);
    const countrySel = document.getElementById('country-select');
    console.log(searchBox.value);

    switch (searchType) {
      case 'schedule':
        const date = new Date(searchBox.value).toLocaleDateString();
        fetchSchedule(countrySel.value, searchBox.value, date);
        break;
      case 'year':
        renderResults(
          filterShowsByTimeframe(searchBox.value),
          `Shows from ${searchBox.value}`
        );
        form.reset();
        break;
      default:
        filterSearchResults(searchBox.value);
        form.reset();
        break;
    }
  });

  form.append(input, dropDown, submitBtn);
  formContainer.append(form);
}

//render the selected data
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
      fetchEpisodes(showInfo);
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

//render the selected show information and episodes
function displayShowInfo(showInfo, epData) {
  console.log(showInfo);

  const showInfoContainer = document.createElement('div');
  showInfoContainer.className = 'show-info-container';

  const showImg = document.createElement('img');
  showImg.className = 'show-img';
  showImg.src = showInfo.image.medium;

  const showTextContainer = document.createElement('div');
  showTextContainer.className = 'show-text-container';

  const showTitle = document.createElement('h2');
  showTitle.className = 'show-title';
  showTitle.textContent = showInfo.name;

  const showSummary = document.createElement('div');
  showSummary.className = 'show-summary';
  showSummary.innerHTML = showInfo.summary;

  const showRating = document.createElement('p');
  showRating.className = 'show-rating';
  showRating.textContent = `Rating: ${
    showInfo.rating.average !== null ? showInfo.rating.average : '-'
  }`;

  const addToWatchListBtn = document.createElement('button');

  console.log(watchList);
  console.log(watchList.some((show) => show['id'] === showInfo['id']));

  if (watchList.some((show) => show['id'] === showInfo['id'])) {
    addToWatchListBtn.className = 'remove-watchlist-btn';
    addToWatchListBtn.textContent = 'Remove from watchlist';
  } else {
    addToWatchListBtn.className = 'add-watchlist-btn';
    addToWatchListBtn.textContent = 'Add to watchlist';
  }
  addToWatchListBtn.addEventListener('click', () => {
    if (addToWatchListBtn.textContent === 'Add to watchlist') {
      watchList.push(showInfo);
      addToWatchList(showInfo);
      addToWatchListBtn.className = 'remove-watchlist-btn';
      addToWatchListBtn.textContent = 'Remove from watchlist';
    } else {
      removeFromWatchList(showInfo);
      addToWatchListBtn.className = 'add-watchlist-btn';
      addToWatchListBtn.textContent = 'Add to watchlist';
    }
  });

  showTextContainer.append(
    showTitle,
    showSummary,
    showRating,
    addToWatchListBtn
  );

  showInfoContainer.append(showImg, showTextContainer);
  resultsSection.appendChild(showInfoContainer);

  //Render the episodes
  let showSeasons = [];

  epData.forEach((ep) => {
    if (!showSeasons.includes(ep.season)) {
      showSeasons.push(ep.season);
    }
  });

  console.log(showSeasons);

  const episodesContainer = document.createElement('div');
  episodesContainer.id = 'episodes-container';
  episodesContainer.className = 'episodes';

  const episodesHeading = document.createElement('h3');
  episodesHeading.textContent = 'Episodes';
  episodesHeading.className = 'episodes-heading';
  episodesContainer.appendChild(episodesHeading);

  showSeasons.forEach((season) => {
    //create a container for each season
    console.log(season);
    let seasonContainer = document.createElement('details');
    seasonContainer.className = `season-container`;
    seasonContainer.id = `season-${season}`;
    let seasonTitle = document.createElement('summary');
    seasonTitle.textContent = `Season ${season}`;
    seasonContainer.appendChild(seasonTitle);

    //create an element for each episode
    let seasonEpisodes = epData.filter((episode) => {
      // console.log(episode);
      return episode.season === season;
    });

    for (let episode of seasonEpisodes) {
      let epContainer = document.createElement('div');
      epContainer.className = 'episode-container';
      // add a click event listener to clear results and display show information instead
      let title = document.createElement('h3');
      title.className = 'episode-title';
      title.textContent = episode.name;
      let showImg = document.createElement('img');
      showImg.className = 'episode-image';
      episode.image !== null
        ? (showImg.src = episode.image.medium)
        : (showImg.style.display = 'none');
      let summary = document.createElement('div');
      summary.className = 'episode-summary';
      summary.innerHTML = episode.summary;

      const episodeTextContainer = document.createElement('div');
      episodeTextContainer.className = 'episode-text-container';
      episodeTextContainer.append(title, summary);

      epContainer.append(showImg, episodeTextContainer);
      seasonContainer.appendChild(epContainer);
    }

    episodesContainer.appendChild(seasonContainer);
  });

  resultsSection.appendChild(episodesContainer);
}

//render the filter and sort menu
function showFilterSortMenu(data, heading = 'Results') {
  let results = data;
  clearContainer(menuContainer);

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

function displaySchedule(data, dateFormatted) {
  console.log(data);
  clearContainer(resultsSection);
  resultsSection.className = 'schedule';

  const scheduleHeading = document.createElement('h2');
  scheduleHeading.className = 'results-heading';
  scheduleHeading.textContent = `Schedule for  ${dateFormatted}`;

  resultsSection.appendChild(scheduleHeading);

  const scheduleTable = document.createElement('table');

  data.forEach((result) => {
    const tableRow = document.createElement('tr');
    const timeslot = document.createElement('td');
    timeslot.textContent = result.airtime;
    const network = document.createElement('td');

    network.textContent =
      result.show.network !== null ? result.show.network.name : 'N/A';
    const showTitleCell = document.createElement('td');
    showTitleCell.className = 'show-title-cell';
    const titleCellContainer = document.createElement('div');
    titleCellContainer.className = 'title-cell-container';
    const showTitle = document.createElement('p');
    const showImg = document.createElement('img');
    showImg.className = 'schedule-show-img';
    showImg.src =
      result.show.image !== null
        ? result.show.image.medium
        : (showImg.style.display = 'none');
    showTitle.textContent = result.show.name;
    showTitle.className = 'schedule-show-title';
    showTitle.addEventListener('click', () => {
      fetchEpisodes(result.show);
      clearContainer(resultsSection);
      clearContainer(menuContainer);
    });
    titleCellContainer.append(showTitle, showImg);
    showTitleCell.append(titleCellContainer);
    const showDescription = document.createElement('td');
    showDescription.innerHTML = result.summary;
    tableRow.append(timeslot, network, showTitleCell, showDescription);
    scheduleTable.appendChild(tableRow);
  });
  resultsSection.appendChild(scheduleTable);
}
//#endregion
//#region Filter functions

function showYears(min, max) {
  let years = [];
  for (let i = min; i <= max; i++) {
    years.push(i.toString());
  }
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

function filterSearchResults(query) {
  const searchResults = allShows.filter((show) => {
    if (show['name'] !== null) {
      return show['name']
        .toLowerCase()
        .replace('.', '')
        .includes(query.toLowerCase());
    }
  });

  const numResults = searchResults.length;

  const sortedData = sortShowsByRating(searchResults);

  showFilterSortMenu(sortedData);
  renderResults(sortedData, `${numResults} results for ${query}`);
}

function filterResultsByGenre(data, genre) {
  return data.filter((show) => {
    return show.genres.includes(genre);
  });
}
//#endregion
//#region Sort functions

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

//#endregion

document.addEventListener('DOMContentLoaded', () => {
  const mainheading = document.getElementById('main-heading');
  mainheading.addEventListener('click', () => {
    showTopFifty();
    showFilterSortMenu(allShows);
  });

  const watchListBtn = document.getElementById('watchlist-btn');
  watchListBtn.addEventListener('click', () => {
    fetchWatchList();
    renderResults(watchList, 'Watch List');
  });

  const decadeBtns = document.querySelectorAll('.decade-btn');

  decadeBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      let decadeData;

      switch (event.target.id) {
        case '1950s':
          decadeData = fiftiesShows;
          break;
        case '1960s':
          decadeData = sixtiesShows;
          break;
        case '1970s':
          decadeData = seventiesShows;
          break;
        case '1980s':
          decadeData = eightiesShows;
          break;
        case '1990s':
          decadeData = ninetiesShows;
          break;
        case '2000s':
          decadeData = twoThousandsShows;
          break;
        case '2010s':
          decadeData = twoThousandTensShows;
          break;
      }

      let resultsHeading = `Shows from the ${event.target.id}`;

      showFilterSortMenu(decadeData, resultsHeading);
      renderResults(decadeData, resultsHeading);
    });
  });
  renderSearchForm(searchOptions[0].id);

  searchOptions.forEach(() => {
    searchTypes.addEventListener('change', (event) => {
      console.log(event.target);
      renderSearchForm(event.target.value);
    });

    // searchTypes.addEventListener('change', (event) => {
    //   console.log(event.target);

    //   renderSearchForm(event.target.id);
  });
});

// also display list of episodes
