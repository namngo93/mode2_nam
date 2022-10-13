function add() {
let nhap =parseInt(document.getElementById('nhap').value);
    switch (nhap) {
        case 1:
            ketqua = 'Tháng 1 có 31 ngày'
            break;
        case 2:
            ketqua = 'Tháng 2 có 29 ngày'
            break;
        case 3:
            ketqua = 'Tháng 3 có 31 ngày'
            break;
        case 4:
            ketqua = 'Tháng 4 có 30 ngày'
            break;
        case 5:
            ketqua = 'Tháng 5 có 31 ngày'
            break;
        case 6:
            ketqua = 'Tháng 6 có 30 ngày'
            break;
        case 7:
            ketqua = 'Tháng 7 có 31 ngày'
            break;
        case 8:
            ketqua = 'Tháng 8 có 30 ngày'
            break;
        case 9:
            ketqua = 'Tháng 9 có 31 ngày'
            break;
        case 10:
            ketqua = 'Tháng 10 có 30 ngày'
            break;
        case 11:
            ketqua = 'Tháng 11 có 31 ngày'
            break;
        case 12:
            ketqua = 'Tháng 12 có 30 ngày'
            break;
         }
         document.getElementById('ketqua').innerHTML= ketqua
}
