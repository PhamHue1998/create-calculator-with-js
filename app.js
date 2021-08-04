//lấy giá trị của button
function getNumber(number){
    var result = document.getElementById("txt");
    result.value += number;
}

//lấy kq
/*Phương thức eval() có chức năng tính toán biểu thức toán học hoặc thức thi mã lệnh tùy thuộc vào
 tham số mà người dùng truyền vào khi khởi tạo phương thức.

Nếu tham số truyền vào là một biểu thức toán học, phương thức sẽ tính toàn và trả về kết quả của biểu thức đó.

=> Cú pháp: eval( string)
 */

function result(){
    var result = document.getElementById("txt");
    result.value = eval(result.value);
}

//hàm xóa
function clearAll(){
    var result = document.getElementById("txt");
    result.value = "";
}

//xóa từng kí tự
//slice(beginIndex, endIndex)
function delChar(){
    var number = document.getElementById("txt");
    var del = number.value;
    del = del.slice(0,-1);
    number.value = del;
}