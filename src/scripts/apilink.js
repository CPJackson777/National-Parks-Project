// const apiBaseUrl = "http://localhost:8088/parks"


// const parksList = () => fetch(`${apiBaseUrl}`)
// .then(response => response.json())



fetch("http://localhost:8088/parks")
    .then(parks => parks.json())
    .then(parsedParks => {
        console.log(parsedParks)
    })