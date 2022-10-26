class Date {
    day;
    month;
    year;

    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    getDay() {
        return this.day;
    }

    getMonth() {
        return this.month;
    }

    getYear() {
        return this.year;
    }

    setDay(newDay) {
        this.day = newDay;
    }

    toString() {
        console.log("Hien thi : " + this.day + "/" + this.getMonth() + "/" + this.getYear());
    }
}

let tomorrow = new Date(25, 10, 2022);
console.log(tomorrow.getDay() + "/" + tomorrow.getMonth() + "/" + tomorrow.getYear())
// tomorrow.setDay(24);
// console.log("Ngay sau khi chinh sua : " + tomorrow.getDay() + "/" + tomorrow.getMonth() + "/" + tomorrow.getYear());
tomorrow.toString();