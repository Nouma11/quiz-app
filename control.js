function result() {
    const x1 = document.querySelector("#x1");
    const x2 = document.querySelector("#x2");
    const x3 = document.querySelector("#x3");
    const x4 = document.querySelector("#x4");
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
