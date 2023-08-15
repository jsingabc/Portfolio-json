//testing javascript file sync to html
console.log("Hello World")

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

    //function takes fetch data and displays in htnl div
    function showText(data) {
      let out = "";
      out = JSON.stringify(data)
      console.log(data)

      out += data;
      document.getElementById("demo").innerHTML = out;
    }
  })
/*
     function showTable(data){ 
      let tableOut = "";
      let placeholder = document.querySelector("#data-output");
      tableOut = JSON.stringify(data)
      for(let poke in data) {
        tableOut += `
      <tr>
        <td>${poke.name}</td>
        <td>${poke.url}</td>
        <td>${poke.previous}</td>
        <td>${poke.results}</td>
      </tr>
      `;
      }
      placeholder.innerHTML = tableOut;
    }
    */

    


    //function showText(data){
      //let placeholder = document.querySelector("#data-output");
      //let out = "";
      //out = JSON.stringify(data)
      //for(let product of data) {
       //out += `
       //<tr>
         //<td>${product.name}</td>
         //<td>${product.year}</td>
         //<td>${product.color}</td>
         //<td>${product.pantone_value}</td>
       //</tr>
       //`;
      //}
       //placeholder.innerHTML = out;
     //}