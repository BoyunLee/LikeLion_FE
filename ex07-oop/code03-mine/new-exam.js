import Exam from './exam.js';

class NewExam extends Exam {
    // Has a Inheritance
    // #exam = new Exam();
    #com = 0;

    constructor(kor, eng, math, com) {
        super(kor, eng, math);
        this.#com = com;
    }

    total() {
        return super.total() + this.#com;
    }
}

let ex1 = new NewExam(1, 1, 1, 1);
console.log(ex1.total(), ex1.avg()); 