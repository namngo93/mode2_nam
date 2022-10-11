let result = '';

function xuLyDuLieu(input) {
    let a = document.getElementById(input).value;
    result += a;
    document.getElementById('result').innerHTML = result;
}

function xuLyKetQua() {
    let ketQua = eval(result);
    document.getElementById('result').innerHTML = ketQua;
    result = ketQua;
}

function xoa() {
    document.getElementById('result').innerHTML = '0';
    result = '';
}