// //------------ex1--------------
// const arr1=[2,3,4,5,6,7,8,9,10];

// // function doubleValues(num){
// //     return num*2;
// // }

// const res1=arr1.map((num)=>{return num*2});
// console.log(res1);

// //------------ex2--------------
// const arr2=[2,3,4,5,6,7,8,9,10]

// function onlyEvenValues(num){
//         if(num%2===0)
//             res2.push(num) ;

// }
// const res2=[];
// arr2.map(onlyEvenValues);
// console.log(res2);

// //------------ex3----------------

// const mixedArray = ["first", 42, true, "middle", null, "last"];

//     let newArr=[];

// function showFirstAndLast(arr){
//     if(typeof arr[0]===`string`){
//     newArr.push(arr.shift())
//     }
//     if(typeof arr[arr.length-1]===`string`){
//     newArr.push(arr.pop())
//     }
//     return newArr;
// }
// console.log(showFirstAndLast(mixedArray));

// //------------------ex4-------------

// const exampleString = "This is a simple example to count vowels.";

// let counts = {
//   a: 0,
//   e: 0,
//   i: 0,
//   o: 0,
//   u: 0
// }
// const lowerExampleString =exampleString.toLowerCase();
// let letters=lowerExampleString.split('');
// letters.forEach((ch)=>{
//     if(ch in counts){
//         counts[ch]++;
//     }
// })

// console.log(counts);

// //---------------ex5------------------------

// const str = "Programming is awesome and full of opportunities!";

// function fn(str){
//     const arrLettr=str.split('');
//     const arrUpper=arrLettr.map((ch)=>{return ch.toUpperCase()})
//     const newStrUpper=arrUpper.join('');
//     return(newStrUpper)
// }

// console.log(fn(str));

// //----------------------ex6-------------------------------
// const strr = "Zoo is fun!";

// function shiftLetters (str){ 
//     const arrStr=str.split('');
//     const arrUpper=arrStr.map((ch)=>{
//         let accii=0
//         let nCh=''
//         if(ch==='z'){
//            return 'a'
//         }
//         if(ch==='Z'){
//           return 'A'
//         }
//         if(ch >='a' && ch<='y'|| ch >='A' && ch<='Y'){
//             accii= ch.charCodeAt() +1
//             nCh=String.fromCharCode(accii)
//             return nCh
//         }
//         else{
//             return ch
//         }  
//     })
//     const newStrUpper=arrUpper.join('')
//     return newStrUpper
// }
//  console.log(shiftLetters(strr))

//-------------------ex7------------------
const str1 = "this is a simple test"



function swapCase(str) {
    const arrStr = str.split(' ');
    arrStr.forEach((val, index) => {
        if (index % 2 != 0)
            arrStr[index] = val.toUpperCase();
    });
    const strUper = arrStr.join(' ')
    return strUper
}
console.log(swapCase(str1));




