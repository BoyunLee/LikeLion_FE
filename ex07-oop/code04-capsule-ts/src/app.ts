import ILens from "./interface/ILens";

{
  
}



{
  enum Ditection {
    Up,
    Down,
    Left,
    Right
  }
}

{
  let x: "hello" = "hello";
  x = "hello";
  // x = "world"; // 오류 b 
}

{
  let x: number = 1;
  x = 2;
  // x = "Hello"; // 오류
}

{
  let level: 1 | 2 | 3;
  level = 1;
  console.log(level);
  // level = 4; // 오류
}

{
  let value: string | undefined = "Hello";
  value = "42"; // 가능
  // value = false; // 오류
}

{
  type ID = number | undefined;

  const value : ID = 123; // 가능
  console.log(value);

  // const username : ID = "newlec"; // 오류
  // console.log(username);

}

{
  let value: unknown = "Hello";
  console.log((value as string).toUpperCase()); // 강제로 형변환
}

{
  let msg: unknown = "Hello, world!";
  if(typeof msg === "string") {
    let uppermsg = msg.toUpperCase();
    console.log(uppermsg);
  }
}

{
  let msg: String = "Hello, world!";
  console.log(msg);

  // 타입이 다르므로 오류
  // msg = 2;
  // console.log(msg);
}

{
  // const user : {name : string, age: number} = {name: "John", age: 30};

  type User = {name: string, age: number};
  const user: User = {name: "Jane", age: 32};
}

{
  let user: { name: string; age: number };
  user = { name: "John", age: 30 };

  console.log(user);
}

{
  let nums: number[] = [1, 2, 3, 4, 5];
  console.log(nums);
  nums.push(6);
}

{
  console.log("Hello, world!");

function greet(person, date) {
  console.log(`Hello ${person}, today is ${date}!`);
}

greet("Brendan", new Date());
}