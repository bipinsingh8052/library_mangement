console.log("aehjbchja");
function submitfrom (){
    let a =document.querySelector(".FIRSTNAME input");
    let b =document.querySelector(".LASTNAME input");
    let c =document.querySelector(".email input");
    let d =document.querySelector(".main_password input");
    let e =document.querySelector(".C-password input");
    console.log(a,b,c,d,e);
    if(!( a.value.match(/[qwertyuiopasdfghjklzxcvbnm]/)
        && a.value.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/)
    )){
        alert("Please write your First name  again !!!");
        a.focus();
        a.value=''
        return false;
    }

    else if(b.value == ""){
        alert("Please write your Roll No again !!!");
        b.focus();
        // e.preventDefault();
        return false;
    }
    else if(!(c.value.includes('@') && c.value.includes(".com"))){
        alert("Please write your Email id again !!!");
        c.focus();
        c.value="";
        return false;
    }
    else if(d.value != e.value){
        d.value="";
        d.focus();
        e.value="";
        // e.preventDefault();
        return false;
    }
    // return true;
    // e.preventDefault();
    let login={
        "eamil":c.value,
        "password":e.value,
    };
    localStorage.setItem("libary",JSON.stringify(login));
    return true;
}