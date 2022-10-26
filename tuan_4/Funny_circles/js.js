class Circle{
    x;
    y;
    radius;
    constructor(x,y,radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    getRadius(){
        return this.radius;
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
}

    function getRandomHex() {
        return Math.floor(Math.random() * 255);//khoảng mầu từ 0- 255
}
    function getRandomColor() {   //tạo màu
        let red = getRandomHex();
        let green = getRandomHex();
        let blue = getRandomHex();
        return "rgb(" + red + "," + blue + "," + green + ")";
    }

    function createCircle() {
        let ctx = document.getElementById("myCanvas").getContext("2d");
        let radius = Math.floor(Math.random() * 80); //tạo độ to nhỏ cho hình tròn
        let color = getRandomColor();
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let circle = new Circle(x, y, radius);
        ctx.beginPath();
        ctx.arc(circle.getX(), circle.getY(), circle.getRadius(), 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }

    for (let i = 0; i < 100; i++) {
       createCircle()
    }

