let body = document.querySelector("body")
let b = document.querySelector("#bulb")
let btn = document.getElementById("btn1")
let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
run = 0;
btn.addEventListener("click", function () {

    if (run == 0) {
        b.style.backgroundColor = "yellow";
        b.style.boxShadow = "2px 2px 20px 20px yellow";
        btn.innerHTML = "OFF";
        body.style.backgroundColor = "white";
        img1.style.display = "none";
        img2.style.display = "block";
        btn.style.backgroundColor ="salmon";
        run = 1;
    }
    else {
        b.style.backgroundColor = "black";
        b.style.boxShadow = "none";
        btn.innerHTML = "ON";
        img1.style.display = "block";
        img2.style.display = "none";
        body.style.backgroundColor = "black";
        btn.style.backgroundColor = "aqua";
        run = 0;
    }
})