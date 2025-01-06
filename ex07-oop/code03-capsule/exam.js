// 자바스크립트 캡슐화 도구
// 1. function
// 2. class

// 함수는 용도에 따라서 두가지 방식으로 사용된다.
function Exam() {
    // new를 통해서 호출이 되었다면 this 객체를 받아서 초기화를 하는 역할을 한다.
    console.log(this);
    return { kor : 10, eng : 30 }; 
}

function sayHello() {
    return "hello";
}

// 다음 두 가지 방식으로 호출한 함수들은 모두 객체를 전달받는다.
// 코드를 실행하고 this 값을 확인해보자.
new Exam(); // 객체의 초기화를 담당하는 함수 => constructor
Exam();

const total = () => {
    return kor + eng + Math;
}

const avg = () => {
    return total() / 3;
}