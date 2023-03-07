let arr = [2, 5, 8, 3, 1, 4, 6];

//1+2+3+4+5+6 = 21
//6*7/2 = 21
//((n+1)*(n+2))/2=21    n is number of element in array  [here n = 5]
let arr1 = arr.sort((x, y) => {
    if (x < y) {
       return -1;
    }
    if (x > y) {
       return 1;
    }
    return 0;
    // return x-y;          // second method
 });

let n = arr1.length;

let total = ((n+1)*(n+2))/2;

for(let i = 0; i<n; i++){

    total = total - arr1[i];
}

console.log(total);