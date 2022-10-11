inputLy = prompt('Điểm Vật Lý: ');
inputHoa = prompt('Điểm Hóa Học: ');
inputSinh = prompt('Điểm Sinh Học: ');
let Ly = parseInt(inputLy);
let Hoa = parseInt(inputHoa);
let Sinh = parseInt(inputSinh);
let tong = Ly + Hoa + Sinh;
let tb = tong/3;
document.write('Tổng điểm: ' + tong);
document.write("<br/>");
document.write('Trung Bình: ' + tb);


