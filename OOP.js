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



//-----------------ex5------------------



//-----------------ex6------------------



//-----------------ex7------------------


//-----------------ex8------------------

//-----------------ex9------------------


