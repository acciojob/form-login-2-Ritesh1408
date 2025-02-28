document.getElementById('userForm').onsubmit = function (event) {
    event.preventDefault(); // Prevent actual form submission

    let fname = document.getElementById('f1').value;
    let lname = document.getElementById('l1').value;
    let phoneNum = document.getElementById('p1').value;
    let email = document.getElementById('e1').value;

    alert(`First Name: ${fname} Last Name: ${lname} Phone Number: ${phoneNum} Email ID: ${email}`);
};
