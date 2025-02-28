let fname = document.getElementById('f1');
let lname = document.getElementById('l1');
let phoneNum = document.getElementById('p1');
let email = document.getElementById('e1');
let submit = document.getElementById('btn');

submit.onclick = function () {
    alert(`First Name: ${fname.value} Last Name: ${lname.value} Phone Number: ${phoneNum.value} Email ID: ${email.value}`);
};
