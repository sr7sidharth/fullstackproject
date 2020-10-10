Portfolio website built with MongoDB, Node.js and Express.js
- Basic UI using Bootstrap
- Usage of databases for data persistence and ease of updating
- Simple JavaScript application 




NOTES:
1. Note the split of header partials - this allows each page to have additional script tags that need not be used on other pages. 

for coronavirus tracker: (additional feature to be implemented shortly)
https://www.npmjs.com/package/axios
https://documenter.getpostman.com/view/8854915/SzS8rjHv?version=latest#7618a0d5-d412-4360-9548-569645770969
https://covidtracking.com/

/coronavirusTracker
search bar: search

/coronavirusTracker/state
state: str
graph: 
    tests: [int] 
    cases/tested positive: [int]
    deaths: [int]
    date:[int] //likely needs to be string
tracking from: int //likely needs to be string
updated on: int (date, time) //likely needs to be string
source: str 
