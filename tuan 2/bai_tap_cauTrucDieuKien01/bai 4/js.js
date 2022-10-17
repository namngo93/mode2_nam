let a = +prompt('Nhập số bất kỳ')
let b = +prompt('Nhập số bất kỳ')
let c = +prompt('Nhập số bất kỳ')
if (a > b && a > c){
    document.getElementById('kq').innerHTML= ('Kết quả: ' + a + ' là số lớn nhất')
}
    else if (b > a && b > c) {
    document.getElementById('kq').innerHTML= ('Kết quả: ' + b + ' là số lớn nhất')
}
    else if (c > a && c > b)
{
    document.getElementById('kq').innerHTML = ('Kết quả: ' + c + ' là số lớn nhất')
}
    else
    {
        document.getElementById('kq').innerHTML = ('Kết quả: cả ba số bằng nhau')
    }