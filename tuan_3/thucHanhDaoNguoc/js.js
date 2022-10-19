let x = [-3,5,1,3,2,10];
let first = 0;             //Biến để duyệt từ phần tử đầu tiên trong mảng
let last = x.length -1;    // biến để phần tử cuối cùng trong mảng
while (first <last){
    let b = x[first];
    x[first] = x[last];
    x[last] = b;
    first++;
    last--;
}
document.write(x);