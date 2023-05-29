// 流程控制2 - 迴圈
let arr1 = [97, 100, 85, 77, 89, 77, 65];
let sum = 0, count = 0;
let avg;
for (let i=0;i<arr1.length;i++){ // {}內部稱為scope，執行區塊
    sum = sum + arr1[i];
    count += 1;
};
avg = sum / count;
console.log("arr1元素的總合：", sum);
console.log("arr1元素的平均：", avg.toFixed(2)); // 使用toFixed(2)方法可四捨五入至小數第二位

console.log("-".repeat(50));

/*let arr2 = [97, 100, 85, 77, 89, 77, 65];
let sum1 = 0
for (let i=0;i<arr1.length;i++){ // {}內部稱為scope，執行區塊
    sum1 = sum1 + arr1[i];
};
console.log("arr1元素的總合：", sum1);
console.log("arr1元素的平均：", sum1 / arr2.length);*/

console.log("-".repeat(50));


// 小試身手#4-1
// (1)計算出1加到100的總和

let sum3 = 0;
for(let n = 1; n <= 100; n++){
    sum3 = sum3 + n; // 可寫成sum3 += i;
};

console.log("1加至100的總和：", sum3);

console.log("-".repeat(50));

// (2)

for(let p = 6; p >= 1; p--){
    console.log("*".repeat(p));
};

console.log("-".repeat(50));

// (3)

let name1 = "Jack!"; // 字串本身也有index的概念在
for(let i = 0; i < name1.length; i++){
    console.log(name1[i].repeat(5 - i));
};

console.log("-".repeat(50));


// 回家試身手#2-1
// (1)

/*for(let n = 6; n >= 1; n--){
    console.log("*".repeat(n));
}
for(let n1 = 2; n1 <= 6; n1++){
    console.log("*".repeat(n1));
}*/

for(let i = 1; i <= 11; i++){
    if(i <= 5){
        console.log("*".repeat(7 - i));
    }else{
        console.log("*".repeat(i - 5));
    }  
};

/*
    // 如果if else裡面只有一行要執行，則可省略{}不用寫
    if(i <= 5) console.log("*".repeat(7 - i));
    else console.log("*".repeat(i - 5));
*/

console.log("-".repeat(50));

// (2) word count(字詞統計)

let data = ["a", "b", "c", "c", "c", "a", "d", "b", "b", "a", "c", "f"];
let data_obj = {};
for(let i =0; i < data.length; i++){
    let key = data[i];
    // 0、undefined、null都視為false
    if(key in data_obj){ // 用以檢查key值是否在data_obj物件內 // 可改寫為data_obj[key]，執行上速度較快
        data_obj[key] += 1;
    }else{
        data_obj[key] = 1;
    }
};

console.log(data_obj);

console.log("-".repeat(50));

// 檢查key是否存在於Object中
let data2 = {"name" : "Jack", "age" : 26};
console.log("age" in data2); // in本身也是一個運算值

console.log(data2["name"]); // 取出在Object內部key為name的value值
console.log(data2["gender"]); // 取Object內部不存在的key，則會得到Undefined

console.log("-".repeat(50));

// (3)
// 第一小題： // 雙重迴圈效能較不佳，實例上多用單層迴圈

let rs = 0;
for(let i = 1; i <= 9; i++){
    for(let n =1; n <= 9; n++){
        rs = i * n;
        console.log(i + "x" + n + "=",rs);
    }
};

console.log("-".repeat(50));

// 第二小題：

/*for(let i = 1; i <= 9; i++){
    let message = "";
    for (let n = 1; n <= 9; n++){
        if(i * n > 9){
            message = message + `${i}x${n}=${i * n} `;
        }else{
            message = message + `${i}x${n}=${i * n}  `; // `${i}x${n}=${i * n}  `是一個樣板字面值，可於字串內崁入運算式
        }
    }
    console.log(message);
}*/

// 也可寫成以下：
for(i = 1; i <= 9; i++){
    let message = "";
    for(n = 1; n<= 9; n++){
        // 透過if-else來決定space空白個數。此寫法較不佳，建議用三元運算子
        /*if(i * n > 9) space = " ";
        let space = "";
        else space = "  ";*/

        // 三元運算子  (條件判斷) ? (True的回傳值) : (False的回傳值);
        let space = (i *n > 9) ? " " : "  ";

        message += `${i}x${n}=${i * n}${space}`;

    }
    console.log(message);
}

