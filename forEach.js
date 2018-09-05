let numbers = [1,2,4,5,7,8,5,6,20,10];

l copy = numbers.forEach(function(i){
	return i + 0.7;
});

console.log(copy);// undefined
console.log(numbers); //[ 1, 2, 4, 5, 7, 8, 5, 6, 20, 10 ]

numbers.forEach(function(i){
	console.log(i);
});
