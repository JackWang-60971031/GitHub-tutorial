// Array
const arr1 = [1,5,9];
const arr2 = ["Jack","Amy","Tom"]; // arr2陣列內部有3個元素 
console.log(arr1[0] + "號是：" + arr2[0]); // 可用var、const、let來宣告變數

// Object 物件資料
let obj1 = {"Name" : "Jack" , "Age" : 19}; // 稱為鍵-值對，"Age"為鍵，19為值。obj1物件內有2對，每對以,分隔。鍵一定要為字串，而值沒有限制型態。
let obj2 = {"Grade" : { // 物件內部的值可以為物件
    "math" : 95,
    "Chinese" : 60
}}
console.log(obj1);
console.log(obj2);

console.log("-".repeat(50));



// Array
let arr3 = [100,50,80,4];

// 取值
let a = arr3[0]; // 索引值為0
console.log("a:"+a); // 或是用("a:", a)

// 修改值
arr3[0] = 1;
console.log(arr3);

// 新增值
arr3[4] = 500;
arr3.push(9); // 新增一個直到arr3陣列，但未指定索引值
console.log(arr3);

// 取得array內部的元素個數
console.log("arr3的長度：", arr3.length); // length為array的內建屬性

// 在array上的.map、.filter
let arr4 = [1,3,5,10];
let map1 = arr4.map(n => n**2); // .map函數表示將指定的陣列內部的所有元素都為2次方的值
console.log("map1：", map1);

let filter1 = arr4.filter(n => n > 10); // .filter函數用作於陣列內部元素的條件篩選，在此為篩選arr4陣列中大於10的元素
console.log("filter1：", filter1);
let filter2 = arr4.filter(n => n%2 == 0); // 找尋對2取餘數為0的元素
console.log("filter2取偶數：", filter1);

// 數字放大3倍，再減1，抓出基數值。
let map2 = arr4.map(n => (n*3)-1);
let filter3 = map2.filter(n => n%2 == 1); // 找尋對2取餘數為1的元素
console.log("filter3：", filter3);

// 組合動作 (function chain)，可以將多個函數調用連結在一起
let result = arr4.map(n => (n*3) - 1)
                 .filter(n => n%2 == 1);
console.log("result：",result);

console.log("-".repeat(50));



// Object 物件資料
let obj3 = {
    "Name" : "Tom",
    "Age"  : 20,
    "Today": "星期一"
};

console.log("obj3：", obj3);

// 取值
console.log("年齡：", obj3["Age"]);
let name1 = obj3["Name"];
console.log("姓名：", name1);
let today = obj3["Today"];
console.log("今天是：",today);

// 修改值
console.log("我的名字是：", obj3["Name"] = "Jack"); // 修改obj3中的Name鍵的value為Jack

// 新增值
obj3["Score"] = [80,50,90];
console.log(obj3);

//Object.keys()、Object.values()
console.log("object.keys()：", Object.keys(obj3)); // 將obj3內部的所有鍵都取出，以陣列形式顯示。 Object為保留字
console.log("object.values()：", Object.values(obj3)); // 將obj3內部的所有值都取出，以陣列形式顯示


console.log("-".repeat(50));
// 小試身手1
let Object_Data = {
    "name"     : "Jeff",
    "height"   : 170,
    "weight"   : 65,
    "age"      : 26,
    "class"    : "A-",
    "interest" : ["喝酒", "爬山", "寫程式"]
};
console.log("原始資料：", Object_Data);

let name2 = Object_Data["name"];
let class1 = Object_Data["class"];
let new_height = Object_Data["weight"] = 180;
Object_Data.interest[3] = "彈吉他"; // 或是用Object_Data["interest"].push("彈吉他");

console.log("嗨嗨，我是" + name2 + "，階級為" + class1);
console.log("修改" + name2 + "的身高為" + new_height);
console.log("更新後的興趣資訊：", Object_Data["interest"]);


console.log("-".repeat(50));


// Array with Object
let data = [
    {"memNo" : 1, "Name" : "Jack", "Money" : 1000 },
    {"memNo" : 2, "Name" : "Jamy", "Money" : 100 },
    {"memNo" : 3, "Name" : "Amy", "Money" : 1500 },
    {"memNo" : 4, "Name" : "Tom", "Money" : 30000 },
    {"memNo" : 5, "Name" : "Patrick", "Money" : 52600 },
];
// 取出名字資料的Array
let data_Name = data.map(element => element["Name"]);
console.log("data資料中的Name有：", data_Name);

// 取出memNo構成的Array
let data_memNo = data.map(element => element["memNo"]);
console.log("data資料中的memNo有：", data_memNo);

// 取得Money >= 2000的memNo，所構成的Array
let data_select1 = data.filter(element => element["Money"] >= 2000) // 用作於過濾
                       .map(element => element["memNo"]);
console.log("篩選Money>=2000的memNo結果為：", data_select1);

console.log("-".repeat(50));


// 牛刀小試2
let studenstScores = [
    {"name" : "Jeff", "age" : 18, "scores" : [95, 88, 100]},
    {"name" : "Leo", "age" : 22, "scores" : [90, 97, 98]},
    {"name" : "Holy", "age" : 25, "scores" : [75, 68, 90]},
    {"name" : "Keven", "age" : 33, "scores" : [77, 65, 32]},
    {"name" : "Jenny", "age" : 20, "scores" : [63, 82, 91]},
    {"name" : "Elle", "age" : 31, "scores" : [100, 73, 83]},
];

// 取得age>=30的人名array 看到條件就使用filter進行過濾
let get_age1 = studenstScores.filter(element => element["age"] >= 30)
                             .map(element => element["name"]); // 用.map進行運算轉換
console.log("age>=30者：", get_age1);

// 取得scores總和>=250的資料，將人名、年紀合併成一字串，成為array元素後傳回
let get_scores1 = studenstScores.filter(element => (element["scores"][0] + element["scores"][1] + element["scores"][2]) >= 250)
                                .map(element => element["name"] + "-" + element["age"]);
console.log(get_scores1);