
// document.getElementById('button')
//     .addEventListener("click", function(){
//         console.log('You clicked me!');
//     });


document.getElementById("all-repos").addEventListener("click", getDataSummary);
document.getElementById("repo-names").addEventListener("click", getRepoInfo);
document.getElementById("goButton").addEventListener("click", searchRepo);


function getDataSummary(){
    fetch('https://api.github.com/orgs/HackYourFuture/repos')
    .then((res) => res.json())
    .then((data) => {
        let repo = '';
        data.forEach(function (x){
            repo += `<br> <ul>
            <li>
            Name: <a href="https://api.github.com/repos/HackYourFuture/${x.name}" target="_blank">${x.name}</a><br>
            ID: ${x.id} <br>
            Language:${x.language}<br>
            Size: ${x.size}<br>
            Forks: ${x.forks}<br>
            Stargazers: ${x.stargazers_count}<br>
            Watchers: ${x.watchers}</li>
            </ul>`;
        })
    document.getElementById('output').innerHTML = repo;
    })
};

function getRepoInfo(){
    fetch('https://api.github.com/orgs/HackYourFuture/repos')
    .then((res) => res.json())
    .then((repo) => {
        let names = '';
        repo.forEach(function (x){
            names += `<ul><li><a href="https://api.github.com/repos/HackYourFuture/${x.name}" target="_blank">${x.name}</a></li></ul>`;
        })
    document.getElementById('output').innerHTML = names;
    })
};

function searchRepo(){
    fetch('https://api.github.com/orgs/HackYourFuture/repos')
    .then((res) => res.json())
    .then((data) => {
        let goValue = document.getElementById("search").value;
        let repoInfo = '<h2>Result: </h2>';
        data.filter(function(x) {
            if (goValue === x.name){
                repoInfo += ` <ul>
                <li>
                Name: <a href="https://api.github.com/repos/HackYourFuture/${x.name}" target="_blank">${x.name}</a><br>
                Language: ${x.language}<br>
                Description: ${x.description}<br>
                URL: <a href="https://api.github.com/repos/HackYourFuture/${x.name}"> ${x.url} </a>
                </li></ul>`;
                document.getElementById('output').innerHTML = repoInfo;
            // } else if (goValue !== x.name){
            //     document.getElementById('output').innerHTML = `<h2>Repository name doesn't exist.</h2>`;
            }
        })
    })
}
