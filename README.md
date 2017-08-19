# React Fundamentals Final Project: "MyReads: A Book Tracking App"
1st Project for React Nanodegree Program @ Udacity.com <br/>
Submitted by Guy Sagy (guysagy@hotamil.com), August 2017. <br/>
This README includes instructions for installing, launching and using the application. <br/>

## Project Specifications
The application was created with the [starter template](https://github.com/udacity/reactnd-project-myreads-starter) supplied by course instructors. <br/>
To run this application, Node.js must be installaed on the machine. <br/>
After installing Node.js, check out the [project code](https://github.com/guysagy/reactnd-project-myreads-starter), and run the following CLI commands from within the check out directory: <br/>
(i) "npm install", and then <br/>
(ii) "npm start". <br/>
This is sufficient to get it installed, running and launched on hosting machine's default browser. <br/>

## Application Usage Guide
### Main Page
The main page shows 3 shelves for books - “Currently Reading”, “Want To Read”, and “Read”. <br/>
A select control on each book allows users to move books between shelves. The control is next to each book displayed. <br/>
When the browser is refreshed, the book(s) same information is displayed on the page. <br/>

### Search Page
The search page has a search input field. As the user types into the search field, books that match the query are displayed on the page. <br/>
Search results on the search page allow the user to re-categorize a book's shelf by selecting “currently reading”, “want to read”, or “read” to place the book in a certain shelf. <br/>
When an item is categorized on the search page, and the user navigates to the main page, books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both pages. <br/>

#### Page Routing
The main page contains a link (a green '+' image) to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search. <br/>
The search page contains a link to the main page (a left/back pointing arrow). When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /. <br/>