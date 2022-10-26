
function add(a,b){
    if (a > b){
        alert('Số' + a + 'lớn hơn' + b)
    }
    else {
        let c = a + b
        alert('Tông = ' + c)
    }
}
add(a = +prompt("Nhập số thứ nhất:  "),b = +prompt("Nhập số thứ hai: "))