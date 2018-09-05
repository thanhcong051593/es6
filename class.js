class <class_name>{
            constructor(){
              //cac thuoc tinh
            }

           //cac phuong thuc: function
}

class Person{
            constructor(firstName, lastName){
              //cac thuoc tinh
              this.firstName = firstName;
              this.lastName = lastName;
            }
            //cac phuong thuc
            sayHello(){
              console.log(`xin chao ban ${this.firstName} ${this.lastName}`)
            }
}

var cong = new Person();

cong.sayHello("nguyen" , "thanh cong")
//result xin chao ban nguyen thanh cong


#extends
 class User extends Person{
   constructor(firstName, lastName){
     super();// ke thua cac phuong thuc trong class Person
     this.firstName = firstName;
     this.lastName = lastName;
     this.message = "xin hen gap lai ban vao lan sau"
   }
   goodBye(name){
     console.log(`${this.message} ${name}`)
   }
   
 }

var haLy = new User();

User.sayHello()

User.goodBye("cong")
//result xin hen gap lai ban vao lan sau cong
