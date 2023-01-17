Overview of the project

A single page application that allows the user to search for a show and find a list of all shows that match that query. If the particular show they are looking for appears, the user can click on the show, which will rerender the page with the show's details and episodes.

In addition to searching for shows, the user can search by year. There will also be buttons that return all shows that have aired within a particular decade.

Lastly there is a option to search a tv schedule, which will return a list of shows that aired on a particular day. For this feature, A date picker will be available to allow the user to find shows that aired on that date.

For the JSON stretch deliverable, I included a feature to add a show to a watchlist. The user can add a show to the watchlist by clicking on the 'add to watchlist button', within the shows details. They can also remove a show from the watchlist by clicking on the same button, which will show as 'Remove from watchlist'. The watchlist is saved to a variable so it can be used in that session, as well as to a remote json server so it can be retrieved when the page is loaded back up at some other time. As authentication is not required for this project, I did not include a login feature, therefore the watchlist is not saved to a specific user.

Challenges

Perhaps the biggest challenge was getting all the shows from the API. It was necesary to get every show from the database, as the API does not allow for searching by year or decade. I was able to get all the shows by using a for loop to iterate through the pages of the API, and then using a forEach to iterate through the results of each page. I then pushed each show to an array, which I then used to filter the results in multiple ways. While I have now got this to work, it didnt always work first time and many of the pages of the API failed to load. So fixing this was a challenge. What I ended up doing was creating a function that would try to load an individual page, and if it failed, it would try again. I put this function inside a for loop, which would try to load each page.This worked well, and I was able to get all the shows from the API.
