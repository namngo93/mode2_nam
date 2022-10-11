inputBanKinh = prompt('Bán kính hình tròn: ');
let BanKinh = parseInt(inputBanKinh);
let S = 3.14 * (2 ** BanKinh)
let C = (2 * BanKinh) * 3.14
document.write('Diện tích của hình tròn = ' + S);
document.write('(Đơn vị)');
document.write('<br/>');
document.write('Chu vi hình tròn = ' + C);
document.write('(Đơn vị)');