let bongda = document.getElementById('bong');

function init() {
    bongda.style.position ='relative';
    bongda.style.left = '0px';
}
function moveRight() {
    bongda.style.left = parseInt(bongda.style.left) + 10 + 'px';
}
window.onload = init;