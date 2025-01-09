// 외부라이브러리 : npm install readline-sync
// 절차적인 프로그래밍

/*
1. 고급언어를 이용한 절차작성
2. 제어구조를 이용한 흐름제어
*/

/*  
코드의 문제점
1. 코드가 커지는 문제 : 함수로 분리
2. 변수의 스코프가 너무 넓은 문제 : 지역화
3. 데이터의 구조화
4. 집중화
*/

// 사본

import {printHeader, printFooter, inputMenu, inputScore, printScore} from "./lib.js"

let isRun = true;

printHeader();

while (isRun) {
  let menu = inputMenu();

  switch (menu) {
    case 1: // 성적 입력
      inputScore();
      break;

    case 2: // 성적 출력
      printScore();
      break;
      
    case 3: // 프로그램 종료
      isRun = false;
      break;
  }
}

printFooter();