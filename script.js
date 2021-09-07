var baseUrl = "www.thecocktaildb.com/api/json/v1/1/search.php?f="
var baseUrl2 = ""

fetch(baseUrl + "screwdriver")
.then(function(response){
    return response.json
})
.then(function(data){
    console.log(data)

})