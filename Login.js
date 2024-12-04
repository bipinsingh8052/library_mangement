// function sub(){
//     
// }
function refer(){
    preventdeafult();
}
let loginbtn =document.querySelector(".log");
let regbtn =document.querySelector(".reg");
loginbtn.addEventListener("click",()=>{
    let a= document.querySelector("#login_form");
    a.style.display="block";
    console.log(a);
    refer();
  
   
    
})
regbtn.addEventListener("click",()=>{
    let a= document.querySelector("#login_form");
    a.style.display="block";
    console.log(a);
    
})

let button =document.querySelector("form button");
console.log(button);
button.addEventListener("click",()=>{
    let a =document.querySelector(".email input");
        let b= document.querySelector(".password input");
        
        console.log(a.value,b.value);
        if(!(a.value.includes('.com') && a.value.includes('@gmail'))){
            a.style.color="red";
            window.alert("Please Enter the write again email")
            a.focus();
            a.value="";
            return false;
            
        }
        let c= document.querySelector("form");
        console.log(c.setAttribute("action","/first_page/home_page_/index.html"));
        console.log(c);
        return true;
})
function eyes(){
    let a=document.querySelector(".password .main_password #eyes");
    let c= document.querySelector("#eyessecond");
    let b= document.querySelector(".main_password input");
    
    if(b.type == "password")
    {
        b.type="text";
        counter=1;
        c.style.display="none";
        a.style.display="block";
        
    }
    else if(b.type == "text"){
        b.type="password";
        counter=0;
        c.style.display="block";
        a.style.display="none";
    }
    // console.log(a);
    
}

function input(){
    let a =document.querySelector(".email input") ;
    // a.style.color="black";
}

function h(){
 let a=document.querySelector("form button");
 a.style.transition="all 2s ease ";
 a.style.backgroundColor="red";
 a.style.color="white";
 a.style.border="0.5px solid transparent";
//  a.style.transition="border 1s ease"
}
function j(){
    let a=document.querySelector("form button");
    a.style.transition="all 2s ease ";
    a.style.cursor="pointer";
    a.style.backgroundColor="white";
    a.style.color="red";
    a.style.border="0.5px solid black";
   }

   function login(cla){
    
    let a =document.querySelector(`${cla}`).style.cssText=`border-bottom: 2px solid transparent;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;`;
    console.log(a);

   }

   function loginout(cla){
    let a =document.querySelector(`${cla}`).style.cssText=`border-bottom: 2px solid red;
                padding-bottom: 10px;
                padding-left: 10px;
                padding-right: 10px;
                cursor: pointer;`;

   }
