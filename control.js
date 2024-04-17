function result() {
    const x1 = document.querySelector("#x11");
    const x2 = document.querySelector("#x22");
    const x3 = document.querySelector("#x33");
    const x4 = document.querySelector("#x44");
    let s = 0;

    if (x1.checked) {
        s++;
    }
    if (x2.checked) {
        s++;
    }
    if (x3.checked) {
        s++;
    }
    if (x4.checked) {
        s++;
    }

    alert(`Your score is: ${s}`);
}
