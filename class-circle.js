class Circle {
    constructor (radius = 1.0, color = "red" ){
        this.radius = radius;
        this.color = color;
    }
circle1(num1){
   this.radius = num1;
}
circle2(num2,col){
    this.radius = num2;
    this.color = col;
}
getRadius(){
    return this.radius;
}
getcolor(){
    return this.color;
}
setColor(colr){
    this.color = colr;

}
getArea(){
    let area = 3.14*this.radius*this.radius;
    return area;
}
getCircumfer(){
    let circum = 2*3.14*this.radius;
    return circum;
}
}

let circleA = new Circle(2,"red");


console.log(circleA.getRadius());
console.log(circleA.getcolor("orange"));
console.log(circleA.getCircumfer());
