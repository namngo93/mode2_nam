let index = 1;
function clickimg(){
    let imgs = ["../img/nhaTro1.jpg", "../img/nhaTro2.jpg", "../img/nhaTro3.jpg"];
    document.getElementById('img').src= imgs[index];
    index++;
    if(index > imgs.length - 1){
        index = 0;
    }

}