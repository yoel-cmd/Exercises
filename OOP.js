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



//-----------------ex4------------------



//-----------------ex5------------------



//-----------------ex6------------------



//-----------------ex7------------------


//-----------------ex8------------------

//-----------------ex9------------------


