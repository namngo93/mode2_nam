let number = parseInt(prompt("Nhập số cần check "));

function isPrime(number){
    let count = 0; // đếm số ước của số đang check
    let isPrime = false;

    if (number == 0) {
        alert(number + " không là số nguyên tố")
    } else {
        for ( let i = 1; i <= number; i++) {
            if(number % i == 0) {
                count += 1;
            }
        }

        if (count ==2 ) {
            isPrime = true
        }

        if (isPrime) {
            alert(number + " là số nguyên tố")
        } else {
            alert (number + " không là số nguyên tố")
        }
    }
}
isPrime(number)