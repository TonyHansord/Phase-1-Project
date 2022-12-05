function fetchQuery(query, page) {
  const searchQuery = `${tvSearch}${key}&query=${query}&page=${page}`;
  fetch(searchQuery)
    .then((res) => res.json())
    .then((json) => renderResults(json));
}

const fetchEpisode = () => {
  fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${key}&sort_by=first_air_date.desc&air_date.gte=1980-01-01&air_date.lte=1980-01-01&page=1&include_null_first_air_dates=false&with_original_language=en`
  )
    .then((res) => res.json())
    .then((json) => console.log(json));
};

function renderResults(data) {
  console.log(data);
  let filteredData = filterResults(data.results, 'AU');
  console.log(filteredData);
  for (let result of filteredData) {
    let title = document.createElement('h1');
    title.textContent = result.name;
    let showImg = document.createElement('img');
    result.poster_path !== null
      ? (showImg.src = `${imgPath}${result['poster_path']}`)
      : (showImg.src = '#');
    document.body.appendChild(title);
    document.body.appendChild(showImg);
  }
}

function filterResults(results, country) {
  return results.filter(function (result) {
    if (result.hasOwnProperty('origin_country')) {
      let countryResult = result.origin_country[0];
      console.log(countryResult);
      console.log(country);
      return countryResult === country;
    }
  });
}

// fetchQuery('all together', 1);
fetchEpisode();
