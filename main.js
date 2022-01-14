const BASE_URL = "http://f3c9-35-196-32-235.ngrok.io"

const inputBox = document.getElementById("youtube-url")
const submitButton = document.getElementById("submit-button")

let youTubeUrl;

inputBox.addEventListener('input',(e) => {
    youTubeUrl = e.target.value;
})

const getSummary = async() => {
    const API_URL = `${BASE_URL}/api/summarize?youtube_url=${youTubeUrl}`
    const response = await fetch(API_URL, {
        mode:"no-cors"
    });
    console.log(response)
}

submitButton.addEventListener('click', getSummary);