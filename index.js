const content01 = "EXSIM?";
const content02 = ""
const text01 = document.querySelector(".textbox01");
const text02 = document.querySelector(".textbox02p");
let i = 0;
let z = 0;

function typing01() {
    if (i < content01.length) {
        let txt01 = content01.charAt(i);
        text01.innerHTML += txt01;
        i++;
    }
}
setInterval(typing01, 200);

function typing02() {
    if (z < content02.length) {
        let txt02 = content02.charAt(z);
        text02.innerHTML += txt02;
        z++;
    }
}
setTimeout(setInterval(typing02, 50), 0.5);
// setInterval(typing02, 50);



