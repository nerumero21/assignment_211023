const array = [2, 4, 7, 5, 4, 3, 8];

const result = array.filter(function (item, i){
  return array.indexOf(item) == i;
});

console.log("--------Question 1--------");
console.log("before:" + array);
console.log("after :" + result);
