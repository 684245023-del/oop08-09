class Animal{
    constructor(public name: string){}
    makesound():void{
        console.log(`${this.name} make sound`);
    }
}
class Cat extends Animal{

}
const animal =new Animal("Dog");
animal.makesound();