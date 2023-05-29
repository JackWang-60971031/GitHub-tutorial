// Function：通常用來處理某一特定問題的程式，盡量一個函式只做單一功能。將所定義好的函式存入變數名稱中。
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.map(n => n * 2)); // .map的內部稱為function，此行的function為n => n * 2

console.log("-".repeat(50));

// 早期的Function
let add1 = function(a, b){
    return a + b;
};

// 現在使用 arrow function，以=>來代表function
let add2 = (a,b) => { // 輸入參數分別為a、b
    return a + b;
}

console.log("add1：", add1(3,5));
console.log("add2：", add2(3,5));

console.log("-".repeat(50));

// 定義(宣告) function
let sayhello = (name, age) => { // {}的內部稱為function的執行區塊(scope)  scope為作用域(有效範圍)
    console.log("Hi Hi");
    console.log("I'm");
    console.log(name);
    console.log(age + " year")
    console.log("~~~~~~");
    
    let arr2 = [3, 4, 5, 6, 7];
    console.log(arr2.map(n => n * 3));
};

sayhello("Jack", 26); // 呼叫sayhello function，輸入參數分別為"Jack"、26
sayhello("Paul", 22);

console.log("-".repeat(50));

// function特性介紹#1
let sayhello2 = (name1, gender) => {
    console.log("哈囉~ 我是" + name1 + "，是一位" + gender + "生!");
}

let sayhello3 = (name2, gender1) => { // name2、gender1為input(輸入參數)
    console.log("哈囉~ 我是" + name2 + "，是一位" + gender1 + "生!");
    return "很高興認識你!"; // return後的東西為output(輸出結果)
}

let msg1 = sayhello2("Jack", "男"); // 表示將sayhello2函式的結果存到msg1變數中，但在sayhello2中，並未有return，因此沒有回傳東西，msg1變數就會顯示undefined
console.log(msg1);

let msg2 = sayhello3("Amy", "女"); // 表示將sayhello3函式的結果存到msg2變數中
console.log(msg2); // 也可寫成console.log(sayhello3("Amy", "女"));

let arr3 = [1, 2, 3, 4, 5];
//arr3.map(n => n * 3); // n => n * 3為一個function，而n為input，n * 3為output。也可寫成以下：
let res1 = arr3.map((n) => {
    return n * 3;
});
console.log("res1：", res1);

let arr4 = [1, 3, 5, 7, 9];
let res2 = arr4.map((n) => { // arr4陣列中的每個元素都會進入到此函數執行1次
    console.log(n);
    console.log("Hi~Hi~");
    console.log("Hey~Hey~");
    return n * 3;
});

console.log("res2：", res2);

console.log("-".repeat(50));


// function的特性介紹#2
// 全域變數(Global variable)、區域變數(Local variable)。var、let、const皆為區域變數。盡量用區域變數
let test1 = () => {
    var num1 = 12; // num1為區域變數
    return num1;
};

let test2 = () => {
    let num2 = 15; // num2為區域變數，只在test2 function內部有效
    return num2;
};

let test3 = () => {
    num3 = 18; //num3為全域變數，在test3 function外仍然有效
    return num3;
};

console.log(test1()); //test1()中的()表示執行test1 function的意思
console.log(test2());
console.log(test3());

console.log("-".repeat(50));

// function的特性介紹#3
// var、let、const之間的差異，使用頻率：let > const > var
// var   : function scope ， 值可以任意改
// let   : block scope    ， 值可以任意改
// const : block scope    ， 值不可以任意改 (常數)

let test4 = () => {
    let num4 = -1234;
    //var message; // function scope，整個test4 function的人都可以看到
    let message; // block scope
    //const message = ""; //表示message變數宣告為空字串，就不可再更改

    if(num4 > 0){
        // var message = "正數!!";
        //console.log("正數!!!");
        message = "正數!!";
        // let message = "正數!!"; // 此變數僅於if scope內部有效
    }else{
        // var message = "負數!!";
        //console.log("負數!!");
        message = "負數!!";
        // let message = "負數!!"; // 此變數僅於else scope內部有效
    }
    console.log(message);
};
test4();

console.log("-".repeat(50));


// 流程控制#1 if-else
// 宣告a變數，如果a>0顯示正數，如a<0顯示負數

let a = 123;
if(a > 0){
    console.log("正數");
}else{
    console.log(res = "負數");
};

// 宣告b變數，如果b>0顯示正數，如b===0，則顯示b為0，如b<0顯示負數
let b = 0;
if(b > 0){
    console.log("正數");
}else if (b === 0){
    console.log("b為0");
}else{
    console.log("負數");
};

console.log("-".repeat(50));


// 運算子 (資料間運算的符號)
// 算術運算子 +, -, *, /, %
// 比較運算子 >, <, ==, ===, !=, !==, >=, <=
console.log(12 % 3 ===0); // ===表示左右兩邊的值是否相等
console.log(12 % 5 !== 0); // !==表示左右兩邊是否不等於，會連同資料型態別一起比較

console.log("-".repeat(50));

// ==為弱型別比較
// ===為強行別比較。建議使用此
console.log("1 == 1："   , 1 == 1);
console.log('1 == "1"：' , 1 == "1");
console.log("1 == true：", 1 == true);

console.log("1 === 1："      , 1 === 1);
console.log('1 === "1"：'    , 1 === "1"); // ===會連同資料型別一起比較
console.log("1 === true："   , 1 === true);

console.log("-".repeat(50));

// 關係運算子 &&、||
console.log(12%2 === 0 && 3 > 7);

console.log("-".repeat(50));


// 小試身手#3-1
// 以number來決定type的組別

let number = 50;
let type;
if (number>=100){
    type = "丁組";
}else if(number >= 50 && number < 100){
    type = "丙組";
}else if(number >=0 && number < 50){
    type = "乙組";
}else{
    type = "甲組";
};

console.log("您所屬的組別為：",type);

console.log("-".repeat(50));


// 小試身手#3-2
// 女性不限年紀，消費金額皆為500。男性>=30歲，消費金額為1000。男性<30歲，消費金額為700。
// 以下為巢狀的if-else
/*let age = 20;
let gender3 = "M";
let rs;
if(gender3 === "F"){
    rs = "您的消費金額為 $500";
}else{
    if(age >= 30){
        rs = "您的消費金額為 $1000";
    }else{
        rs = "您的消費金額為 $700";
    }
};

console.log(rs);*/

let age = 70;
let gender3 = "M";
let rs;
if(gender3 === "F"){
    rs = "您的消費金額為 $500";
}else if(gender3 = "M" && age >= 30){
    rs = "您的消費金額為 $1000";
}else{
    rs = "您的消費金額為 $700";
};

console.log(rs);

