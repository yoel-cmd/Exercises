//------------ex1--------------

 const arr1=[2,3,4,5,6,7,8,9,10]

 function doubleValues(num){
     return num*2;
 }

 const res1=arr1.map(doubleValues);
 console.log(res1);

//------------ex2--------------
const arr2=[2,3,4,5,6,7,8,9,10]

function onlyEvenValues(num){
        if(num%2===0)
            res2.push(num) ;
        
}
const res2=[];
arr2.map(onlyEvenValues);
console.log(res2);

