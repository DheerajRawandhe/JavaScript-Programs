//getAttribute--------------------------------------------
/*
let div=document.querySelector("div");
console.log(div);

let id=div.getAttribute("id");  //getAttribute ka use (id_Name)
console.log(id);
*/

//SetAttribute-----------------------------------------------
/*
let para=document.querySelector("p");  
console.log(para.setAttribute("class","new Class")); */ //class ka name change(element) me


//Node.style-----------------------------------------------------
/*
let div=document.querySelector("div");
div.style.backgroundColor="blue";
div.style.fontSize="20px";     //Js me Styles change kar skte hai
div.style.height="200px"
div.style.width="200px" */


//Insert Element------------------------------------------------

let newbtn=document.createElement("button");
newbtn.innerText ="Click me";
console.log(newbtn);

let div=document.querySelector("div");
div.append(newbtn);                    //Button ko append krna


//delete node---------------------------------
let para =document.querySelector("p"); //paragrph ko delete krna
para.remove(para);


