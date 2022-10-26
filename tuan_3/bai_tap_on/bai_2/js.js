let arr = [];
//1. Nhập số phần tử của mảng
let n = +prompt('Nhập số phần tử : ');
// 2. Nhập các phần tử của mảng
for (let i = 0; i < n; i++) {
    arr[i] = +prompt('Nhập các phần tử: ')
}
//3.In ra các phần tử của mảng
document.write('3/ In ra các phần tử: ' + '<br>');
for (let i = 0; i < n; i++) {
    document.write('Phần tử thứ ' + (i+1) + ' là ' + arr[i] + '<br>');
}
//4.Tính tổng các phần tử trong mảng
let sum = 0;
for (let i = 0; i < n; i++) {
    sum += arr[i];
}
document.write('4/ Tổng các phần tử: ' + sum + '<br>');
//5.Tính tổng các phần tử chia 5 dư 2 trong mảng
let sum5 = 0;
for (let i = 0; i < n; i++) {
    if (arr[i] % 5 === 2) sum5 += arr[i];
}
document.write('5/ Tổng các phần tử chia 5 dư 2: ' + sum5 + '<br>');
// 6. Đếm số phần tử chia hết cho 6
let k = 0;
for (let i = 0; i < n; i++) {
    if (arr[i] % 6 === 0) k++;
}
document.write('6/ Số phần tử chia hết cho 6: ' + k + '<br>');
//7.Tính TBC các phần tử > 10 và chia 4 dư 3
let sum7 = 0;
let j = 0;
for (let i = 0; i < n; i++) {
    if (arr[i] % 4 === 3 && arr[i] > 10) {
        sum7 += arr[i];
        j++;
    }
}
if (j > 0){
    let aver = sum7 / j;
    document.write('7/ TBC các phần tử > 10 và chia 4 dư 3: ' + aver + '<br>');
}
else document.write('7/ TBC các phần tử > 10 và chia 4 dư 3: 0'+ '<br>');
//8. Tìm max của mảng-----------------------------------------------------------------------------
let max = arr[0];
for (let i = 1; i < n; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
document.write('8/ Phần tử lớn nhất trong mảng: ' + max + '<br>');
//9. Tìm max của các số lẻ trong mảng------------------------------------------------------------
let maxodd;
for (let i = 0; i < n; i++) {
    if (arr[i] % 2 === 1) {
        maxodd = arr[i];
        break;
    }document.write('9/ Phần tử lẻ lớn nhất trong mảng: Không có' + '<br>');
}
for (let i = 0; i < n; i++) {
    if (arr[i] > maxodd && arr[i] % 2 === 1) {
        maxodd = arr[i];
    }
}
document.write('9/ Phần tử lẻ lớn nhất trong mảng: ' + maxodd + '<br>');

//10. Tìm vị trí của x--------------------------------------------------------------------

let x = +prompt('Nhập x:');
let flag = 0;
for (let i = 0; i < n; i++) {
    if (arr[i] === x) {
        document.write('10/ Phần tử x nằm ở vị trí ' + i + ' trong mảng ' + '<br>');
        flag = 1;
        break;
    }
}
if (flag === 0) document.write('10/ Phần tử x không nằm trong mảng ' + '<br>')