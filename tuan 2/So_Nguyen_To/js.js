function check(){
    let a = document.getElementById('nhap').value;
    let b ;
    for (let i = 2; i<a ;i++ )
    {
        b = a % i;
        if (b === 0) {
            alert(a + ' Không phải là số nguyên tố')
            break;
        }
    }
        if (b !== 0) {
            alert(a + ' Là số nguyên tố')
        }


}