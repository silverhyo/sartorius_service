const content01 = "EXSIM?";
const content02 = "안녕하세요? 싸토리우스 입니다. 저희가 제공해 드리고 있는 service 중 EXSIM에 대해서 안내를 드리고자 합니다. 많은 관심 부탁 드리겠습니다."
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



