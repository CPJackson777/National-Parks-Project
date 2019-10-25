const buildParksHtmlLayout = parks => `
<article>
  <h3>Park Name</h3>
  <p>State the park in located in</p>
</article>
`


const displayParksHtmlLayout = allParks => {
    let parksResultsHtml = ""
    allParks.forEach(parks => {
        let parksHtml = buildParksHtmlLayout(parks)
        parksResultsHtml += parksHtml
    });

    // The argument allParks doesn't need to be passed
    
    const showThisOnTheDom = document.querySelector("#parks-dom-container")
    showThisOnTheDom.innerHTML = parksResultsHtml
}

