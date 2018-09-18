# es6
## 1. Khai báo biến với var, let, và const 
  Khi khai báo biến với Const, biến đó sẽ là immutable variable, nghĩa là sẽ không thay đổi được giá trị của biến. Với var và     let, chúng ta đều có thể khai báo được 1 biến bất kỳ, biến này có thể thay đổi được giá trị.
  
## 2. Arrow function
  Basic syntax của Arrow function:
  (param1, param2, …, paramN) => { statements }
  (param1, param2, …, paramN) => expression
  // equivalent to: (param1, param2, …, paramN) => { return expression; }
  Arrow function cũng như function bình thường, chỉ khác về syntax và binding context:
  
#### ví dụ minh họa:
  
    function Pet() {
    this.age = 1;

    function showAgeFunc() {
      alert( 'Age in showAgeFunc: ' + this.age ); // Age in showAgeFunc: undefined
    }

    const showAgeArrowFunc = () => {
      alert( 'Age in showAgeArrowFunc: ' + this.age ); // Age in showAgeFunc: 1
    }

    setTimeout( showAgeFunc, 1000);
    setTimeout( showAgeArrowFunc, 1000);
    }
    
    new Pet();
