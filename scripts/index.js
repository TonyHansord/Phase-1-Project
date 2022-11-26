function fetchTVSchedule(country, date) {
  fetch(`${tvMaze}/schedule?${country}&date=${date}`)
    .then((res) => res.json())
    .then((json) => console.log(json));
}

fetchTVSchedule("US", "1989-05-11");
