let generateImageForm = 
    document.getElementById('generate-image-form');
let formInput = 
    document.getElementById('input-value');
let imageContainerText = 
    document.getElementById('imageContainerText');
let imageGenerated = 
    document.getElementById('generated-image');
let imageContainer = 
    document.getElementById('images-visible');


    async function fetchImages(category) {
        try {
            let response = await fetch(`https://api.pexels.com/v1/search?query=${category}`, {
                headers: {
                    'Authorization': 'SGTJ88S5VqocgkgTd456pIliPOdFszd3sCh8nulX3UVk14gHN4SaLhqa'
                }
            });
            if (!response.ok) {
                throw new Error('Unable to fetch the data');
            }
    
            let data = await response.json();
            let imageUrl = data.photos[0].src.medium;
    
            imageContainerText.innerText = "Below is your generated Image:";
            imageContainer.style.display = "block";
            imageGenerated.src = imageUrl;
            console.log(imageUrl);
        } catch (error) {
            console.log(error);
        }
    }
    
    

generateImageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let enteredText = formInput.value;
    if (enteredText !== "") {
        fetchImages(enteredText);
    }
    else {
        imageContainerText.innerText = 
            "Input field can not be empty!";
    }
})
