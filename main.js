const BASE_URL = "http://127.0.0.1:8000/"

const inputFile = document.getElementById("input-file")
const submitButton = document.getElementById("submit-button")


const createFormData = (files) => {
    const formData = new FormData()
    formData.append('file', files[0])
    return formData
}


const handleSubmitEvent = async (formData) => {

    console.log("heyy")
    // fetch(BASE_URL,{
    //     method: 'POST',
    //     body: formData
    // })
    
    const response = await fetch(BASE_URL, {
        method: 'POST',
        body: formData
    })

    
    const data = await response.json()
    console.log("data from API", data)
    return data.output
}

submitButton.addEventListener('click', async (event) => {
    document.getElementById("output").innerText = "Loading..."
    const formData = createFormData(inputFile.files)
    const displayThisData = await handleSubmitEvent(formData)
    
    document.getElementById("output").innerText = `${displayThisData}`
})