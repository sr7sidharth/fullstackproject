NOTES:
1. Note the split of header partials - this allows each page to have additional script tags that need not be used on other pages. 

for coronavirus tracker:
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