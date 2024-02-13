let generateStoryBtn = document.getElementById("btn");

let storyTitle = document.getElementById("storyTitle");

let storyPara = document.getElementById("storyPara");

let storyMoral = document.getElementById("storyMoral");

let loader = document.getElementById("spinner");


function finalUpdation(jsonData){

    storyTitle.textContent = "Title : " + jsonData.title;

    storyPara.textContent = jsonData.story;

    storyMoral.textContent = "Moral : " + jsonData.moral;

}


function callForResource(event){

    loader.classList.toggle("d-none");

    storyTitle.textContent = "";
    storyPara.textContent = "";
    storyMoral.textContent = "";


    let url = "https://shortstories-api.onrender.com";

    let options = {
        method: "GET"
    }

    let fetchData = async () => {
        try{
            let response = await fetch(url, options);
            let jsonData = await response.json();

            loader.classList.toggle("d-none");
            
            console.log(jsonData)

            finalUpdation(jsonData);
        }
        catch(error){
            console.log(error);
        }
    }

    fetchData();

}

generateStoryBtn.addEventListener("click", callForResource);



