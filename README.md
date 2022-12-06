The basic story of your application

    The user should be able to search for a show in search bar and find a list of all shows that match that query. If the particular show they are looking for appears, the user can click on the show, which will rerender the page with the show's details and episodes.

    The user should be able to filter the shows by genre and year.

    also there will be buttons that return all shows that have aired within a particular decade.

    a date picker will allow the user to find shows that aired on a particular date.

The core features of your MVP

    Search bar

    results will be rendered to the page

    Show details

    Show episodes

The API data you'll be using and how you'll use it

    TVMAZE API

    TV Schedules, shows and episodes

Challenges you expect to face

    filtering data, searching for shows from particular year or genre. expecially as shows cover more than one year. The api has limited data on shows especially pre 2000s showing mostly american shows.

How you are meeting the requirements of the project

Project Requirements
Your app must be a HTML/CSS/JS frontend that accesses data from a public API. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format. Try to avoid using an API that requires a key. APIs that are free and require no authorization will be easiest to use. For ideas, see this list of no-auth APIs Links to an external site.. If you would like to use an API that requires a key, please consult with your mentor on how to protect that key. NEVER push your API key to github!

    Your entire app must run on a single page. There should be NO redirects. In other words, your project will contain a single HTML file.

    Use at least 3 unique event-listeners Links to an external site.that enable interactivity. Think search or filter functionality, toggling dark/light mode, upvoting posts, etc. Each of your event listeners should have its own unique callback function.

        toggle seach mode: either for schedule or for shows

        filtering results : either by a checkbox being selected or dropdown menu being changed.

        search bar : when the user types in the search bar, event listener will be triggered and the results will be filtered. when search button clicked

    Your project must implement at least one instance of array iteration using available array methods (map, forEach, filter, etc). Manipulating your API data in some way should present an opportunity to implement your array iteration.

    need to use forEach to iterate through the results and render them to the page.

    will be using filter for the filtering options.

    can also possibly use reduce to split results into decades, or limit results on a page

    Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.
