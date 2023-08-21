async function getImage(input_val){
const gifResponse =  await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
            //q: "gif",  //has to come from input box....so not gif, but a variable
            q: input_val
            //giphy uses q...
          }
          });
    console.log(gifResponse.data);
return gifResponse.data.data;  
}


async function insertImage() {
    const searchTerm = $("#searchInput").val(); //sigh..
    const imgData = await getImage(searchTerm);
    if (imgData.length > 0) {  //sigh...
        const randomIndex = Math.floor(Math.random() * imgData.length);
        const imageUrl = imgData[randomIndex].images.original.url;
    
        const $newGif = $("<img>", {
          src: imageUrl,
          class: "w-100"
        });
    
        const $newCol = $("<div>", {
          class: "col-md-4 col-12 mb-4"
        }).append($newGif);
    
        $("#gifContainer").empty().append($newCol);
      } else {
        console.log("how can you be < 0");
        $("#gifContainer").empty();
      }
    }
    
    $("#submitButton").on("click", insertImage);


//link? http://api.giphy.com/v1/gifs/search  https://swapi.co/api/planets
//key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"  
//{"data":[{"type":"gif"
