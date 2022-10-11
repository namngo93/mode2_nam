function showMessage(){

    let so = document.getElementById('dauvao').value;
    let select1 = document.getElementById('select1').value;
    let select2 = document.getElementById('select2').value;
    let kq ;

    if (select1 == "a" && select2 == "b")
    {
      kq =  (so / 24000);

    }
    else if (select1 == "b" && select2 == "a")
    {
      kq =  (so * 24000);
    }
   document.getElementById('kq').innerHTML = 'Kết quả = ' + kq

}

