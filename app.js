// document.getElementById('search-btn').addEventListener('click', async function(){


async function searchCountry(){
    var input = document.getElementById('input').value;

    if(input.length > 0){

    const url = `https://restcountries.com/v3.1/name/${input}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayCountry(data[0]))
    }
    else{
        alert("Type Country Name")
    }

function displayCountry(country){

    const countrySection = document.getElementById('countrySection');
    const container = document.getElementById('container');
    const left = document.getElementById('left');
    const right = document.getElementById('right');

    countrySection.innerHTML = `
    <h1 id="cName">${country.name.common}</h1>
    
    `
    left.innerHTML = `
    <h1>Details</h1>
    <h2><span>Capital:</span> ${country.capital}</h2>
    <h2><span>Population:</span> ${country.population}</h2>
    <h2><span>Area:</span> ${country.area}</h2>
    <h2><span>Region:</span> ${country.region}</h2>
    <button id="btn"> See mor details </button>
    `
    right.innerHTML = `
    <img src=${country.flags.png} />
    `
container.appendChild(right)
container.appendChild(left)
countrySection.appendChild(container)
    
// console.log(country);


}
}
// })

//details page
// document.querySelector('button').addEventListener('click', function(){
//     document.getElementById('front').style.display = "none"
//     document.getElementById('details').style.display = "block"

//     const url2 = `https://restcountries.com/v3.1/name/${input}`;
//     fetch(url2)
//     .then(res => res.json())
//     .then(data => detailsDisplay(data))

// function detailsDisplay(countryDetails){
//     const details = document.getElementById('details');
//     const main = document.getElementById('main');

// details.innerHTML = `
// <h1 id="cName">${countryDetails.name.common}</h1>
// `

// main.appendChild(details)
// }



// })