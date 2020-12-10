var btnTranslate = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#input-text");
var outputTxt = document.querySelector("#output-text");

/**outputTxt.innerHTML = "Hi "+inputTxt.value;**/

function errorHandler(error){
     console.log("Error occured", error);
     alert("Oops something wrong with the server! Please try again after sometime");
}

function clickHandler(){
    var inputTxtValue = inputTxt.value; //input
    var url = "https://api.funtranslations.com/translate/shakespeare.json?text="+inputTxtValue;
    fetch(url)
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        console.log("url"+url+" translated text ---"+translatedText);
        outputTxt.innerText = translatedText; //output - translated text
    })
    .catch(errorHandler)

}

btnTranslate.addEventListener("click", clickHandler);