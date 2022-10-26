let r = +prompt('Nhập bán kính hình tròn: ');
function hinhtron(r){
     let c = (r * 2)* 3.14;
     let s = r*r*3.14;
    document.write('Chu vi hình tròn = '+ c  + '<br>' + "Diện tích hình tròn là: " +s)
}
        hinhtron(r);