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
        console.log(data)
         var firstDrink = data.drinks[0]
         VoiceRSS.speech({
            key: 'b89df480eec844ff8978653fae8636f2',
            src: firstDrink.strInstructions,
            hl: 'en-us',
            v: 'Mike',
            r: 0, 
            c: 'mp3',
            f: '44khz_16bit_stereo',
            ssml: false
        });
    
    })
})



// function(){
//     for (let I = 0; I < array.length; I++) {
    
        
//     }
// }
$( document ).ready(function(){
    $(".dropdown-trigger").dropdown({
        hover: true
    });
})

