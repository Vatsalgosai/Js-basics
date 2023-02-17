let people = [
 {name : "Alice", age: 21},
 {name : "Max", age: 20},
 {name : "Jane", age: 20}
];

function myfunc(obj, age) {

    return obj.reduce(function (acc, curr) {
  
      let ans = curr[age]      
      if (!acc[ans]) {
        acc[ans] = [];
      }
      acc[ans].push(curr)
      return acc 
    }, {})  
  }  
  let group = myfunc(people, 'age')
  console.log(group)