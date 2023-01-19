# Overview of the project

A single page application that allows the user to search for a show and find a list of all shows that match that query. If the particular show they are looking for appears, the user can click on the show, which will rerender the page with the show's details and episodes.
In addition to searching for shows, the user can search by year. There will also be buttons that return all shows that have aired within a particular decade.
Lastly there is a option to search a tv schedule, which will return a list of shows that aired on a particular day. For this feature, A date picker will be available to allow the user to find shows that aired on that date.

### Process used

The way I went about this project was working on individual features, mostly focusing on getting the functionality working, before doing a bit of styling. Once I got of the main features working, I refactored and refined some of the elements, and adding minor features to existing elements.

## Project Deliverables

### ✅ Your app must be a HTML/CSS/JS frontend that accesses data from a public API

The project consists of a single HTML file, a SCSS file which renders a CSS file and two JS files, one for the main logic and one to store constants. The data is accessed from the TVMAZE API.
API Data
The TVMAZE API was used for this project. The API has data on TV schedules, shows and episodes. The API has limited data in terms of schedules, but has a pretty big range of shows. The API does not allow for searching by year or decade, so I had to get all the shows from the API and then filter them by year or decade.
✅ The website should run on a single page.
To achieve this Javascript DOM manipulation is required to change what is displayed on the screen. I created a function called renderResults to render data from the api in to a container on page by creating cards for each show.
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
      fetchEpisodes(showInfo);
      clearContainer(resultsSection);
      clearContainer(menuContainer);
      resultsContainer.className = 'episodes';
    });

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
I also created a function called clearContainer that would clear everything within the results container so new data can be displayed. It works by iterating through each of the containers children and removing them.
function clearContainer(element) {
let child = element.lastElementChild;
while (child) {
element.removeChild(child);
child = element.lastElementChild;
}
}
✅ Use at least 3 unique event-listeners that enable interactivity.
I used the following event listeners:
Click
Used to when clicking on a show to reveal information about it
When the decade buttons are pressed

Changed
When selecting and option from drop-down menus such as the search selection or filtering by genre and sorting etc

Submit
To submit the search query

✅ Your project must implement at least one instance of array iteration using available array methods
Your project must implement at least one instance of array iteration using available array methods.
forEach
I used forEach to iterate through the seasons and episodes of a show, and render them to the page. Other times I used a for in loop to iterate through the results of the API.
filter
I used filter to filter the results of the API by year, decade and genre.
some
I used some to check if the year that the user selected was in the array of years that the show was on air. If it was, the show would be returned in the results.
✅ Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilising functions to abstract repetitive code.
The whole project consists of functions that I can reuse. The most important function that is reused is the renderResults function, which is used everytime a list of shows need to be rendered to the screen.
✅ JSON Stretch Deliverable
For the JSON stretch deliverable, I included a feature to add a show to a watch list. The user can add a show to the watch list by clicking on the 'add to watch list button', within the shows details. They can also remove a show from the watch list by clicking on the same button, which will show as 'Remove from watch list'. The watch list is saved to a variable so it can be used in that session, as well as to a remote json server so it can be retrieved when the page is loaded back up at some other time. As authentication is not required for this project, I did not include a login feature, therefore the watch list is not saved to a specific user.
Challenges
Retrieving all shows from API
Perhaps the biggest challenge was getting all the shows from the API. It was necessary to get every show from the database, as the API does not allow for searching by year or decade. I was able to get all the shows by using a for loop to iterate through the pages of the API, and then using a forEach to iterate through the results of each page. I then pushed each show to an array, which I then used to filter the results in multiple ways. While I have now got this to work, it didn't always work first time and many of the pages of the API failed to load.
So fixing this was a challenge. What I ended up doing was creating a function that would try to load an individual page, and if it failed, it would try again. I put this function inside a for loop, which would try to load each page.This worked well, and I was able to get all the shows from the API.
Another challenge was filtering by year, in a way that it would return a result that was on air in that year, not just premiered or ended in that year.
I was able to do this by firstly creating a function called showYears that would return an array of years between the start and end year of the show.
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
To filter by year, within the filterShowsByTimeframe function I used the filter method to iterate through the array of shows, and then used the showYears function to get an array of years that the show was on air. I then used the some method to check if the year that the user selected was in the array of years that the show was on air. If it was, the show would be returned in the results. This also was necessary to get the results filtering by decade.
Date formats
A minor challenge was working with date formats. The API works with dates in the format of 'YYYY-MM-DD'. I had to convert the date that the user selected to this format, so that I could compare it to the dates in the API. I then had to convert the date back to a more readable format, so that I could display it to the user. I was able to do this by using the toLocaleDateString method.
Key takeaways
I think the most important lessons learnt while building this website, were:
Fetching data from the API,
Using that data by way of accessing it's properties
Using array methods to generate filtered results.
Rendering the filtered data to the screen with DOM manipulation.
