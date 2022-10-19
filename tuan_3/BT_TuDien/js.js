const eng = ['apple', 'banana', 'orange', 'grape', 'coconut', 'peach']
const vn = ['Quả táo', 'Quả chuối', 'Quả cam', 'Quả nho', 'Quả dừa', 'Quả đào']
let flag = 0;
function Click() {
    let val = document.getElementById("nhap").value;
    for (let i = 0; i < eng.length; i++) {
        flag = 0;
        if (eng[i] === val) {
            val = vn[i];
            flag = 1;
            break;
        }
    }
    if (flag === 1) {
        document.getElementById("thongtin").innerHTML = val;
    } else document.getElementById("thongtin").innerHTML = 'Không tìm thấy';
}