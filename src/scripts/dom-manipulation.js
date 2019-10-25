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

    const showThisOnTheDom = document.querySelector("#parks-dom-container")
    showThisOnTheDom.innerHTML = parksResultsHtml
}


// const buildRecipeHtml = recipe => `
// <article>
//   <h4>${recipe.title}</h4>
//   <img src="${recipe.image_url}" alt="Recipe Image">
//   <p>
//       <a href="${recipe.source_url}">Click here to see the full recipe</a>
//   </p>
// </article>
// `


// const displayRecipeHtml = allRecipes => {
//   let recipeResultsHtml = ""
//   allRecipes.forEach(recipe => {
//     let recipeHtml = buildRecipeHtml(recipe)
//     recipeResultsHtml += recipeHtml
//   });

//   const searchResultsSection = document.querySelector(".search-results")
//   searchResultsSection.innerHTML = recipeResultsHtml
// }