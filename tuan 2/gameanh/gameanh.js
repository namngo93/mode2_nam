let a = 0;
let b = 0;
let c = 0;
let d = 0;
let img1= document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
function changeImg1() {
    let random = Math.floor(Math.random() * 4); // 0 -> 3
    console.log(random)
    a++;
    if(a > 3){
        a = 0;
    }
    img1.src = "./img/" + random + ".jpg"
    check();
}

function changeImg2() {

    b++;
    if(b > 3){
        b = 0;
    }
    img2.src = "./img/" + b + ".jpg"
    check();
}

function changeImg3() {
    c++;
    if(c > 3){
        c = 0;
    }
    img3.src = "./img/" + c + ".jpg"
    check()
}
function changeImg4() {
    d++;
    if(d > 3){
        d = 0;
    }
    img4.src = "./img/" + d + ".jpg"
    check()
}
function check() {
    // a = b  b = c -> a = c
    // if a == 1 && b == 1 && c == 1
    // else if a == 0 b == 0 c == 0
    // else if a == 2 b == 2 c == 2
    // else

    if (a === b && b === c ) {
        img1.style.boxShadow = 'red 4px 4px 9px';
        img2.style.boxShadow = 'red 4px 4px 9px';
        img3.style.boxShadow = 'red 4px 4px 9px';
        img4.style.boxShadow = 'red 4px 4px 9px';
    }else {
        img1.style.boxShadow = 'white 4px 4px 9px';
        img2.style.boxShadow = 'white 4px 4px 9px';
        img3.style.boxShadow = 'white 4px 4px 9px';
        img4.style.boxShadow = 'white 4px 4px 9px';
    }

}