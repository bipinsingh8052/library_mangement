// console.log("bipin singh");
let a =document.querySelector("#das1");
// let b =document.querySelector("#student2");
// let c =document.querySelector("#issue3");
// let d =document.querySelector("#insert4");
// let e =document.querySelector("#setting5");
// console.log(a,b,c,d,e);
a.addEventListener("click",()=>{
    let allFile=document.querySelector(".all_file");
    // console.log(allFile);
    let information = `<div class="dashboard" >
                    <table>
                        <tr>
                            <th>Enrollment No.</th>
                            <td>0110cse22gt099</td>
                            <th> Student Name</th>
                            <td>BIPIN SINGH</td>
                        </tr>
                        <tr>
                            <th>Father Name</th>
                            <td>Rajit Ram singh</td>
                            <th> Date of Birth</th>
                            <td>04/08/2004</td>
                        </tr>
                        <tr>
                            <th>Gender</th>
                            <td>Male</td>
                            <th> Mother Name</th>
                            <td>Durga Devi</td>
                        </tr>
                        <tr>
                            <th>Category</th>
                            <td>GEN</td>
                            <th>Domicile </th>
                            <td>ALL INDIA</td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>26/f chack bhatai naini allahabad uttar pradesh</td>
                            <th> Contact No.</th>
                            <td>8052056711</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>bipinsingh8052@gmail.com</td>
                            <th> Abc Id</th>
                            <td>42324723832</td>
                        </tr>
                        <tr>
                            <th>course </th>
                            <td>BACHELOR OF ENGINEERING </td>
                            <th> Secialization</th>
                            <td>B.E IN Computer Science &Engineering</td>
                        </tr>
                        <TR>
                            <th>Institute Name</th>
                            <td>Vedica Institute of Technology</td>
                        </TR>
                        
                    </table>
                </div>
            `;
     
    allFile.innerHTML=information;  
    // console.log(allFile);

})

async function data_display(){
    // console.log("nakjcn")
    let fet =await fetch("http://localhost:3000/STUDENT");
    let dat= await fet.json();
    let all_data_info = dat.map((v)=>{
        return `
         <tr>
            <td>${v.id}</td>
            <td>${v.name}</td>
            <td>${v.RollNo}</td>
            <td>${v.bookName}</td>
            <td>${v.Writer}</td>
            <td>${v.date}</td>
            <td>${v.CollegeName}</td>
        </tr>
        ` 
    }).join("")
    let allFile=document.querySelector(".all_file");
    // console.log(allFile);
    // console.log(all_data_info)

    let information =`<div class="bookdetails">
        <table>
            <tr>
                <th>Id</th>
                <th>Student Name</th>
                <th>Roll No:</th>
                <th>Book Name</th>
                <th>Author Name</th>
                <th>Issue Date</th>
                <th>College Name</th>
            </tr>
            ${all_data_info}
        </table>
    </div>`;

     allFile.innerHTML=information; 

    // console.log(information)
}



// b.addEventListener("click",data_display
    // ()=>{
    // let allFile=document.querySelector(".all_file");
    // // console.log(allFile);
    // let apidata=data_display();
    // console.log(apidata)
    // let information =`<div class="bookdetails">
    //                 <table>
    //                     <tr>
    //                         <th>Id</th>
    //                         <th>Student Name</th>
    //                         <th>Roll No:</th>
    //                         <th>Book Name</th>
    //                         <th>Author Name</th>
    //                         <th>Issue Date</th>
    //                         <th>College Name</th>
    //                     </tr>
    //                     ${apidata}
    //                 </table>
    //              </div>`;
    // allFile.innerHTML=information; 
    // console.log(allFile) 
    // let all_data =api();
    // console.log(all_data)  
//     data_display()
       
// }
// )






async function edit_Delete(){
    // console.log("abcnjd");
    let fet =await fetch("http://localhost:3000/STUDENT");
    let dat= await fet.json();
    // console.log(dat);
    let all_Data_info = dat.map((v)=>{
        return `
         <tr>
            <td>${v.id}</td>
            <td>${v.name}</td>
            <td>${v.RollNo}</td>
            <td>${v.bookName}</td>
            <td>${v.Writer}</td>
            <td>${v.date}</td>
            <td>${v.CollegeName}</td>
            <td onclick="edit_data('${v.id}')"><button> Re_Issue </button></td>
            <td onclick="delete_data('${v.id}' ,'${v.name}')"><button> Submited </button></td>
        </tr>
        ` 
    }).join("")

    let allFile=document.querySelector(".all_file");
    let information =`<div class="bookdetails">
        <table>
            <tr>
                <th>Id</th>
                <th>Student Name</th>
                <th>Roll No:</th>
                <th>Book Name</th>
                <th>Author Name</th>
                <th>Issue Date</th>
                <th>College Name</th>
            </tr>
            ${all_Data_info}
        </table>
    </div>`;

     allFile.innerHTML=information; 

    // console.log(all_Data_info);
}

