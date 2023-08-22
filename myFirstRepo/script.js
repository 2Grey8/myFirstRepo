let num = 266219;
let sum;

let arr = num.toString().split('');
console.log(arr);

for (let i = 0; i < arr.length; i++) {

    let a, b, c, d, e, f;

    a = arr[0];
    b = arr[1];
    c = arr[2];
    d = arr[3];
    e = arr[4];
    f = arr[5];

    sum = a * b * c * d * e * f;

}

console.log(sum);

let pow = sum ** 3;
console.log(pow);
