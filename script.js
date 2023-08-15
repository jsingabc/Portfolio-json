//testing javascript file sync to html
console.log("Hello World")


var myBtn = document.getElementById("myBtn")
myBtn.addEventListener("click", function(){
  let userAnswer = document.getElementById("answer").value
  console.log(userAnswer)
  const site = 'https://pokeapi.co/api/v2/'
  let url = site + userAnswer
  console.log(url)

  fetch(url)
    // returns json as a object so it works
    .then(function(response) { return response.json(); })
    // data is sent to a function call
    .then(data => showText(data))
    // catches my errors
    .catch(error => console.log(error.message))

    function showText(data) {
      data = JSON.stringify(data)
      console.log(data)
    }

})


//variable that holds the fetch file




let out = "";

//function showText() {
  //data = JSON.stringify(data)
  //out += data
  //document.getElementById("test").innerHTML = out;
//}




    
    //function to put data to html
    //function showText(data){
     //let placeholder = document.querySelector("#data-output");
     //let out = "";
     //out = JSON.stringify(data)
     //for(let product of data) {
      //out += `
      //<tr>
        //<td>${product}</td>
      //</tr>
      //`;
     //}
      //placeholder.innerHTML = out;
    //}


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