let repos = document.getElementById('all-repos')
// let repoName = document.getElementById('all-names')
let repContributors = document.getElementById('with-contributors')
let repoSearch = document.getElementById('goButton')

repos.addEventListener('click', getRepos)
// repoName.addEventListener('click', showRepoNames)
repContributors.addEventListener('click', getRepContributors)
repoSearch.addEventListener('click',searchRepo)

const infoSource = 'https://api.github.com/orgs/HackYourFuture-CPH/repos';

function getRepos(){
    fetch(infoSource)
    .then((res) => res.json())
    .then((data) =>{
        let repo='';
        data.forEach(function (x){
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

    })
}

// function showRepoNames(){
//     fetch(infoSource)
//     .then((res) => res.json())
//     .then((info) =>{
//         let names='';
//         info.forEach(function (y){
//          names += ` <ul>
//             <li>
//             <a href="https://api.github.com/repos/HackYourFuture/${y.name}" target="_blank">${y.name}</a><br>
//             </li>
//             </ul>
//             `;
//         })
//     document.getElementById('repo-names').innerHTML = names;
//     })
// }



function getRepContributors(){
    fetch(infoSource)
    .then((res) => res.json())
    .then((data) =>{
        let output='';
        data.forEach(function (x){
         output += ` 
            <ul>
                <li>
                    <a href="https://api.github.com/repos/HackYourFuture/${x.name}" target="_blank">${x.name}</a><br><br>
                    <button onClick="showRepContributors('${x.name}')" class="contri-btn">Contributors</button><br>
                </li>
            </ul>`;
        })
    document.getElementById('contributors').innerHTML = output;
    })
   
}




function showRepContributors(name){
   
    fetch(`https://api.github.com/repos/HackYourFuture-CPH/${name}/contributors`)
    .then((res) => res.json())
    .then((data) =>{
        console.log(name);
        let output = `<center><h2 class="repo-info">${name} Contributors: </h2></center>`;
        let output1 ='';
        data.forEach(function(x){
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


function searchRepo(){
    fetch('https://api.github.com/orgs/HackYourFuture-CPH/repos')
    .then((res) => res.json())
    .then((data) => {
        let goValue = document.getElementById("search1").value;
        let repoInfo = '';
        data.filter(function(x) {
            if (goValue === x.name){
                repoInfo += ` <ul>
                <li>
                Name: <a href="https://api.github.com/repos/HackYourFuture/${x.name}" target="_blank">${x.name}</a><br>
                Language: ${x.language}<br>
                Description: ${x.description}<br>
                Learn more about ${x.name}  <a href="https://api.github.com/repos/HackYourFuture/${x.name}"> here. </a>
                </li></ul>
               `;
                document.getElementById('searchRepo').innerHTML = repoInfo;
            // } else if (goValue !== x.name){
            //     document.getElementById('output').innerHTML = `<h2>Repository name doesn't exist.</h2>`;
            }
        })
    })
}


// function hideElement() {
//     var x = document.getElementsByClassName("containers");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }