// var cho phép chúng ta khai báo lại 1 biến cũ, nhưng let thì không
var n = 1;
var n = 2; // no syntax error

let m = 1;
let m = 2; // syntax error

// var và let đều tác động vào function block như nhau, tuy nhiên ở trường hợp này let sẽ chỉ tác động vào block ngay sau nó:

function someFunc() {
    
    for( let i = 0; i <= 9; i++ ) {
        // Biến i lúc này chỉ tồn tại trong scope block của for
    }

    // Gọi biến i ngoài này sẽ bị lỗi
}

function someFunc() {
    
    for( var i = 0; i <= 9; i++ ) {
        // Biến i lúc này không chỉ tồn tại trong scope block của for
    }

    // mà còn tồn tại cả ở ngoài này nữa, lúc này biến i = 10
}
