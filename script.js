var baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
var SearchInput = document.
window.addEventListener('click', function(){
    fetch(baseUrl + "screwdriver")
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