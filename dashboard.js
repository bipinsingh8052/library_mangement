console.log("bipin singh");
let a =document.querySelector("#das1");
let b =document.querySelector("#student2");
let c =document.querySelector("#issue3");
let d =document.querySelector("#insert4");
let e =document.querySelector("#setting5");
console.log(a,b,c,d,e);
a.addEventListener("click",()=>{
    let allFile=document.querySelector(".all_file");
    console.log(allFile);
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
    console.log(allFile);

})

b.addEventListener("click",()=>{
    let allFile=document.querySelector(".all_file");
    console.log(allFile);
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
                        <tr>
                            <td>Id</td>
                            <td>Student Name</td>
                            <td>Roll No:</td>
                            <td>Book Name</td>
                            <td>Author Name</td>
                            <td>Issue Date</td>
                            <td>College Name</td>
                        </tr>
                        <tr>
                            <td>Id</td>
                            <td>Student Name</td>
                            <td>Roll No:</td>
                            <td>Book Name</td>
                            <td>Author Name</td>
                            <td>Issue Date</td>
                            <td>College Name</td>
                        </tr>
                        <tr>
                            <td>Id</td>
                            <td>Student Name</td>
                            <td>Roll No:</td>
                            <td>Book Name</td>
                            <td>Author Name</td>
                            <td>Issue Date</td>
                            <td>College Name</td>
                        </tr>
                        <tr>
                            <td>Id</td>
                            <td>Student Name</td>
                            <td>Roll No:</td>
                            <td>Book Name</td>
                            <td>Author Name</td>
                            <td>Issue Date</td>
                            <td>College Name</td>
                        </tr>
                    </table>
                 </div>`;
    allFile.innerHTML=information; 
    console.log(allFile)          

})

c.addEventListener("click",()=>{
    let allFile=document.querySelector(".all_file");
    console.log(allFile);
    let information =` <div class="issue_book">
                    <table>
                        <tr>
                            <th>Id</th>
                            <th>Student_Name</th>
                            <th>Roll_No:</th>
                            <th>Book_Name</th>
                            <th>Author_Name</th>
                            <th>Issue_Date</th>
                            <th>College_Name</th>
                           
                        </tr>
                        <tr>
                            <td>Id</td>
                            <td>Student Name</td>
                            <td>Roll No:</td>
                            <td>Book Name</td>
                            <td>Author Name</td>
                            <td>Issue Date</td>
                            <td>College Name</td>
                            <td><button> Re_Issue </button></td>
                            <td><button> Submited </button></td>
                        </tr>
                        <tr>
                            <td>Id</td>
                            <td>Student Name</td>
                            <td>Roll No:</td>
                            <td>Book Name</td>
                            <td>Author Name</td>
                            <td>Issue Date</td>
                            <td>College Name</td>
                            <td>Issue Date</td>
                            <td>College Name</td>
                        </tr>
                        <tr>
                            <td>Id</td>
                            <td>Student Name</td>
                            <td>Roll No:</td>
                            <td>Book Name</td>
                            <td>Author Name</td>
                            <td>Issue Date</td>
                            <td>College Name</td>
                        </tr>
                        <tr>
                            <td>Id</td>
                            <td>Student Name</td>
                            <td>Roll No:</td>
                            <td>Book Name</td>
                            <td>Author Name</td>
                            <td>Issue Date</td>
                            <td>College Name</td>
                        </tr>
                    </table>
                 </div>`;
    allFile.innerHTML=information; 
    console.log(allFile)          

})



d.addEventListener("click",()=>{
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
                                 <input type="text" required placeholder="Enter the Name">
                            </div>
                            <div class="Roll_no">
                                <label for="Rollno">Roll Number :</label>
                                <input type="text" required placeholder="Enter the Roll Number">
                            </div>
    
                            <div class="email_id">
                                <label for="Email">Student Email Id :</label>
                            <input type="email" required placeholder="Enter the Student Email id"> 
                            </div>
    
                            <div class="Book_name">
                                <label for="bookname">Book Name :</label>
                                <input type="text" required placeholder="Enter the Book Name">
                            </div>
                            <div class="authorname">
                                <label for="Writername"> Book Author Name :</label>
                                <input type="text" placeholder="Enter the book Author Name">
                            </div>
                            <div class="collogename">
                                <label for="collegename">Colloge Name :</label>
                                <input type="text" required placeholder="Enter the College_Name">
                            </div>
    
                            <div class="date">
                                <label for="date">Current Date :</label>
                            <input type="date" required placeholder="Enter the Date">
                            </div>
                        </div>

                        <button type="submit"> Submited</button>
                    </form>
                 </div>`;
    allFile.innerHTML=information; 
    console.log(allFile)          

})


