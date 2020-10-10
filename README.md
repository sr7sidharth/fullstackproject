Portfolio website built with MongoDB, Node.js and Express.js
- Basic UI using Bootstrap
- Usage of databases for data persistence and ease of updating
- Simple JavaScript application 




NOTES:
for coronavirus tracker, these are the API I have shortlisted: (additional feature to be implemented shortly)
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
