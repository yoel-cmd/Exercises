
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


function start(num,multi){
  return multi(num,sub)
}
function multi(num,sub){
   const res=num*2;
  return sub(res,div)
}
function sub(num,div){
   const res=num-5;
   return  div(res)
}
function div(num){
   return  num/10 ;
}
// const res=
console.log(start(5,multi));

