console.log('%c HI', 'color: firebrick')

const breedUrl = "https://dog.ceo/api/breeds/list/all";
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"


// <script> in <head>, add DOMContentLoaded
document.addEventListener("DOMContentLoaded", (event) => {
    const imgDiv = event.target.getElementById("dog-image-container")
    const ul = event.target.querySelector("#dog-breeds")

    // filter breeds
    const select = event.target.querySelector("#breed-dropdown")
    const liObj = ul.getElementsByTagName("li")    
    select.addEventListener("change", (event)=>{
        const currentOption = event.target.value
        // console.log(currentOption)
        for (i = 0; i < liObj.length; i++) {
            console.log(liObj[i].textContent[0])
            if (liObj[i].textContent[0] === currentOption) {
                liObj[i].style.display = ""
            } else {
                liObj[i].style.display = "none"
            }
        }
    })

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
            let liId = 0
            for (each in breedsMessage) {
                liId += 1
                const li = event.target.createElement("li")
                li.id = liId
                li.textContent = each
                ul.append(li)

                // change li color when click
                li.addEventListener("click", (e) => {
                    li.style.backgroundColor = "#8DCBE6"
                })

            }

        })
    }
    renderBreeds()
})


function getImages() {
    return fetch(imgUrl)
    .then(response => response.json())
    
}

