var input = {'array': []};

input.getInput = function(){
    return this.array.join("");
}; 

var output = {};
output.text1 = document.getElementById("output1");
output.text2 = document.getElementById("output");
output.arr1 = function(){
    var eqArr = input.array;
    var arr = [];
    var n = "";
    for (var i = 0; i < eqArr.length; i++){
        if (eqArr[i] === "+" || eqArr[i] === "-" || eqArr[i] === "*" || eqArr[i] === "/"){
            arr.push(n);
            arr.push(eqArr[i]);
            var n = "";
        } else if (i === eqArr.length -1) {
            n += eqArr[i];
            arr.push(n);
        } else {
            n += eqArr[i];
        }
    }
    return arr;
}

var calculrator = {};
calculrator.calc = function (ret) {
    var result = Number(ret[0]);
    for (var i = 1; i < ret.length; i++) {
        if (ret[i] === "+") {
            result += Number(ret[i+1]);
            i++;
        } else if (ret[i] === "-") {
            result -= Number(ret[i+1]);
            i++;
        } else if (ret[i] === "*") {
            result *= Number(ret[i+1]);
            i++;
        } else if (ret[i] === "/") {
            result /= Number(ret[i+1]);
            i++;
        } else {
            alert('수식을 잘못 입력하셨습니다.');
            return "결과값이 없습니다."
        }
    }
    return result;
};
calculrator.result = function() {
    var arr = output.arr1();
    var res = calculrator.calc(arr);
    return res;
}

var clickNumbers = function(event){
    var str = event.target.innerHTML;
    var len = input.array.length;
    var last = input.array[len-1];
    console.log("input" + input.array);

    if(str === "C") { 
        input.array.pop();
    } else if ((len === 0 || (len === 1 && input.array[0] === "-")) && (str === "*" || str === "/" || str === "+")) {
        // 없음
    } else if (str === "+" || str === "-" || str === "*" || str === "/") {
        if (last === "+" || last === "-" || last === "*" || last === "/") {
            input.array.pop();
            input.array.push(str);
        } else {
            var res = calculrator.result();
            output.text2.value = res;
            input.array.push(str);
        }

    } else if(str === "=") {
        if (last === "+" || last === "-" || last === "*" || last === "/") {
            input.array.pop();
            var res = calculrator.result();
            output.text2.value = res;
        } else {
            var res = calculrator.result();
            output.text2.value = res;
        }

    } else {
        input.array.push(str);
    }
    
    output.text1.innerHTML = input.getInput();
};