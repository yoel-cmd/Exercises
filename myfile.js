
// const age =29;
// console.log(age)
// console.log(typeof age)


// const name =`yoel`;
// console.log(`my name is ${name}`)
// console.log(typeof name)


// const address =`migdal Haemeq`
// console.log(`address ==> ${address}`)
// console.log(typeof address)


// const vegan=false;
// console.log(` are you vegan => ${vegan}`)
// console.log(typeof vegan)

// const num_of_kids=4;
// console.log(` num of kids => ${num_of_kids}`)
// console.log(typeof num_of_kids)

// const res =true / 0;

// res=5+`dd`;
// console.log(res)


// res=true-15;
// console.log(res)

// console.log(undefined * 2);

// console.log(res / null)
// console.log (5 < `ishfhsfghai`);



// console.log(0 || false);


// const num= 234;
// if(num < 120){
//     console.log(`not`)
// }else if(num ===233){
//     console.log(`ok`)
// }else{
//     console.log(`non`)
// }

// const msg = num === 234 ? `yes`:`no`;


// const age =13;
// const height =120;
// const somOfManager=true;

// if(somOfManager === true){
//     console.log(`welcome`)
// }else if(age < 15){
//     console.log(`get out `)
// }else if(age > 15 && hige < 110){
//     console.log(`go to kids ride`)          
// }else if ({
//     console.log(` go to on rollercoaster`)
// }


// let num= 0;
// while(num < 101){

//     console.log(num)
//     num++;
// }

// for(let i=0;i<=50;i+=3){
//     console.log(i)
// }

// const num= 1234;

// let sum= num+"";
// let zz =" ";
// for(let i =sum.length;i>=0;i--)
//     zz+=sum[i];
// console.log(typeof zz)

// const array =[];

// array.unshift(1);

// array.push(10);
// array.splice(1,0,true,`q`);
// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
// }
// array.shift();

// array.pop();

// const key ='kese'



// const person={};
// person[key]=`yoel`;
// console.log(person);



// const num=array.shift();
// const num2=array.pop();

// // console.log(num);
// const bool=array.splice(1,1);

// array.unshift("zz");



// const person={}
// person.name=`yoel`;
// person.age=29;
// person.hobbies=['gaming','food','cooking'];
// person.favFood=['chiken','meet','rise'];
// console.log(person.name,person.age);

// let hobbie='';
// for(let x of person.hobbies){
//    hobbie += x+" ";
// }
// console.log(hobbie);

// let favFo='';
// for(let y of person.favFood){
//    favFo+=y+" ";
// }
// console.log(favFo);




// function uppercace(name){
//    return name.toUpperCase();
// }

// function birthday(age){
//    return 2025-age;
// }

// console.log(uppercace(`yoel`));
// console.log(birthday(1995));


// const add=(x,y)=>{
//    return x+y
// }
// const sub=(x,y)=>{
//    return x-y
// }
// const multy=(x,y)=>{
//    return x*y
// }
// const div=(x,y)=>{
//    return x/y
// }

// console.log(add(2,3));
// console.log(sub(2,3));
// console.log(multy(2,3));
// console.log(div(2,3));

// function seyHi(){
//    console.log(`hi`);
// }

// function logger(fn) {
//    console.log(`start`);
//    fn()
//    console.log(`end`);
// }

// logger(seyHi);


// function start(num,multi){
//   return multi(num,sub)
// }
// function multi(num,sub){
//    const res=num*2;
//   return sub(res,div)
// }
// function sub(num,div){
//    const res=num-5;
//    return  div(res)
// }
// function div(num){
//    return  num/10 ;
// }
// // const res=
// console.log(start(5,multi));


//  let i=0;
// function factorialSpell (name) {
//    i++;
//   let level=i;
//    return  ()=>{return `name: ${name} level: ${level}`};
// }

//  const res=factorialSpell("fireball");
//  console.log(res());

//  const res2=factorialSpell('fireball2')
//  console.log(res());
//  console.log(res());
//  console.log(res2());
 
//  const res3=factorialSpell('adFireball');
//  console.log(res());
//  console.log(res2());
//  console.log(res3());







/**
 * 1. CREATE a function factory => function that returns a function - V
 * 2. factory gets spell name - V
 * 3. inner function prints this name - V
 * 4. inner function prints power level - V
 * 5. each factory use - add 1 to power - V
 * 6. inner function should print the power when it was created 
 */
// let power = 0;
// function spellFactory(spellName){
//     power++;
//     let level= power;    
//     const fn = ()=>{
//         console.log(`spell name: ${spellName}, power: ${level}`)
       
//     }
//     return fn;
// }

// const spell1 = spellFactory("fire") // power new 1
// spell1(); // spell name fire, power: 1
// const spell2 = spellFactory("ice") // power new 2
// spell2(); // spell name ice, power: 2
// spell1();  // spell name fire, power: 1


// function Book(author,category,numOfPages){
//         this.author=author;
//         this.category=category;
//         this.numOfPages=numOfPages;
//         this.showDitails=function(){
//             console.log(`The auter : ${author}` );
//             console.log(`The category : ${category}` );
//             console.log(`number of pages : ${numOfPages}` ); 
//         }
// }
// const res = new Book('yoel', 'terror', 212);

// res.showDitails();

// function 
//brand,drive(),feul()
// function Car(brand){
//     this.brand=brand;
//     this.drive=function(){
//         console.log('wrom ,wrom');    
//     }
//     this.fual=function(){
//         console.log(`fual`);  
//     }
// }
// function Tesla(){
//     this.idBattry=true;
// }

// const res1= new Car();
// // res1.drive()
// // res1.fual()

// const res= new Tesla();


// // Object.setPrototypeOf(Tesla,Car);
// Object.setPrototypeOf(res,res1);

// res.drive();
// res.fual();


function Animal(name){
    this.name= name;
    this.makeSound=function(){
        console.log('voice');      
    }
}

function Cat(name){
    this.name=name
    this.makeSound=function(){
        console.log('miau');
        
    }
}

function Dog(name){
    this.name=name
    this.makeSound=function(){
        console.log('hav hav')
        
    }
}

const animal=new Animal('myau');
const dog=new Dog('myau');
const cat=new Cat('myau');

Object.setPrototypeOf(dog,animal)
Object.setPrototypeOf(cat,animal)

dog.makeSound();
// a.makeSound();
cat.makeSound();






