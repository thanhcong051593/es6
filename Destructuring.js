//array
var List = [10,20];
var [a, b] = List;
console.log(a)  //10
console.log(b)  //20


var [a,b,...rest] = [10,20,30,40,50,60,70,80,90]
console.log(a)  //10
console.log(b)  //20
console.log(rest) //[30,40,50,60,70,80,90]

let arr = [1,2,4]
let [a, ,c]= arr
console.log(a) //1
console.log(c)	//3

// object
let obj = { name:'Nguyen Thanh Cong', ago: '24' }
let { name, ago } = obj
console.log(name) // Nguyen Thanh Cong
console.log(ago)  //24


let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
a; // 10 
b; // 20 
rest; // { c: 30, d: 40 }
