
//----------------exe1-----------------------
let a = 'ider';
let b = 'yoel';
b = b + " " + a;
console.log(b);
const index = b.indexOf(" ");
a = b.substring(0, index);
console.log(a);
b = b.substring(index + 1)
console.log(b);


// //---------------exe2--------------------------
let matrix = [
    ['x', 'X', 'x'],
    ['X', 'x', 'X'],
    ['x', 'X', 'X']
];

let countX = 0;
let coordinates = [];
for (let i = 0; i < matrix.length; i++) {
    for (let z = 0; z < matrix[i].length; z++) {
        if (matrix[i][z] === `X`) {
            countX++;
            let xAndy = [i, z];
            coordinates.push(xAndy);
        }
    }
}
console.log(countX);
console.log(coordinates);

//--------------ex3------------------------------

let family = { parents: {}, children: [{ name: "Ali" }, { name: "Lea" }, { name: "Mona" }] };

console.log(family.children[2])

let namse = '';

for (let i = 0; i < family.children.length; i++) {
    namse += family.children[i].name + " ";
}
console.log(namse);

//--------------ex4------------------------------
const str = "effort is always the winner";


const arr = str.split(' ')

let reversingStr = '';

for (let index = arr.length - 1; index >= 0; index--) {
    reversingStr += arr[index] + ' ';
}
console.log(reversingStr);

//-----------------ex5----------------------

const mixedArr = [42, "hello", null, true, { name: "Alice" }, 3.14, false, "world", null, [1, 2, 3], 0, "", undefined];

let typeCounts = {
    number: 0,
    string: 0,
    object: 0,
    boolean: 0,
    null: 0
};

for (let index = 0; index < mixedArr.length; index++) {
    const a= typeof mixedArr[index]
    if (a in typeCounts)
        typeCounts[typeof mixedArr[index]]++
    else{
        
        typeCounts[a]=1
    }
}
console.log(typeCounts);

