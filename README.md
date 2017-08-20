# MyReads: A Book Tracking WebApp
1st Project for React Nanodegree Program @ Udacity. <br/>
This application is based on the [starter template](https://github.com/udacity/reactnd-project-myreads-starter) supplied by course instructors. <br/>
Submitted by Guy Sagy (guysagy@hotamil.com), August 2017. <br/>
This README includes instructions for installing, launching and using the application. <br/>

## WebApp Installation & Launch Guide
As a pre-condition to run this application on a server machine, [Node.js](https://nodejs.org/) must be installed. Please install as needed.<br/>
After having Node.js installed, check out the [project code](https://github.com/guysagy/reactnd-project-myreads-starter), and run the following commands from within the check out directory: <br/>
(i) "npm install", and then <br/>
(ii) "npm start". <br/>
This is sufficient to get it installed, running and launched on hosting machine's default browser. <br/>

## WebApp Usage Guide
### Main Page
The main page shows 3 shelves for books - “Currently Reading”, “Want To Read”, and “Read”. <br/>
A select control next to each book displayed allows users to move books between shelfs. <br/>
If the Main Page is refreshed, the book(s) same information is re-displayed on this page. <br/>

### Search Page
The search page has a search input field. As the user types into the search field, books that match the query are displayed on the page. <br/>
Search results on the search page allow the user to re-categorize a book's shelf by selecting “Currently Reading”, “Want To Read”, or “Read”, reading states. <br/>
If an item is categorized on the search page, and the user navigates to the main page, books have the same state on both the search page and the main application page: books categorized on the Search Page are placed on the appropriate shelf on the Main Page. <br/>

### Page Routing
The main page contains a link (a green '+' image) to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is "/search". <br/>
The search page contains a link to the main page (a left/back pointing arrow). When the link is clicked, the main page is displayed and the URL in the browser’s address bar is "/". <br/>