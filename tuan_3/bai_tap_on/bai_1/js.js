function Checkhv(){
    let a = document.getElementById('nhapahv').value;
    console.log(a);
    let dientich = Math.pow(a,2);
    let chuvi = 4 * a;
    document.getElementById('dientichhv').innerHTML ="Diện tích = " + dientich;
    document.getElementById('chuvihv').innerHTML = 'Chu vi = ' + chuvi;
}
function Checkab(){
    let a = document.getElementById('nhapa').value;
    let b = document.getElementById('nhapb').value;
    let c = Math.pow(a,2);
    let d = Math.pow(a,b);
    document.getElementById('kqc').innerHTML ="Tính a^2 = " + c;
    document.getElementById('kqd').innerHTML = 'Tính a^b = ' + d;
}

function Checktong(){
    let a = +document.getElementById('nhapa1').value;
    let b = +document.getElementById('nhapb2').value;
    let c = 0
   for (let i = a; i <= b ;i++){
       c += i;
   }
    document.getElementById('kqtong1').innerHTML ="Kết quả = " + c;
}

function Checktheky(){
    let nam = +document.getElementById('nhapnam').value;
    theky = Math.ceil(nam / 100);
    document.getElementById("kqtheky").innerHTML = "Năm " + nam + " thuộc thế kỷ " + theky;
}

function Checktamgiac() {
    let a = +document.getElementById('nhapcanha').value;
    let b = +document.getElementById('nhapcanhb').value;
    let c = +document.getElementById('nhapcanhc').value;
    if (a === b && a === c ) {
        document.getElementById('kqtamgiac').innerHTML = "Tam giác này là tam giác đều";
    }
    else if ( a === b && a !== c){
        document.getElementById('kqtamgiac').innerHTML = "Tam giác này là tam giác cân";
    }
    else if ((a+b)>c && (a+c)>b && (b+c)>a){
        document.getElementById('kqtamgiac').innerHTML = "Tam giác này là tam giác bình thường ";
    }
    else {
        document.getElementById('kqtamgiac').innerHTML = "Không phải là tam giác ";
    }
}