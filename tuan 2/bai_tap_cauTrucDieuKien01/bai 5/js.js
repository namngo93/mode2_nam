let a = +prompt('Điểm bài kiểm tra');
let b = +prompt('Điểm thi giữa kỳ');
let c = +prompt(' Điểm thi cuối kỳ');
let tb = (a + b + c) /3;
if (tb >= 8 ){
    document.getElementById('kq').innerHTML= ('<h3>Bạn xếp hạng premium </h3>');
}
else if (tb >= 5 && tb < 8 ) {
    document.getElementById('kq').innerHTML= ('<h2> Bạn xếp hạng luxury </h2> ' );
}
else
{
    document.getElementById('kq').innerHTML= ('<h1> Bạn nên nghỉ học </h1> '  );
}