console.log("-".repeat(50));

// 費氏數列 Fn-2項 + Fn-1項，第0項為0，第一項為1，第三項為1.....

/*let Fibonacci = (n) =>{
    let n1 = 0, n2 = 1;
    let arr3 = [n1, n2];
    for(let i = 2; i <= n; i++){
        arr3[i] = arr3[i -1] + arr3[i - 2];
    };
    console.log("第" + n + "項為：" + arr3[n]);
    };
Fibonacci(6);*/

let Fibonacci = (n) =>{
    if(n === 1 || n === 2) return 1;  //回傳值為1，Fibonacci函式結束
    let r = 0, n1 = 1, n2 = 1;

    // n = 3時，執行1次
    // n = 4時，執行2次
    // n = 5時，執行3次
    // ....
    // 執行n - 2次
    for(i = 0; i < n - 2; i++ ){
        r = n1 + n2;
        n1 = n2; // 移動n1
        n2 = r; //  移動n2
    }
    return r;
}
console.log("第" + (n-2) + "項為：",Fibonacci(8));

for(k = 1; k < 10; k++){
    console.log(Fibonacci(k))
}

console.log("-".repeat(50));


// for-of用法  以較為簡潔的方法取得value
let arr4 = [1,2,5,6];
for(let i of arr4){
    console.log(i); // 得到0 1 2 3
}

console.log("object");

let obj = {
    "name" : "Jack",
    "age" : 26,
    "height" : 180,
};

for(let i of Object.keys(obj)){ // for-of要取Object的值時，要使用Object.keys()
    console.log(obj[i]);
}

console.log("-".repeat(50));

// for-in用法  用來取Object的key較快
for(let i in arr4){
    console.log(i); // 得到0 1 2 3
}

for(let i in arr4){
    console.log(arr4[i]); // 得到1 2 5 6
}

console.log("object");

for(let i in arr4){
    console.log(arr4[i]); // 得到1 2 5 6
}

console.log("-".repeat(50));

//while-loop迴圈 (1)通常用於未知次數 (2)符合所設定的條件時，才會執行迴圈，否則跳離迴圈

let cnt = 0;
let limt = 10;
/*console.log("while loop開始");
while(cnt < 10){ // 只要cnt < 10，就執行while迴圈
    console.log(`第 ${cnt} 次執行`);
    cnt++;
}*/

// 另一種寫法
while(true){
    console.log(`第 ${cnt} 次執行`);
    cnt++;

    if(cnt === limt){
        break;
    }

}

console.log("此while loop結束");

console.log("-".repeat(50));

// 小試身手#4-2
// Math.random()為介在0~1之間的小數

let total_num = [];
while(total_num.length < 6){
    /*console.log(`第 ${time} 個隨機號碼：${Math.floor(Math.random()*49)}`); // 使用Math.floor()可將Math.random()取得的最接近的整數*/
    let num = Math.ceil(Math.random() * 49); // Math.ceil()為小數點無條件進位成整數
    if(!(total_num.includes(num))){ // includes用法判斷num元素是否在total_num陣列內。!則表示相反的意思
        total_num.push(num);
    }else{
        console.log(`${num} 重複了喔!!!`, total_num);
    }
}
console.log("以下為隨機隨取的6個樂透號碼：", total_num);
console.log("以下為排序後之結果：", total_num.sort((a,b) => a-b));

console.log("-".repeat(50));

// includes
console.log([2, 5, 8, 10].includes(3));
console.log([2, 5, 8, 10].includes(5));
console.log(!([2, 5, 8, 10].includes(8))); //前方加上!，會將true轉變為false，false則轉變為true

console.log("-".repeat(50));

// 將Array進行排序

console.log([2,8,5,10].sort((a,b) => a-b)); // 小至大排序
console.log([2,8,5,10].sort((a,b) => b-a)); // 大至小排序

console.log("-".repeat(50));

// 字串的疊加
let a = "Hi~", b = "Jack!";
a += (" " + b); // 表示a變數為字串a加上空格字串，再加上b字串
console.log(a);

console.log("-".repeat(50));

// 字串模板
let name3 = "Jack", msg = "Hello~I'm";
console.log(`${msg} ${name3}`);