async function edit_data(id){

   closebtn();
   let find=id;
   let fet =await fetch(`http://localhost:3000/STUDENT/${id}`);
    let dat= await fet.json();
    console.log(dat)

    let name =document.querySelector(".from .edit_student_name input").value=dat.name;
    let rollNo =document.querySelector(".from .edit_Roll_no input").value=dat.RollNo;
    let idinfo =document.querySelector(".from .id input").value=find;
    let bookname=document.querySelector(".from .edit_Book_name input").value=dat.bookName;
    let writer=document.querySelector(".from .edit_authorname input").value=dat.Writer;
    let colloge=document.querySelector(".from .edit_collogename input").value=dat.CollegeName;
    let date=document.querySelector(".from .edit_date input").value=dat.date;
    
console.log(name,rollNo,idinfo,bookname,writer,colloge,date)

}
function closebtn(){
    let i=1
    if(i===1){
    let show =document.querySelector(".show");
    show.style.display="none"; 
    i=0;
    }
    else{
        let show =document.querySelector(".show");
    show.style.display="block"; 
    i=1;

    }  
}



function delete_data(id,name){
    console.log(id)
    let userName=name;
    console.log(userName)
    let yes=window.confirm(`${userName} is Submited a Book Or Not If Submited Click OK OtherWise Cancel `);
    if(yes){
    fetch(`http://localhost:3000/STUDENT/${id}`,{
        method:'DELETE'
    })
    .then(re=>{return alert(`${userName} is Submited the Book sucessfully...!!`)});
    }
    else{
        window.alert(`Invalid ${userName} is not Submit by the Book..!!!!`)
    }
}






// c.addEventListener("click",()=>{
//     let allFile=document.querySelector(".all_file");
//     console.log(allFile);
//     let information =` <div class="issue_book">
//                     <table>
//                         <tr>
//                             <th>Id</th>
//                             <th>Student_Name</th>
//                             <th>Roll_No:</th>
//                             <th>Book_Name</th>
//                             <th>Author_Name</th>
//                             <th>Issue_Date</th>
//                             <th>College_Name</th>
                           
//                         </tr>
//                         <tr>
//                             <td>Id</td>
//                             <td>Student Name</td>
//                             <td>Roll No:</td>
//                             <td>Book Name</td>
//                             <td>Author Name</td>
//                             <td>Issue Date</td>
//                             <td>College Name</td>
//                             <td><button> Re_Issue </button></td>
//                             <td><button> Submited </button></td>
//                         </tr>
//                         <tr>
//                             <td>Id</td>
//                             <td>Student Name</td>
//                             <td>Roll No:</td>
//                             <td>Book Name</td>
//                             <td>Author Name</td>
//                             <td>Issue Date</td>
//                             <td>College Name</td>
//                             <td>Issue Date</td>
//                             <td>College Name</td>
//                         </tr>
//                         <tr>
//                             <td>Id</td>
//                             <td>Student Name</td>
//                             <td>Roll No:</td>
//                             <td>Book Name</td>
//                             <td>Author Name</td>
//                             <td>Issue Date</td>
//                             <td>College Name</td>
//                         </tr>
//                         <tr>
//                             <td>Id</td>
//                             <td>Student Name</td>
//                             <td>Roll No:</td>
//                             <td>Book Name</td>
//                             <td>Author Name</td>
//                             <td>Issue Date</td>
//                             <td>College Name</td>
//                         </tr>
//                     </table>
//                  </div>`;
//     allFile.innerHTML=information; 
//     console.log(allFile)          

// })

function Insert_data(){
    let allFile=document.querySelector(".all_file");
    console.log(allFile);
    let information =` <div class="library_insert">
                    <div class="heading">
                        <p> Insert the Issue Book Detail From The Student </p>
                    </div>
                    <form action="#">
                        <div class="main_from">
                            <div class="student_name">
                                <label for="name">Student Name :</label>
                                 <input type="text"  placeholder="Enter the Name">
                            </div>
                            <div class="Roll_no">
                                <label for="Rollno">Roll Number :</label>
                                <input type="text"  placeholder="Enter the Roll Number">
                            </div>
    
                            <div class="email_id">
                                <label for="Email">Student Email Id :</label>
                            <input type="email"  placeholder="Enter the Student Email id"> 
                            </div>
    
                            <div class="Book_name">
                                <label for="bookname">Book Name :</label>
                                <input type="text"  placeholder="Enter the Book Name">
                            </div>
                            <div class="authorname">
                                <label for="Writername"> Book Author Name :</label>
                                <input type="text" placeholder="Enter the book Author Name">
                            </div>
                            <div class="collogename">
                                <label for="collegename">Colloge Name :</label>
                                <input type="text"  placeholder="Enter the College_Name">
                            </div>
    
                            <div class="date">
                                <label for="date">Current Date :</label>
                            <input type="date"  placeholder="Enter the Date">
                            </div>
                        </div>

                        <button onclick="data_insert_button()" type="submit"> Submited</button>
                    </form>
                 </div>`;
    allFile.innerHTML=information; 
}

