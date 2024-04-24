document.addEventListener("DOMContentLoaded", function() {
    let mm = document.querySelector(".mm");
    mm.addEventListener("click", function() {
        mm.innerHTML = "y3tek ma y3tek";
    });
});

function result() {
    let x1 = document.getElementsByName("q2");
    let x2 = document.getElementsByName("q3");
    let x3 = document.getElementsByName("q4");
    let x4 = document.getElementsByName("q5");
    let x5 = document.getElementsByName("q6");

    let s = 0;

    if (!(x1[0].checked || x1[1].checked || x1[2].checked || x1[3].checked)) {
        alert("Select the answer for the second question");
    }
    if (!(x2[0].checked || x3[1].checked || x2[2].checked || x2[3].checked)) {
        alert("Select the answer for the third question");
    }
    if (!(x3[0].checked || x3[1].checked || x3[2].checked || x3[3].checked)) {
        alert("Select the answer for the fourth question");
    }
    if (!(x4[0].checked || x4[1].checked || x4[2].checked || x4[3].checked)) {
        alert("Select the answer for the fifth question");
    }
    if (!(x5[0].checked || x5[1].checked || x5[2].checked || x5[3].checked)) {
        alert("Select the answer for the sixth question");
    }

    if (x1[0].checked) {
        s++;
    }
    if (x2[0].checked) {
        s++;
    }
    if (x3[0].checked) {
        s++;
    }
    if (x4[0].checked) {
        s++;
    }
    if (x5[0].checked) {
        s++;
    }
    alert(`You have ${s}/5`);
}
