let numbers = [1,2,4,5,7,8,5,6,20,10];

l copy= numbers.filter(function(i){
		if(i%2==0) return i;
})
 console.log(copy);//2 4 8 6 20 10
 console.log(numbers);

//filter tạo ra 1 mảng mới thỏa dkien
