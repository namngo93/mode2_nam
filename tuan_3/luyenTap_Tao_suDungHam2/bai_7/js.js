let a = +prompt('Số thứ nhất');
let b = +prompt(' Số thứ hai');
function add (a,b){
    let c = a;
    a = b;
    b =c;
    alert( a  + '' + b);
}
add(a,b)