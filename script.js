//testing javascript file sync to html
console.log("Hello World")

textBody = document.getElementById("textBody")

//change submit button color
myButton = document.getElementById("myBtn")
myButton.style.backgroundColor = "orange"

//change clear button color
myClr = document.getElementById("btnClr")
myClr.style.backgroundColor = "red"

//add image to div on textbody
myImage = document.getElementsByClassName("myImg")
myImage = new Image(500, 200)
myImage.src = "poke1.png"
textBody.appendChild(myImage);


//button function to clear text off screen
var clrBtn = document.getElementById("btnClr")
clrBtn.addEventListener("click", function(){
  let out = "";
  document.getElementById("demo").innerHTML = out;
})

// function to make a user query wity fetch
var myBtn = document.getElementById("myBtn")
myBtn.addEventListener("click", function(){
  let userAnswer = document.getElementById("answer").value
  //test output
  console.log(userAnswer)
  const site = 'https://pokeapi.co/api/v2/'
  let url = site + userAnswer
  //test output
  console.log(url)

  fetch(url)
    // returns json as a object so it works
    .then(function(response) { return response.json(); })
    // call function
    .then(data => showText(data))
    // call function
    //.then(data => showTable(data))
    // catches my errors
    .catch(error => console.log(error.message))

    //function takes fetch data and displays in html div
    function showText(data) {
      let out = "";
      out = JSON.stringify(data)
      console.log(data)

      out += data;
      document.getElementById("demo").innerHTML = out;
    }
    // add data from fetch to html
    let list = document.getElementById("list");

  }) 