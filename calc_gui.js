var input = {'array': []};

input.getInput = function(){
    return this.array.join("");
}; 

var output = {};
output.text = document.getElementById("output");

var clickNumbers = function(event){
    var str = event.target.innerHTML;
    console.log(str);

    if(str === "C") { 
        input.array.pop();
    } else {
        input.array.push(str);
    }

    console.log(input.array);
    console.log(input.getInput());
       
    output.text.value = input.getInput();
};

// var input ={};
// input.equality = function () {
//     var eq = document.getElementById('eq').value;
//     var eqArr = eq.split("");
//     var arr = [];
//     var n = "";
//     for (var i = 0; i < eqArr.length; i++){
//         if (eqArr[i] === "+" || eqArr[i] === "-" || eqArr[i] === "*" || eqArr[i] === "/"){
//             arr.push(n);
//             arr.push(eqArr[i]);
//             var n = "";
//         } else if (i === eqArr.length -1) {
//             n += eqArr[i];
//             arr.push(n);
//         } else {
//             n += eqArr[i];
//         }
//     }
//     return arr;
// };

// var calculrator = {};
// calculrator.calc = function (ret) {
//     var result = Number(ret[0]);
//     for (var i = 1; i < ret.length; i++) {
//         if (ret[i] === "+") {
//             result += Number(ret[i+1]);
//             i++;
//         } else if (ret[i] === "-") {
//             result -= Number(ret[i+1]);
//             i++;
//         } else if (ret[i] === "*") {
//             result *= Number(ret[i+1]);
//             i++;
//         } else if (ret[i] === "/") {
//             result /= Number(ret[i+1]);
//             i++;
//         } else {
//             alert('수식을 잘못 입력하셨습니다.');
//             return "결과값이 없습니다."
//         }
//     }
//     return result;
// };
// var output = {};
// output.print = function (res) {
//     var eq = document.getElementById('eq').value;
//     return eq + " = " + res;
// };

// function main() {
//     var str = document.getElementById('output');
//     var arr = input.equality();
//     var res = calculrator.calc(arr);
//     var out = output.print(res);
//     str.innerHTML = out;
// }
