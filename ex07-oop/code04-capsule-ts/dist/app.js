{
    var value = "Hello";
    value = "42"; // 가능
    // value = false; // 오류
}
{
    var value = 123; // 가능
    console.log(value);
    // const username : ID = "newlec"; // 오류
    // console.log(username);
}
{
    var value = "Hello";
    console.log(value.toUpperCase()); // 강제로 형변환
}
{
    var msg = "Hello, world!";
    if (typeof msg === "string") {
        var uppermsg = msg.toUpperCase();
        console.log(uppermsg);
    }
}
{
    var msg = "Hello, world!";
    console.log(msg);
    // 타입이 다르므로 오류
    // msg = 2;
    // console.log(msg);
}
{
    var user = { name: "Jane", age: 32 };
}
{
    var user = void 0;
    user = { name: "John", age: 30 };
    console.log(user);
}
{
    var nums = [1, 2, 3, 4, 5];
    console.log(nums);
    nums.push(6);
}
{
    console.log("Hello, world!");
    function greet(person, date) {
        console.log("Hello ".concat(person, ", today is ").concat(date, "!"));
    }
    greet("Brendan", new Date());
}
