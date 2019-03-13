const URL = `https://api.github.com/users`;

export function getUsers() {
  return fetch(URL)
  .then(response => response.json())

}

export function searchUser(name){
    const searchURL = `https://api.github.com/search/users?q=${name}`;
    console.log(searchURL)
    return fetch(searchURL).then(response => response.json());
}

