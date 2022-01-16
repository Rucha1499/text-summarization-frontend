const BASE_URL = "https://youtube-summariser.herokuapp.com";

const inputBox = document.getElementById("youtube-url")
const submitButton = document.getElementById("submit-button")
const displayBox = document.getElementById('output');

let youTubeUrl;

inputBox.addEventListener('input',(e) => {
    youTubeUrl = e.target.value;
})

const getSummary = async() => {
    displayBox.innerText = 'Please wait...'
    const API_URL = `${BASE_URL}/summarize?youtube_url=${youTubeUrl}`
    const response = await fetch(API_URL);
    const jsonReponse = await response.text();
    displayBox.innerText = jsonReponse;
}

submitButton.addEventListener('click', getSummary);