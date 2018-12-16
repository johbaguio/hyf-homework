const url = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';
const resultContainer = document.getElementById('output');
let movies = [];

fetch(url)
    .then((res) => res.json())
    .then((jsonMovies) => {
        movies = jsonMovies;
        getTitles();
        document.getElementById('titles').addEventListener('click', getTitles);
        document.getElementById('good').addEventListener('click', getGoodMovies);
        document.getElementById('average').addEventListener('click', getAverageMovies);
        document.getElementById('bad').addEventListener('click', getBadMovies);
        document.getElementById('ave-rating').addEventListener('click', getAveRating);
        document.getElementById('old-movies').addEventListener('click', getOldMovies);
        // document.getElementById('the').addEventListener('click', searchWord('the'));
    })

function getTitles() {
    let output = '';
    movies.map(movie => output += `<ul><li><b>${movie.title}</b></li><br></ul>`);
    resultContainer.innerHTML = output;

}

function getGoodMovies() {
    let goodMovies = '';
    let good = movies.filter(movie => movie.rating >= 7)
    good.map(movie => goodMovies += `<ul><li><b><b>${movie.title}</b> <br> Rating: ${movie.rating}</li><br></ul>`)
    resultContainer.innerHTML = `<h3 class="total">Total number of movies: <br>${good.length}</h3><br>` + goodMovies;
}

function getAverageMovies() {
    let aveMovies = '';
    let average = movies.filter(movie => movie.rating >= 4 && movie.rating < 7)
    average.map(movie => aveMovies += `<ul><li><b>${movie.title}</b> <br> Rating: ${movie.rating}</li><br></ul>`)
    resultContainer.innerHTML = `<h3 class="total">Total number of movies: <br>${average.length}</h3>` + aveMovies;
}


function getBadMovies() {
    let badMovies = '';
    let bad = movies.filter(movie => movie.rating < 4)
    bad.map(movie => badMovies += `<ul><li><b>${movie.title}</b> <br> Rating: ${movie.rating}</li><br></ul>`)
    resultContainer.innerHTML = `<h3 class="total">Total number of movies: <br>${bad.length}</h3>` + badMovies;
}

function getAveRating() {
    let aveRating = '';
    const totalRating = (rate, movie) => rate + movie.rating;
    let rating = movies.reduce(totalRating, 0);
    rating = (rating / movies.length).toFixed(2);
    aveRating += `<h2 class="ave-rate">Average rating of all movies:   <b class="rate">${rating}</b> </h2><br>
                    `;
    resultContainer.innerHTML = aveRating;
}

function getOldMovies() {
    let oldMovies = '';
    let oldies = movies.filter(movie => movie.year >= 1980 && movie.year <= 1989)
    oldies.map(movie => oldMovies += `<ul><li><b>${movie.title}</b> <br> ${movie.year} </li><br></ul>`)
    resultContainer.innerHTML = `<h3 class="total">Total number of movies: <br>${oldies.length}</h3>` + oldMovies;
}

function searchWord(word) {
    let output = '';
    movies.map(movie => {
        let words = movie.title.split(' ');
        //console.log(words);
        words.filter(x => {
            if (x.toLowerCase() === word.toLowerCase()) {
                output += `<ul><li><b>${movie.title}</b></li></ul>`;
                resultContainer.innerHTML = output;
            }
        })
    })
}