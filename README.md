

#React Nanodegree Program @ Udacity.com

##React Fundamentals Final Project: "MyReads: A Book Tracking App"
Submitted by Guy Sagy (guysagy@hotamil.com), August 2017
This README includes instructions for installing, launching and using the application.

###Project Specifications:
The application was created with the starter template supplied by course instructors (here: https://github.com/udacity/reactnd-project-myreads-starter).
To run this application, Node.js must be installaed on the machine.
After installing Node.js, check out the code, and run the following CLI commands from within the check out directory:
#####(i) "npm install", and then
#####(ii) "npm start".
This is sufficient to get it installed and launched.

####Main Page
The main page shows 3 shelves for books - “currently reading”, “want to read”, and “read”.
A select control on each book allows users to move books between shelves. The control is next to each book displayed.
When the browser is refreshed, the book(s) same information is displayed on the page.

####Search Page
The search page has a search input field. As the user types into the search field, books that match the query are displayed on the page.
Search results on the search page allow the user to re-categorize a book's shelf by selecting “currently reading”, “want to read”, or “read” to place the book in a certain shelf.
When an item is categorized on the search page, and the user navigates to the main page, books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both pages.

####Page Routing
The main page contains a link (a green '+' image) to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.
The search page contains a link to the main page (a left/back pointing arrow). When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.




