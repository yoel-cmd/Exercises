//-----------------ex1------------------
function Phone(brand,model){
    this.brand=brand;
    this.model=model;
    this.details=function(){
        console.log(`Phone :${brand} ${model}`);
        console.log();
    }
}
const phone=new Phone('Samsung','S22')
phone.details();
//-----------------ex2------------------
function Rectangle(width,height){
    this.width=width;
    this.height=height;
    this.area=function(){
        console.log(`The area is : ${ width * height}`);
    }
}
const rectangle=new Rectangle(5,4);
rectangle.area();

//-----------------ex3------------------

function BankAccount(owner,balance){
    this.owner=owner;
    this.balance=balance;
    this.deposit=function(amount){
        balance+=amount;
        this.checkBalance();
    }
    this.withdraw=function(amount){
         balance-=amount;
         this.checkBalance();
    }
    this.checkBalance=function(){
        console.log(`current balance : ${balance}`);
    }
}

const bankAccount=new BankAccount('yoel',1000);
bankAccount.deposit(500);
bankAccount.withdraw(200)
bankAccount.checkBalance();

//-----------------ex4------------------
function Animal(name){
        this.name=name;
        this.speak=function(){
            console.log(`${this.name} makes a sound `);
            
        }
}
function Dog(name){
    this.name=name;
    this.bark=function(){
        console.log(`${name} barks`);    
    }
}
const animal=new Animal('animal');
const dog= new Dog('Rocky');
Object.setPrototypeOf(dog,animal);
dog.speak();
dog.bark();

//-----------------ex5------------------
function Vehicle(type){
        this.type=type;
        this.describe=function(){
            console.log(`This is a ${type} `);
            
        }
}
function Car(brand){
    this.brand=brand;
    this.info=function(){
        console.log(`This is a  ${brand} ${this.type} `);    
    }
}

const vehicle=new Vehicle('car');
const car= new Car('BMW');
Object.setPrototypeOf(car,vehicle);
vehicle.describe();
car.info()


//-----------------ex6------------------
function Shape(){
    this.area=function(){
        console.log(0);    
        }
}

function Circle(radius){
     this.area=function(){
        console.log(Math.PI * (radius*radius));    
        }
}
function Square(side){
    this.area=function(){
        console.log(side*side);    
        }
}

const shape=new Shape();
const circle= new Circle(3);
const square= new Square(4);
Object.setPrototypeOf(circle,shape);
Object.setPrototypeOf(square,shape);

circle.area();
square.area()



//-----classes-----ex7----classes-------------

class Book{
    constructor(title, author){
        this.title=title;
        this.author=author;
    }
    info(){
        console.log(`${this.title} by ${this.author}`);   
    }
}
const book=new Book('The Hobbit',`Tolkien`);
book.info();
//-----classes-----ex8----classes-------------

class Person{
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log(`Hello, i'm ${this.name}`);
    }
}
class Student extends Person {
    constructor(name,shcool){
        super(); 
        this.name=name;
        this.shcool=shcool;
    }
    study() {
        console.log(`${this.name} is studying at ${this.shcool}`);   
    } 
}
const student=new Student('alice','Oxford');
student.greet();
student.study();


//-----classes-----ex9----classes-------------

class Emploee{
    #salary;
    constructor(salary){
        this.#salary=salary;
    }
    getSalary(){
        console.log(this.#salary);   
    }
    work(){
    console.log('Employee is working');
    }
}
class Meneger extends Emploee{
    constructor(salary){
        super(salary);
    }
    work(){
        console.log('Manager is managing');  
    }
}
const emploee=new Emploee(4000)
emploee.getSalary();
emploee.work();
const meneger=new Meneger(5000)
meneger.getSalary();
meneger.work();

