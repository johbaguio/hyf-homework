
const url = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';
let resultContainer = document.getElementById('output');
let movies = [];

fetch(url)
    .then((res) => res.json())
    .then((jsonMovies) => {
        movies = jsonMovies;
        getTitles();

        document.getElementById('good').addEventListener('click', getGoodMovies);
        document.getElementById('average').addEventListener('click', getAverageMovies);
        document.getElementById('bad').addEventListener('click', getBadMovies);
        // document.getElementById('ave-rating').addEventListener('click', getAveRating);
        // document.getElementById('old-movies').addEventListener('click', getOldMovies);
        // document.getElementById('goButton').addEventListener('click', searchMovie)
        // document.getElementById('the').addEventListener('click', searchWord('the'));
    })


function getTitles() {
    let output = '';
    movies.map(movie => output += `<ul><li><b>${movie.title}</b></li><br></ul>`);
    resultContainer.innerHTML = output;

}

// function sortMovies() {
//     let selectValue = document.getElementById("sort-movies").value;
//     if (selectValue === "Titles") {
//         console.log("Titles!");
//     } else if (selectValue === "Rating"){
//         console.log("Ratings!");
//     } else if(selectValue === "Year"){
//         console.log("YEar!");
//     }
// }



function getGoodMovies() {
    let goodMovies = '';
    let good = movies.filter(movie => movie.rating >= 7)
    good.map(movie => goodMovies += `<ul id="movie-${movie.title}"><li><b><b>${movie.title}</b> <br> Rating: ${movie.rating} <br> Year: ${movie.year}<br>
        <button class ="btn btn-poster" onclick="getPosterPic('${movie.title}')">See Poster</button><br></li><br></ul>`)
    resultContainer.innerHTML = `<h3 class="total">Total number of movies: <br>${good.length}</h3><br>` + goodMovies;
}

function getAverageMovies() {
    let aveMovies = '';
    let average = movies.filter(movie => movie.rating >= 4 && movie.rating < 7)
    average.map(movie => aveMovies += `<ul id="movie-${movie.title}"><li><b>${movie.title}</b> <br> Rating: ${movie.rating} <br> Year: ${movie.year}<br>
        <button class ="btn btn-poster" onclick="getPosterPic('${movie.title}')">See Poster</button><br></li><br></ul>`)
    resultContainer.innerHTML = `<h3 class="total">Total number of movies: <br>${average.length}</h3>` + aveMovies;
}


function getBadMovies() {
    let badMovies = '';
    let bad = movies.filter(movie => movie.rating < 4)
    bad.map(movie => badMovies += `<ul id="movie-${movie.title}"><li><b>${movie.title}</b> <br> Rating: ${movie.rating} <br>  Year: ${movie.year}<br>
        <button class ="btn btn-poster" onclick="getPosterPic('${movie.title}')">See Poster</button><br></li><br></ul>`)
    resultContainer.innerHTML = `<h3 class="total">Total number of movies: <br>${bad.length}</h3>` + badMovies;
}

// function getAveRating() {
//     let aveRating = '';
//     const totalRating = (rate, movie) => rate + movie.rating;
//     let rating = movies.reduce(totalRating, 0);
//     rating = (rating / movies.length).toFixed(2);
//     aveRating += `<h2 class="ave-rate">Average rating of all movies:    <b class="rate">${rating}</b> </h2><br>`;
//     resultContainer.innerHTML = aveRating;
// }

// function getOldMovies() {
//    let oldMovies = '';
//     let oldies = movies.filter(movie => movie.year >= 1980 && movie.year <= 1989)
//     oldies.map(movie => oldMovies += `<ul id="movie-${movie.title}"><li><b>${movie.title}</b> <br> ${movie.year} <br>
//         <button class ="btn btn-poster" onclick="getPosterPic('${movie.title}')">See Poster</button><br></li>
//         </ul>`)
//     resultContainer.innerHTML = `<h3 class="total">Total number of movies: <br>${oldies.length}</h3>` + oldMovies;
// }

// function searchWord(word) {
//     let output = '';
//     movies.map(movie => {
//     let words = movie.title.split(' ');
//     words.filter(x => {
//         if (x.toLowerCase() === word.toLowerCase()) {
//             output += `<ul><li><b>${movie.title}</b><br> Rating: ${movie.rating} <br>  Year: ${movie.year}<br></li></ul>`;
//             resultContainer.innerHTML = output;
//         }
//     })
//     })
// }

// function searchMovie() {
//     let goValue = document.getElementById("search1").value;
//     let movieInfo = '';
//     movies.filter(movie => {
//         if (goValue.toLowerCase() === movie.title.toLowerCase()) {
//             movieInfo += ` <ul>
//                 <li>
//                 Title:<b> ${movie.title}</b> <br>
//                 Year: ${movie.year}<br>
//                 Rating: ${movie.rating}<br>
//                 Votes: ${movie.votes}<br>
//                 </li></ul>
//                `;
//         resultContainer.innerHTML = movieInfo;
//                     //  } else if(goValue.toLowerCase() !== movie.title.toLowerCase()){
//                     //     result.innerHTML= `<h2>Movie doesn't exist. Try again.</h2>`;
//         }
//     })
// }

function getPosterPic(title) {
    fetch(`http://www.omdbapi.com/?t=${title}&apikey=5d147479`)
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            output = `<li><img src = "${data.Poster}" class="poster-img"></li>`;
            document.getElementById(`movie-${data.Title}`).innerHTML += output;
        })
}


function sortMovies() {
    let selectValue = document.getElementById("sort-movies").value;
    if (selectValue === "Titles") {
        resultContainer.innerHTML.value.sort((movie1, movie2) => {
            if (movie1.title < movie2.title) {
                return -1;
            } else if (movie1.title > movie2.title) {
                return 1;
            } else {
                return 0;
            }
        });
    } else if (selectValue === "Rating"){
        resultContainer.innerHTML.movies.sort((movie1,movie2) => {
            if(movie1.rating < movie2.rating){
                return -1;
            } else if (movie1.rating > movie2.rating){
                return 1;
            }else{
                return 0;
            }
        });
    } else if(selectValue === "Year"){
        resultContainer.innerHTML.value = movies.sort((movie1,movie2) => {
            if(movie1.year < movie2.year){
                return -1;
            } else if (movie1.year > movie2.year){
                return 1;
            }else{
                return 0;
            }
        });
    }
}

