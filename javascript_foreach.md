## 자바스크립 foreach


배열내의 모든 요소에 대해 인자로 주어진 함수를 실행합니다.

### forEach 패턴1

//element: 배열요소를 하나씩 받아 함수를 실행한다.
var arr1 = ['a', 'b', 'c'];

arr1.forEach(function(element) {
  console.log(element);
});

//출력:
//a
//b
//c

### forEach 패턴2

//element: 배열요소
//Index: 배열 요소의 인덱스
//array 배열 변수를 하나씩 받아 함수를 실행한다.
var arr2 = [1, 2, 3, 4, 5];

        var i = 0;
        var result = '';
        arr2.forEach(function (element, index, array) {
            i += element;
            result += index + " - " + i + '\n';
        });

console.log(result);

//출력:
//0 - 1
//1 - 3
//2 - 6
//3 - 10
//4 - 15