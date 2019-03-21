# The Giving List


## Description
Charitable giving is an important part of our society, and there are so many organizations in need of donations. This applications makes use of an API I built using data from organizations with an A rating from CharityWatch.org, meaning the bulk of their annual budgets is actually used for their stated missions. Each organization in the API includes data referencing the organizations name, service category (relief aid, environment, etc.), mission statement, and a link to each organizations donation platform.

[Back End Repo](https://github.com/JakeBrackney/giving-list-backend)


## Functionality
Users are able to see the list of charitable organizations. When a user clicks on the name of an organization, they will be shown a card detailing information about that organization including a link to the organizations donation platform. Users may also add organizations to this list.
 

## Technologies Used
The application as a whole is built using a MERN stack. The front end views are rendered using React. We tied the front end and back end using Cors and deployed the front end to Surge.


## Installed dependencies 

  - react
  - axios
  - prop-types
  - react-dom
  - react-router-dom
  - react-scripts

## Instalation

Fork and clone this repo and run the command `npm install` in your CLI. We are not accepting contributions at this time.

## Future App Improvements

- The home page will feature an option to sort organizations by first letter, and an option to sort by category of service (disease research, relief aid, etc.)
- The new organization function will submit the new organization for approval before being added to the list. This may be cumbersome, but will help prevent abuse of the list. 
