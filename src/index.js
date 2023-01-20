const breedUrl = "https://dog.ceo/api/breeds/list/all";
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const letters = ["e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]



// <script> in <head>, add DOMContentLoaded
document.addEventListener("DOMContentLoaded", (event) => {
    const imgDiv = event.target.getElementById("dog-image-container")
    const ul = event.target.querySelector("#dog-breeds")


    // filter breeds
    const select = event.target.querySelector("#breed-dropdown")
    const defaultOption = document.createElement("option")
    defaultOption.setAttribute("value", "select")
    select.prepend(defaultOption)
    
    
    letters.forEach(letter => {
        const option = document.createElement("option")
        option.setAttribute("value", letter)
        option.textContent = letter
        select.append(option)
    })

    const liObj = ul.getElementsByTagName("li")    
    select.addEventListener("change", (event)=>{
        const currentOption = event.target.value
        filter(currentOption)
        
    })
    
    function filter(currentOption) {
        for (i = 0; i < liObj.length; i++) {
            if (currentOption === "select") {
                liObj[i].style.display = ""   // show all 
            } else if (liObj[i].textContent[0] === currentOption) {
                liObj[i].style.display = ""  // to show element
            } else {
                liObj[i].style.display = "none"  // to hide element
            }
        }
    }

    getImages().then(imageData => renderImages(imageData))
    
    // render image
    function renderImages(imageData) {
        const imgURLs  = imageData["message"]
        imgURLs.forEach(url => {
            const createImg = document.createElement("img")
            createImg.src = url
            imgDiv.append(createImg)
        })
    }


    // load breeds
    function renderBreeds() {
        fetch(breedUrl)
        .then(response => response.json())
        .then(breedsData => {
            const breedsMessage = breedsData["message"]
            
            for (each in breedsMessage) {
                const li = event.target.createElement("li")
                li.textContent = each
                ul.append(li)
            }

            // change bgcolor while being selected
            let lists = ul.querySelectorAll("li");
            lists.forEach(list => {
                list.addEventListener("click", () => {
                    lists.forEach(l => l.style.backgroundColor = "")
                    list.style.backgroundColor = "#8DCBE6"
                })

            })
        })
    }
    renderBreeds()
})


function getImages() {
    return fetch(imgUrl)
    .then(response => response.json())
    
}

