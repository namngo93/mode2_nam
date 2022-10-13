
    let a = +prompt('Chiều cao');
    let b = +prompt('Cân nặng');
    let bmi = b / (a ^ 2);
    if (bmi < 18) {
        document.write('Bạn quá gầy' + '<br>' + 'Chỉ số:' + bmi);
    }
    else if (18 < bmi < 25) {
        document.write('Bạn bình thường' +'<br>' + 'Chỉ số:' + bmi);
    }
    else if (25 < bmi < 30) {
        document.write('Bạn thừa cân' + '<br>' + 'Chỉ số:' + bmi);
    }
    else {
        document.write('Bạn nên xem lại việc ăn uống của bản thân' + '<br>' + 'Chỉ số:' + bmi);
    }

