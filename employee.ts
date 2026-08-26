abstract class Employee{
    constructor(private name: string,protected exp:number){}
    abstract getBaseSalary():number;
    abstract getExpSalary():number;
    showProfile():void{console.log(`ชื่อ: ${this.name} ตำเเหน่ง: ${this.constructor.name} ประสบการณ์: ${this.exp} ปี`)}
}
class Programmer extends Employee{
    getBaseSalary(): number {
        return 25000;
    }
    getExpSalary(): number {
        return this.getBaseSalary()*0.1*this.exp;
    }
}
class Manager extends Employee{
    getBaseSalary(): number {
        return 50000;
    }
    getExpSalary(): number {
        return this.getBaseSalary()*0.12*this.exp;
    }
}

const emp:Employee[] =[
    new Programmer("Ammet",3),
    new Manager("Sonpon",2),
    new Programmer("Juloy",5)
]
emp.forEach(e => {
    e.showProfile();
    console.log(`ได้รับเงินเดือนเริ่มต้น ${e.getBaseSalary()} บาท เเละะได้ค่าประสบการณ์ ${e.getExpSalary()} บาท รวม ${e.getBaseSalary()+e.getExpSalary()} บาท`);
})