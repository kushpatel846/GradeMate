function calculateGrade() {
let marks = document.getElementById("marks").value;
let result = "";

if (marks >= 90) {
    result = "Grade A 🟢";
}
else if (marks >= 75) {
    result = "Grade B 🔵";
}
else if (marks >= 50) {
    result = "Grade C 🟡";
}
else {
    result = "Fail 🔴";
}

document.getElementById("result").innerText = result;
}
