class Circle {
   x;
   y;
   radius;

    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    getRadius() {
        return this.radius
    }
    getArea(){
        return Math.PI * Math.pow(this.radius,2)
    }
}

let cir = new Circle(10,10,10)
console.log(cir.getArea() + " va ban kinh la :  "+cir.getRadius())
