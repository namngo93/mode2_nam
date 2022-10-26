let a = +prompt('Nhập số a');
let b = +prompt('Nhập số b');
let c = +prompt('Nhập số c');
function add(a,b,c){
    // if (a<b && a<c){
    //     alert('Số '+ a +' là số có giá trị nhỏ nhất');
    // }else if (b<c && b<a){
    //     alert('Số '+ b +' là số có giá trị nhỏ nhất');
    // }else {
    //     alert('Số '+ c +' là số có giá trị nhỏ nhất');
    // }
    alert('Số '+ Math.min(a,b,c) +' là số có giá trị nhỏ nhất');
}
add(a,b,c);
