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
 ## 3. Module import / export
  Ứng dụng RN thường được phát triển trên nhiều file JS mà ta thường gọi là các module / component. Tất cả các biến và           function trong 1 file JS sẽ chỉ được truy xuất trong file (hay còn gọi là file private). Để cho phép các thành phần có thể sử   dụng từ các file khác, chúng ta cần dùng tới từ khoá export và import.

#### ví dụ minh họa:
    //// File CurrencyConverter.js

    const rate = 22650.0; // Private in file

    // export for public use
    export const bankName = 'ACB';
    export const vnd2dollar = (vnd) => vnd / rate; 

    // export mặc định
    export default dollar2vnd = (dolla) => dolla * rate;


    //// File Other.js

    import Convert from './CurrencyConverter';

    //Convert chính là hàm dollar2vnd được export mặc định
    alert(Convert(10)); // 226500 

    //// File Another.js
    import Convert, { vnd2dollar, bankName } from './CurrencyConverter';

    // Import thêm vnd2dollar và bankName trong file CurrencyConverter.js
    alert(Convert(10)); // 226500
    alert(vnd2dollar(226500)); // 10
    
    
## 4. Function Parameter: default và rest
    // url và method có giá trị mặc định nếu không được truyền vào khi gọi function.
    const requestURL = (url = ‘’, method = 'GET') => {

    };

    requestURL(); // url = '', method = 'GET'
    requestURL('http://facebook.com'); //  url = 'http://facebook.com', method = 'GET'

    const requestURLWithParams = (url = ‘’, method = 'GET', ...params) => {
    // params là array chứa giá trị các tham số thứ 3 trở đi
    }

    requestURLWithParams(); // params = []
    requestURLWithParams('someURL','GET', 'a', 1, {}); // params = ['a', 1, {}] 
    
## 5. Object/Array Matching, Short Hand Notation
    let arr = [1,2,3];
    let [n, , m] = arr; // n = 1, m = 3
    console.log(n, m); // 1, 3

    let person = { name : 'Viet Tran', age: 28, interestedIn: 'Coding' };
    let { name, age } = person; // name = 'Viet Tran', age = 28 
    console.log(name, age); // 'Viet Tran', 28

    let { name , job = 'some job' } = person; // nếu person không có thuộc tính job thì job = 'some job' như một giá trị mặc  định
    
## 6. Spread Operator
  Đây là một trong những operator quan trọng chúng ta rất hay dùng trong RN.
  
    let arr = [1,2,3];
    let someArr = [...arr, 4]; // [1,2,3,4], ...arr gọi là spread operator
    let thatArr = [4, ...arr]; // [4,1,2,3], tương tự nhưng chỉ khác vị trí các thành phần. 

    let p1 = { x: 0, y: 1 };
    let p2 = { ...p1, z: 1}; // { x: 0, y: 1, z: 1 }
    let p3 = { ...p2, y : 2 } // { x: 0, y: 2, z: 1 }, update y nếu y đã có.
    let p4 = { y : 3, ...p3 } // { y : 2, x: 0, z: 1}, không update y vì nguyên tắc phía sau override phía trước
