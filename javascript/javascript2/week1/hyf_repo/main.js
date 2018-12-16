
//Now print the name of the 3rd github repository to the console
console.log(hyfRepos[2].name);

//Step 4, number 3

const showModules = () => {
    const leftList = document.createElement('ul');
    const rightList = document.createElement('ul');
    for( let i = 0; i < hyfRepos.length ; i++){
        if (hyfRepos[i].name === 'HTML-CSS' || hyfRepos[i].name === 'Node.js' || hyfRepos[i].name === 'JavaScript1' || hyfRepos[i].name === 'Git'){
        let moduleName = document.createElement('li');
        moduleName.innerHTML =  hyfRepos[i].name;
        leftList.appendChild(moduleName);
        let stargazers = document.createElement('li');
        stargazers.innerHTML = "Stargazers: " + hyfRepos[i].stargazers_count;
        rightList.appendChild(stargazers);
        let watchers = document.createElement('li');
        watchers.innerHTML = "Watchers: " + hyfRepos[i].watchers_count;
        rightList.appendChild(watchers);
        let forks = document.createElement('li');
        forks.innerHTML = "Forks: " + hyfRepos[i].forks_count;
        rightList.appendChild(forks);
        let language = document.createElement('li');
        language.innerHTML = "Language: " + hyfRepos[i].language;
        rightList.appendChild(language);
        let info = rightList;
        document.getElementById('hyf_modules').appendChild(leftList);
        document.getElementById('modules_info').appendChild(info);
        
        }
    }

}

showModules();

// place the avatar_url (logo) of our organization somewhere

const showLogo = () => {
    const pic = document.createElement("img");
    pic.src = hyfRepos[0].owner.avatar_url;
    document.getElementById('logo').appendChild(pic);
}

showLogo();

