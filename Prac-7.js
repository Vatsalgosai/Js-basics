let arr = [ 1, 23, 12, 9, 30, 2, 50 ];
let k = arr.length;
let n = 2;
nthLargest(arr, k, n);

function nthLargest(arr, k, n)
{
    // Sort the given array arr in reverse
    // order.
    arr.sort((a, b) => b - a);
    if(n>k){
        console.log("number is larger then array size")
    }else{
        console.log(arr[n-1])
    }
} 
 
// driver program
   