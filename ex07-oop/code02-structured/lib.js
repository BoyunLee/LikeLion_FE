import readlineSync from "readline-sync";

// 성적 데이터
let exams = [];

// 헤더 출력 함수
export const printHeader = () => {
  console.log(`====================================\n           성적관리 프로그램         \n====================================`);
}

// 메뉴 출력 함수
export const inputMenu = () => {
  console.log("------------------------------------");
  console.log("                메뉴선택             ");
  console.log("------------------------------------");
  console.log("1. 성적입력");
  console.log("2. 성적출력");
  console.log("3. 종료");
  console.log(">");

  let menu = readlineSync.question("");
  menu = parseInt(menu);

  return menu;
}

// 성적 입력 함수
export const inputScore = () => {
  console.clear();
  console.log("------------------------------------");
  console.log("                성적입력             ");
  console.log("------------------------------------");

  let kor = parseInt(readlineSync.question("kor: "));
  let eng = parseInt(readlineSync.question("eng: "));
  let math = parseInt(readlineSync.question("math: "));

  exams.push({ kor, eng, math });
}

// 성적 출력 함수
export const printScore = () => {
  console.clear();

  let exams1 = exams
              .sort((a, b) => b.kor - a.kor)
              .slice(0, 3);

  console.log("------------------------------------");
  console.log("                성적출력             ");
  console.log("------------------------------------");
  console.log(`총인원: ${exams.length}명`);
  console.log("");

  for (let i = 0; i < exams1.length; i++) {

    let {kor, eng, math} = exams1[i];

    // 총점 계산
    let total = kor + eng + math;
    // 평균 계산
    let avg = total / 3;

    console.log(`num: ${i + 1}`);
    console.log(`kor: ${kor}`);
    console.log(`eng: ${eng}`);
    console.log(`math: ${math}`);
    console.log(`total: ${total}`);
    console.log(`avg: ${avg.toFixed(2)}`);
    console.log("--------------------------");
  }

  console.log("계속하려면 엔터키를 누르세요.");
  readlineSync.question("");
}

export const printFooter = () => {
    console.log("====================================");
    console.log("Bye~~~");
}
