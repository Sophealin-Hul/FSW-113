const myArrays = [4, 5, 6, 7, 8];
const newArrays = Object.assign({}, myArrays, {count: myArrays.length});
console.log(myArrays, newArrays);
