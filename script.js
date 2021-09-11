var baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
var searchInput = document.getElementById('search')
var searchBtn = document.getElementById('search-button')
var displayDiv = document.getElementById('simple')


searchBtn.addEventListener('click', function(event){
    event.preventDefault()
    var searchTerm = searchInput.value
    fetch(baseUrl + searchTerm) //screwdriver needs to be made
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        for (let i = 0; i < data.drinks.length; i++) {
        
            var drink = data.drinks[i]
            var drinkThumbnailURL = drink.strDrinkThumb + "/preview"
            console.log(drinkThumbnailURL)
            var element = `<div class="row" id="simple">
            <div class="col s12 m6">
            <div class="card">
            <div class="card-image card">
            <img src="${drinkThumbnailURL}" width="200px" height="400px">
            <span class="card-title">Grape Shimmer</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
            </div>
            <div class="card-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eos nemo dolore ipsa a alias dolor! Quidem sed eius veritatis eligendi accusamus laudantium ab temporibus, dignissimos laboriosam? Rem, rerum ipsum.</p>
            </div>
            </div>
            </div>`
            
           displayDiv.innerHTML += element 
                
        //          VoiceRSS.speech({
        //             key: 'b89df480eec844ff8978653fae8636f2',
        //             src: drink.strInstructions,
        //             hl: 'en-us',
        //             v: 'Mike',
        //             r: 0, 
        //             c: 'mp3',
        //             f: '44khz_16bit_stereo',
        //             ssml: false
        //         });
                console.log(data.drinks[0].strDrinkThumb + "/preview")
                console.log(data.drinks[i])
         }
      
   })
})