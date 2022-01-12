//Mindula Dilthushan
//Ax Age Calculate

let current_date= document.getElementById("current_date");
let dateOfBirth = document.querySelector("#birthday");
const calculate_age= document.getElementById("calculate_age");
const content_div= document.getElementById("content_div");
const calculate_age_div= document.getElementById("calculate_age_div");
const Age= document.getElementById("cal_age");

var today = new Date();

current_date.innerText=`Today's Date is : ${today.toLocaleDateString('en-US')}`;

calculate_age.addEventListener("click",()=>{
    var birthDate = new Date(dateOfBirth.value);
    var cal_age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        cal_age = cal_age - 1;
    }
    content_div.style.display="none";
    calculate_age_div.style.display="block";
    Age.innerText=`You are ${cal_age} years old.`
});

