
const giphyAPI = "https://api.giphy.com/v1/gifs/search?&api_key=YnS9kiJwluUaC8C37PFf1HLgld83S37g&q="
const search = document.querySelector("form")


search.addEventListener('submit', (event) => {
    event.preventDefault()
    let searchValue = event.target[0].value
    findGIF(searchValue)
})


findGIF = (searchValue) => {
    fetch(giphyAPI + searchValue)
        .then(response => { return response.json() })
        .then(gifPayload => {
            for (let i = 0; i < gifPayload.data.length; i++) { createImg(gifPayload.data[i].images.original.url) }
        })
        .catch((error) => console.log(error))
}

createImg = (input) => {
    let display = document.querySelector("#display")
    let newImg = document.createElement("img")
    let newImgDiv = document.createElement("div")
    newImg.src = input
    newImgDiv.appendChild(newImg)
    display.appendChild(newImgDiv)
}