//-------------OnClick Event---------------------//
/*
let btn=document.querySelector("#btn");

btn.onclick = () =>{
    console.log("Button was clicked");confirm("Hii coder");
    let a=20;
    a++;
    console.log(a);
}; 

*/
//-----OnMouseOver Event------------------------//

let div= document.querySelector("div");
div.onmouseover= ()=>{
    console.log("you are inside Div");
};  

//----Event Object(e) ->event---------------------//

btn.onclick = (e) =>{
    console.log(e);
    console.log(e.type);  //click
    console.log(e.target); 
    console.log(e.clientX,e.clientY); //value

} 


//-----------------Event Listeners----------------------------------//
//AddEventListner-->
/*
let div =document.querySelector("div");

btn.addEventListener("click",()=> {   
    console.log("Button was Clicked");

});
btn.addEventListener("click",()=>{
    console.log("Button was Clicked 2nd time"); //multiple event create

});
const Heandler1=()=>{             //event ko remove krne ke liye const ka use
    console.log("Button was Clicked Heandler1"); 
}; 
//----------Remove_Event_Listener---------------------------//
btn.removeEventListener("click",Heandler1);  */


























