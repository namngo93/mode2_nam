function h1() {
    document.getElementById('dongy').innerHTML=(" I don't now, I think we don't match ")
}
function h2() {
    let x = Math.round(Math.random() * window.innerWidth);
    let y = Math.round(Math.random() * window.innerHeight);
    document.getElementById('btNo').style.left = x + 'px';
    document.getElementById('btNo').style.top = y + 'px';
}