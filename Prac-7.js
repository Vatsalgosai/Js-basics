let arr = [ 1, 23, 12, 9, 30, 2, 50 ];
let k = arr.length;
let n = 3;
nthLargest(arr, k, n);

function nthLargest(arr, k, n)
{
    // Sort the given array arr in reverse
    // order.
    if(n>k){
        console.log("number is larger then array size")
    }else{
        arr.sort((a, b) => b - a);
        console.log(arr[n-1])
    }
} 
