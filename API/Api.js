// API/TMDBApi.js

const API_TOKEN = "1f507445106524cad72c034a7b221537";

export function getFilmsFromApiWithSearchedText (text) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
  //const url = 'https://cors-anywhere.herokuapp.com/' + 'http://www.mobdesign.fr/Api/w-list-users.php' 
  
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}