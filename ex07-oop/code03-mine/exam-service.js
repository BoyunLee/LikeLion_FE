// let exams = [];

// export const add = (exam) => {
//     exams.push(exam);
// }

// export const getList = (page=1, size=3) => {
//     let exams1 = exams
//                 .sort((a, b) => b.kor - a.kor)
//                 .slice(0, size);

//     return exams1;
// }

// export const size = () => exams.length;

// 위 코드를 이용해서 ExamService 캡슐을 작성해주세요.
// ExamService의 서비스 함수는 add, getList, size, get(index) 4개 있습니다.
// 내부적으로 사용하는 속성은 Exam 객체를 담을 수 있는 배열입니다.
// 배열명은 exams 입니다.


class ExamService {

    #exams = [];

    constructor() {
        // this.exams = [];
    }

    add(exam) {
        this.#exams.push(exam);
    }

    getList(page=1, size=3) {
        let exams = this.#exams
                    .sort((a, b) => b.total() - a.total())
                    .slice(0, size);
    
        return exams;
    }

    size() {
        return this.#exams.length;
    }

    get(index) {
        return this.#exams[index];
    }
}

const examService = new ExamService();
export default examService;