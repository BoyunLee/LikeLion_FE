// 자바스크립트 캡슐화 도구
// 1. function
// 2. class

// 함수는 용도에 따라서 두가지 방식으로 사용된다.
// 1. 생성자 -> new 를 통해서 살행하며 new를 통해서 생성된 객체를 초기화하는 역할을 한다.
// 2. 일반함수
// new Exam(); // 객체의 초기화를 담당하는 함수 => constructor

// function Exam() {
//     // new를 통해서 호출이 되었다면 this 객체를 받아서 초기화를 하는 역할을 한다.
//     console.log(this);
//     return { kor : 10, eng : 30 }; 
// }

// function Exam() {
//     this.kor = 0;
//     this.eng = 0;
//     this.math = 0;
//     // this["math"] = 0;
//     this.total = function() {
//         return this.kor + this.eng + this.math;
//     }
// }

// // 다음 두 가지 방식으로 호출한 함수들은 모두 객체를 전달받는다.
// // 코드를 실행하고 this 값을 확인해보자.
// let exam = new Exam();
// let ar = [];
// ar.kor = 30;
// console.log(ar.kor);

// const total = () => {
//     return kor + eng + Math;
// }

// const avg = () => {
//     return total() / 3;
// }


// 결과 false 나오는 이유 : 각각의 Exam 인스턴스는 total 메서드를 독립적으로 가지고 있으며, 
// 그 두 메서드는 동일한 내용을 가지고 있을지라도 서로 다른 함수 객체입니다. 
// 자바스크립트에서는 두 개의 서로 다른 함수 객체를 비교할 때 === 연산자는 false를 반환합니다.
// function Exam(kor, eng, math) {
//     this.kor = kor || 0;
//     this.eng = eng || 0;
//     this.math = math || 0;

//     this.total = function() {
//         return this.kor + this.eng + this.math;
//     }

//     this.avg = function() {
//         return this.total() / 3;
//     }
// }

// Exam.prototype = {
//     total() {
//         return this.kor + this.eng + this.math;
//     },
//     avg() {
//         return this.total() / 3;
//     }
// };

// let exam1 = new Exam(1, 1, 1);
// let exam2 = new Exam(1, 1, 1);

// // console.log(exam1.total());
// // console.log(exam2.total());
// // console.log(exam1.total === exam2.total);

// // Array.prototype.eng = 30;
// // let ar1 = [];
// // ar1.kor = 30;
// // let ar2 = [];

// // console.log(ar1.kor, ar2.kor);
// // console.log(ar1.eng, ar2.eng);

// exam1.aa = 20;
// console.log(exam1.constructor === Exam);


class Exam {
    #kor = 0;
    #eng = 0;
    #math = 0;

    constructor(kor = 0, eng = 0, math = 0) {
        this.#kor = kor;
        this.#eng = eng;
        this.#math = math;
    }

    // getkor() {
    //     return this.#kor;
    // }

    // getter, setter 
    get kor() {
        return this.#kor;
    }

    set kor(value) {
        this.#kor = value;
    }

    get eng() {
        return this.#eng;
    }

    set eng(value) {
        this.#eng = value;
    }

    get math() {
        return this.#math;
    }

    set math(value) {
        this.#math = value;
    }

    static create() {  
        return new Exam();
    }

    total() {
        return this.#kor + this.#eng + this.#math;
    }

    avg() {
        return this.total() / 3;
    }
}   

export default Exam;

let exam = Exam.create();
console.log(exam.total());

// let exam = new Exam(10, 20, 30);
// console.log(exam.total());
// console.log(exam.getkor(), exam.geteng(), exam.getmath()); // 은닉화가 안되어있음

