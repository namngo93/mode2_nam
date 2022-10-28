function nhap(){
let a = document.getElementById('tentk').value;
let b = document.getElementById('pass').value;
let c = 'admin';
let d = 'admin';

    if (a == c && b == d){
        alert('Bạn đăng nhập thành công');
        window.location.assign('http://localhost:63342/untitled/bai_QuanLy/trangChu/index.html?_ijt=cm1c5vcmoa113rhcalpq2d8l68&_ij_reload=RELOAD_ON_SAVE')
    } else {
        alert( 'Bạn đăng nhập sai tài khoản');
    }

}