const URL ="https://cat-fact.herokuapp.com/facts";
const factPara =document.querySelector("#fact");
const btn = document.querySelector("#btn");


const getFacts = async () =>{
    console.log("Gatting data...");
    let response = await fetch(URL); // Fetch api 
    console.log(response);     // Json Format
    let data = await response.json();
    factPara.innerText =data[1].text;

};


// function getFacts(){
//     fatch(URL).then((response) =>{
//         return response.json();
//     })
//     .then((data) =>{
//         console.log(data);
//         factPara.innerText =data[2].text;
//     });
// }
 btn.addEventListener("click",getFacts);