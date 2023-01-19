console.log('%c HI', 'color: firebrick')

const breedUrl = "https://dog.ceo/api/breeds/list/all";
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"


// <script> in <head>, add DOMContentLoaded
document.addEventListener("DOMContentLoaded", (event) => {
    const imgDiv = event.target.getElementById("dog-image-container")
    const breedsUl = event.target.querySelector("#dog-breeds")


    getImages().then(imageData => renderImages(imageData))

    // render image
    function renderImages(imageData) {
        const imgURLs  = imageData["message"]
        imgURLs.forEach(url => {
            const createImg = document.createElement("img")
            createImg.src = url
            // console.log(createImg)
            imgDiv.append(createImg)
        })
    }


    // load breeds
    function renderBreeds() {
        fetch(breedUrl)
        .then(response => response.json())
        .then(breedsData => {
            const breedsMessage = breedsData["message"]
            // console.log(typeof breedsMessage)   // object
            for (each in breedsMessage) {
                const li = event.target.createElement("li")
                li.textContent = each
                breedsUl.append(li)
            }
        })
    }

    renderBreeds()
})


function getImages() {
    return fetch(imgUrl)
    .then(response => response.json())
    
}

