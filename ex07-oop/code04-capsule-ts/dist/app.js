import Lens from "./interface/Lens";
{
    let lens = new Lens();
    lens.zoomIn(1);
    lens.zoomOut(1);
}
{
    let Ditection;
    (function (Ditection) {
        Ditection[Ditection["Up"] = 0] = "Up";
        Ditection[Ditection["Down"] = 1] = "Down";
        Ditection[Ditection["Left"] = 2] = "Left";
        Ditection[Ditection["Right"] = 3] = "Right";
    })(Ditection || (Ditection = {}));
}
{
    let x = "hello";
    x = "hello";
    // x = "world"; // 오류 b 
}
{
    let x = 1;
    x = 2;
    // x = "Hello"; // 오류
}
{
    let level;
    level = 1;
    console.log(level);
    // level = 4; // 오류
}
{
    let value = "Hello";
    value = "42"; // 가능
    // value = false; // 오류
}
{
    const value = 123; // 가능
    console.log(value);
    // const username : ID = "newlec"; // 오류
    // console.log(username);
}
{
    let value = "Hello";
    console.log(value.toUpperCase()); // 강제로 형변환
}
{
    let msg = "Hello, world!";
    if (typeof msg === "string") {
        let uppermsg = msg.toUpperCase();
        console.log(uppermsg);
    }
}
{
    let msg = "Hello, world!";
    console.log(msg);
    // 타입이 다르므로 오류
    // msg = 2;
    // console.log(msg);
}
{
    const user = { name: "Jane", age: 32 };
}
{
    let user;
    user = { name: "John", age: 30 };
    console.log(user);
}
{
    let nums = [1, 2, 3, 4, 5];
    console.log(nums);
    nums.push(6);
}
// {
//   console.log("Hello, world!");
//   function greet(person, date) {
//     console.log(`Hello ${person}, today is ${date}!`);
//   }
//   greet("Brendan", new Date());
// }
