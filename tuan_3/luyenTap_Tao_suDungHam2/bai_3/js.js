let a = +prompt('Nhập số giai thừa: ')
function add(n){
    if(n===1){
        return 1;
    }
    else {
       return n * add(n-1)
    }
}
alert('Kết quả là: ' + add(a))