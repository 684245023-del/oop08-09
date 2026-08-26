class Shape{
    draw():void{console.log("วาดรูป");}
    area():void{}
}
class Square extends Shape{
    constructor(public side:number){super()}
    draw():void{console.log("วาดสี่เหลี่ยมจัตุรัส");}
    area():void{console.log(`สี่เหลี่ยมจัตุรัสที่มีด้าน ${this.side} มีพื้นที่ ${Math.pow(this.side,2)}`);}
}
class Triangle extends Shape{
    constructor(public base:number,public hight:number){super()}
    draw():void{console.log("วาดสามเหลี่ยม");}
    area():void{console.log(`สามเหลี่ยมที่มีฐาน ${this.base} ความสูง ${this.hight} มีพื้นที่ ${this.base*this.hight /2}`);}
}
const shapes: Shape[] = [new Shape(), new Square(8),new Square(12),new Triangle(8,10),new Triangle(7,9)];
shapes.forEach(shape =>{
    shape.draw();
    shape.area();
})
