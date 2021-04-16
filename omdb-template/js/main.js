/**
 *  OMDb template
 *	Documentation: http://www.omdbapi.com/
 *  Generate an API key here: http://www.omdbapi.com/apikey.aspx
 */


/**
* According to documentation, you need at least 2 parameters when calling the API http://www.omdbapi.com/
* 1 Required parameter: apikey
* 2 Required parameter: One of the following i=, t= or s=
*
* 
* Example with parameter s=star trek
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek
*
* Example with parameter s=star trek AND y=2020
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&y=2020
*
* Example with parameter s=star trek AND type=series
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&type=series
*
*/


// let url = 'http://www.omdbapi.com/?apikey=';
const key = 'de4ce69f';
const par = '&';
const par2 = 's=';
const par3 = '&type=series';
const div = document.getElementById('displayData');



const inputMovie = document.getElementById('input-movie');
const fetchBtn = document.getElementById('fetch-btn');
const movie = document.getElementById("demo");
fetchBtn.addEventListener('click', fetchData);
inputMovie.addEventListener('keyup', fetchData);

function clearcontent(elementID) {
    document.getElementById(elementID).innerHTML = "";
}



function fetchData() {
    const url = 'http://www.omdbapi.com/?apikey=' + key + par + par2 + inputMovie.value;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Server response not OK :(');
            }

            return response.text();
        })
        .then(data => {


            console.log(data);
            let jsontojs = JSON.parse(data);
            console.log(jsontojs);
            let string = ``;

            for (var i = 0; i < jsontojs.Search.length; i++){
                string += `
                <article id="remove" class="grid-item">
                    <h2 id="remove"> Title: ${jsontojs.Search[i].Title}</h2>
                    <h2 id="remove">  Year ${jsontojs.Search[i].Year}</h2>   
                    <img id="remove" src="${jsontojs.Search[i].Poster}" alt="alternatetext">
                </article>
                `;}
                movie.innerHTML += string;


        })
        .catch(error => {

            console.log(error);
        })
}

