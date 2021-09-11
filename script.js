var baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
var searchInput = document.getElementById('search')
var searchBtn = document.getElementById('search-button')
var displayDiv = document.getElementById('simple')


searchBtn.addEventListener('click', function(event){
    event.preventDefault()
    var searchTerm = searchInput.value
    fetch(baseUrl + searchTerm) //drink name needszz needs to be made
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        if (data.drinks===null) {
            alert("drink not found")
            return
        }
       displayDiv.innerHTML= ""
        for (let i = 0; i < data.drinks.length; i++) {
        
            var drink = data.drinks[i]
            var drinkThumbnailURL = drink.strDrinkThumb + "/preview"
            console.log(drinkThumbnailURL)
            var element = `<div class="row">
            <div class="col s12 m6">
            <div class="card">
            <div class="card-image card">
            <img src="${drinkThumbnailURL}" width="200px" height="400px">
            <span class="card-title">${drink.strDrink}</span>
            <button type="button" data-text-to-speech="${drink.strDrink +". "+ drink.strInstructions}"
                class="play-instructions btn-floating halfway-fab waves-effect waves-light red">Play
            </button>
            </div>
            <div class="card-content">
            <p>${drink.strInstructions}</p>
            </div>
            </div>
            </div>`
            
           displayDiv.innerHTML += element 
                
                 
                console.log(data.drinks[0].strDrinkThumb + "/preview")
                console.log(data.drinks[i])
         }
         //search for drink, look over drinks, build html, 
        })
    })
    //event listener on drink display div, "simple"
    displayDiv.addEventListener('click', function(event){
        //if play instructions are presetnt play button clicked 
        //get text to speech from data attribute on the html button
        //send text to speech request (play instructions)
        console.log(event.target.getAttribute('data-text-to-speech'))
        //look for class of play instructions on the click event
        if (event.target.classList.contains('play-instructions')) {
            console.log('hello world')
             VoiceRSS.speech({
                key: 'b89df480eec844ff8978653fae8636f2',
                src: event.target.getAttribute('data-text-to-speech'),
                hl: 'en-us',
                v: 'Mike',
                r: 0, 
                c: 'mp3',
                f: '44khz_16bit_stereo',
                ssml: false
            });
    }
})

