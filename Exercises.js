
//----------------exe1-----------------------
// let a='ider';
// let b='yoel';
// b=b+" "+ a;
// console.log(b);
// const index = b.indexOf(" ");
// a=b.substring(0,index);
// console.log(a);
// b=b.substring(index +1)
// console.log(b);


//---------------exe2--------------------------
    let matrix = [
        ['x', 'X', 'x'],
        ['X', 'x', 'X'],
        ['x', 'X','X']
    ];

let countX=0;
let coordinates= [];
for(let i=0;i<matrix.length;i++){
    for(let z =0; z<matrix[i].length;z++){
        if(matrix[i][z]===`X`){
            countX++;
           let xAndy=[i,z];
            coordinates.push(xAndy);
        }
    }
}
console.log(countX);
console.log(coordinates);






