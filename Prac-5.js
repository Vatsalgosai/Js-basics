let arr = [2, 5, 8, 3, 1, 4, 6];

function missing(arr){
   let sum = 1;
   let c = 2;

   for(let i = 0; i < arr.length; i++){
      sum = sum - arr[i] + c;
      c++;
   }
   console.log(sum);
}
missing(arr);
