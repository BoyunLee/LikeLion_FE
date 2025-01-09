let kor = 100;
let colName = 'eng';

let obj = {
    kor : kor,
    // eng : 40,
    [colName] : 50,
    total() {
        return this.kor + this.eng;
    }
}

console.log(obj.total());

// 다음 함수를 구현해주세요. 약속
// interface ILens {
//     zoomIn(level: number): void;
//     zoomOut(level: number): void;
// }

let zoomIn = Symbol();