function data_insert_button(){
    let name =document.querySelector(".main_from .student_name input");
    let rollNo =document.querySelector(".main_from .Roll_no input");
    let email =document.querySelector(".main_from .email_id input");
    let bookname=document.querySelector(".main_from .Book_name input");
    let writer=document.querySelector(".main_from .authorname input");
    let colloge=document.querySelector(".main_from .collogename input");
    let date=document.querySelector(".main_from .date input");
    if( name.value=="" )
        {

            window.alert("You not Fill student Name  Please Fill it !!!");
            // console.log("erroe" ,name)
            name.focus();
    
        }
    else if( rollNo.value=="" )
        {

            window.alert("You not Fill student Roll No Please Fill it !!!");
            // console.log("erroe",rollNo)
            rollNo.focus();
    
        }
        else if( email.value=="" )
            {
    
                window.alert("You not Fill student Email ID  Please Fill it !!!");
                // console.log("erroe",rollNo)
                email.focus();
        
            }
    else if( bookname.value =="" ) 
        {

            window.alert("You not Fill Book Name  Please Fill it !!!");
            // console.log("erroe",bookname)
            bookname.focus()
    
        }
    else if( writer.value == "") 
        {

            window.alert("You not Fill Book Writer Name Please Fill it !!!");
            // console.log("erroe",writer)
            writer.focus()
    
        }
    else if( colloge.value == "" )
        {

            window.alert("You not Fill Colloge Name Please Fill it !!!");
            // console.log("erroe",colloge)
            colloge.focus()
    
        }
    else if( date.value==""){

        window.alert("You not Fill Date Please Fill it !!!");
        // console.log("erroe",date)
        date.focus()

    }
    else
    {
        let obj={
            "name":name.value,
            "RollNo":rollNo.value,
            "email":email.value,
            "bookName":bookname.value,
            "Writer":writer.value,
            "CollegeName":colloge.value,
            "date":date.value
        }
        // console.log(obj);
        let yes=window.confirm("You can Submit the Data click Ok otherwise click Cancel")
        if(yes){
            fetch(`http://localhost:3000/STUDENT/`,{
                method:"POST",
                body : JSON.stringify(obj)
            })
            .then(re=>{return window.alert(`${name.value} your Book  is Issue sucessfully...!!`)})
        }
        name.value=""
        rollNo.value=""
        email.value=""
        bookname.value=""
        writer.value=""
        colloge.value=""
        date.value=""
        // console.log("suucjanj")
        
    }
  
}






// d.addEventListener("click",()=>{
//     let allFile=document.querySelector(".all_file");
//     console.log(allFile);
//     let information =` <div class="library_insert">
//                     <div class="heading">
//                         <p> Insert the Issue Book Detail From The Student </p>
//                     </div>
//                     <form action="#">
//                         <div class="main_from">
//                             <div class="student_name">
//                                 <label for="name">Student Name :</label>
//                                  <input type="text" required placeholder="Enter the Name">
//                             </div>
//                             <div class="Roll_no">
//                                 <label for="Rollno">Roll Number :</label>
//                                 <input type="text" required placeholder="Enter the Roll Number">
//                             </div>
    
//                             <div class="email_id">
//                                 <label for="Email">Student Email Id :</label>
//                             <input type="email" required placeholder="Enter the Student Email id"> 
//                             </div>
    
//                             <div class="Book_name">
//                                 <label for="bookname">Book Name :</label>
//                                 <input type="text" required placeholder="Enter the Book Name">
//                             </div>
//                             <div class="authorname">
//                                 <label for="Writername"> Book Author Name :</label>
//                                 <input type="text" placeholder="Enter the book Author Name">
//                             </div>
//                             <div class="collogename">
//                                 <label for="collegename">Colloge Name :</label>
//                                 <input type="text" required placeholder="Enter the College_Name">
//                             </div>
    
//                             <div class="date">
//                                 <label for="date">Current Date :</label>
//                             <input type="date" required placeholder="Enter the Date">
//                             </div>
//                         </div>

//                         <button type="submit"> Submited</button>
//                     </form>
//                  </div>`;
//     allFile.innerHTML=information; 
//     console.log(allFile)          

// })





