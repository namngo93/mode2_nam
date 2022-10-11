function add(){
    let number1 = +document.getElementById('number1').value;
    let number2 = +document.getElementById('number2').value;
    let kq = number1 + number2;
    document.getElementById('kq').innerHTML = '<h1>' + kq
}