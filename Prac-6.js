let arr = [1, 2, 3, 4, 5, 6, 8];

//1+2+3+4+5+6 = 21
//6*7/2 = 21
//((n+1)*(n+2))/2=21    n is number of element in array  [here n = 5]

let n = arr.length;

let total = ((n+1)*(n+2))/2;

for(let i = 0; i<n; i++){

    total = total - arr[i];
}

console.log(total);