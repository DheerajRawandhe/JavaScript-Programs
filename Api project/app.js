const URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn =document.querySelector("form button");
const fromCurr =document.querySelector(".from select");
const toCurr =document.querySelector(".to select");
 const msg =document.querySelector(".msg");

// for (code in countryList){
//     console.log(code,countryList[code]);      //currrency names print 
// }

for(let select of dropdowns){
    for (currcode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currcode;
        newOption.value = currcode;
        if(select.name === "from" && currcode === "USD"){
            newOption.selected = "Selected";
        }else if(select.name === "to" && currcode === "IND"){
            newOption.selected = "Selected";
        }
        select.append(newOption);
}

const updateFlag =(element)=>{
    let currcode = element.value;
    // console.log(currcode);

    let countryCode = countryList[currcode]; 
    let newSrc ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api";
    let img= element.perentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();  
    let amount =document.querySelector(".amount input");
    let amtVal = amount.value;
    console.log(amtVal);
    let(amtVal === "" || amtVal < 1)
     {
         amtVal = 1;
         amount.value= "1";
     }
 
     console.log(fromCurr.value,toCurr.value);
    const URL =`${URL}/${fromCurr.value}/${toCurr.value}.json`;
    let response = await fetch(URL);
    let data =await response.json();
    let rate = data[toCurr.value.toLowerCase()];
    // console.log(rate); 
    // console.log(amount); 

   let finalAmount = amtVal * rate;
   msg.innerText =`${amtVal}  ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
    
});

const updateExchange =()=>{
}

window.addEventListener("change", (evt)=>{
    updateFlag(evt.target);
    updateExchange();

});
}

