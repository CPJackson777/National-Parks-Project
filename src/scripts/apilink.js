// const apiBaseUrl = "http://localhost:8088/parks"


// const parksList = () => fetch(`${apiBaseUrl}`)
// .then(response => response.json())



fetch("http://localhost:8088/parks")
    .then(response => response.json())
    .then(parsedParks => {
        console.log(parsedParks)
    })