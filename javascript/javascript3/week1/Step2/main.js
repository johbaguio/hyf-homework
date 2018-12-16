
const url = 'https://api.github.com/orgs/HackYourFuture-CPH/repos';
let repositories = [];

fetch(url)
    .then((res) => res.json())
    .then((repos) => {
        repositories = repos;
        document.getElementById('all-repos').addEventListener('click', getRepos);
        document.getElementById('with-contributors').addEventListener('click', getRepContributors);
        document.getElementById('goButton').addEventListener('click', searchRepo);
    })


    // fetch(url)
    // .then((res) => res.json())
    // .then((jsonMovies) => {
    //     movies = jsonMovies;
    //     getTitles();
    //     document.getElementById('titles').addEventListener('click', getTitles);
    //     document.getElementById('good').addEventListener('click', getGoodMovies);
    //     document.getElementById('average').addEventListener('click', getAverageMovies);
    //     document.getElementById('bad').addEventListener('click', getBadMovies);
    //     document.getElementById('ave-rating').addEventListener('click', getAveRating);
    //     document.getElementById('old-movies').addEventListener('click', getOldMovies);
    //     // document.getElementById('the').addEventListener('click', searchWord('the'));
    // })


function getRepos() {
    let repo = '';
    repositories.map(x => {
        repo += ` <ul>
            <li>
            Name: <a href="https://api.github.com/repos/HackYourFuture/${x.name}" target="_blank">${x.name}</a><br>
            Description: ${x.description}<br>
            Language:${x.language}<br>
            Size: ${x.size}<br>
            Forks: ${x.forks}<br>
            Stargazers: ${x.stargazers_count}<br>
            Watchers: ${x.watchers}<br>
            </li>
            </ul>`;
            })
            document.getElementById('repos').innerHTML = repo;
}


function getRepContributors() {
    let output = '';
    repositories.map(x => {
         output += `<ul>
                <li>
                <a href="https://api.github.com/repos/HackYourFuture/${x.name}" target="_blank">${x.name}</a><br><br>
                    <button onClick="showRepContributors('${x.name}')" class="contri-btn">Contributors</button><br>
                </li>
        </ul>`;
    })
    document.getElementById('contributors').innerHTML = output;
}



function showRepContributors(name){
    fetch(`https://api.github.com/repos/HackYourFuture-CPH/${name}/contributors`)
    .then((res) => res.json())
    .then((data) =>{
        //console.log(name);
        let output = `<center><h2 class="repo-info">${name} Contributors: </h2></center>`;
        let output1 ='';
        data.map(x => {
            output1 += `<br><ul>
            <li><b>
            ${x.login} </b><br><br>
            <img src = "${x.avatar_url}" class="cont-pic">
            </li>
            </ul>`;
        })
    document.getElementById('container5').innerHTML = (output + output1);

    })
}


function searchRepo() {
    let goValue = document.getElementById("search1").value;
    let repoInfo = '';
    repositories.filter(x => {
        if (goValue.toLowerCase() === x.name.toLowerCase()) {
            repoInfo += `<ul>
            <li>
            Name: <a href="https://api.github.com/repos/HackYourFuture/${x.name}" target="_blank">${x.name}</a><br>
            Language: ${x.language}<br>
            Description: ${x.description}<br>
            Learn more about ${x.name}  <a href="https://api.github.com/repos/HackYourFuture/${x.name}"> here. </a>
            </li></ul>
               `;
            document.getElementById('searchRepo').innerHTML = repoInfo;
                    // } else if (goValue !== x.name){
                    //     document.getElementById('searchRepo').innerHTML = `<h2>Repository name doesn't exist.</h2>`;
            }
        })
}
