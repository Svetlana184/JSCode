//console.log("Gosha");
//let age = prompt('Сколько тебе лет?', 100);
//alert(`Тебе ${age} лет!`); //Тебе 100 лет!
//const message = 30;
//message = 50;
//let mes = 10 + " дней до отпуска";
//console.log(mes);
//alert(typeof(mes));
//console.log(0o12)

//const hero = {
    //name: "J",
    //level : 18,
    //kills : 12,
    //deaths: 0,
    //assists: 1,
    //gold: 100000,
    //say : function() {
        //return "со мной мой меч"
    //}
//}
//console.log(hero.name + " " + hero.kills + " " + hero['assists'])

//let user = {
    //name: "John",
    //money: 1000,


    //[Symbol.toPrimitive](hint) {
        //alert(`hint: ${hint}`);
        //return hint == "string" ? `{name: "${this.name}"}` : this.money;
    //}
    //toString(){
        //return this.name;
    //}
//};

//alert(user); //string
//alert(+user); //num
//alert(user + 500) //default


//let chel = {
    //name: "Bob",
    //money: 555,
    //age18 : false,

    //[Symbol.toPrimitive](hint) {
        //alert(`hint: ${hint}`);
        //return hint == "string" ? this.name : hint == "number" ? this.money : this.age18;
    ////}  
//};

//alert(chel);
//alert(chel*2);
//alert(chel==false);
//alert(+chel)

///let a = prompt('Какое "официальное" название JavaScript?', '')
//if (a === "ECMAScript"){
    //alert("Верно!")
//}
//else{
    //alert("Не знаете? ECMAScript!")
//}
//let b = (a === "ECMAScript" ? alert("Верно!") : alert("Не знаете? ECMAScript!"))


//a = prompt('Введите переменную a', 0)
//b = prompt('Введите переменную b', 0)
//let result = (a + b < 4 ? alert("Мало") : alert("Много"))


//let login = prompt('Введите логин', '')
//let message = (login === 'Сотрудник' ? "Привет" : 
    //login === 'Директор' ? "Здравствуйте" : 
    //login === "" ? "Нет логина" : "")
//alert(message)




//let login = prompt("Кто там?", '');
//if(login === "Админ"){
    //let password = prompt("Введите пароль", '');
    //let message = password === "Я главный" ? alert("Здравствуйте!") : 
    //(password === "" || password === null) ? alert("Отменено") : 
    //alert("Неверный пароль");
//}
//else if(login ==="" || login === null){
    //alert("Отменено");
//}else{
    //alert("Я вас не знаю");
//}

//for(let i = 2; i <= 10; i++){
    ///if(i%2===0) alert(i);
//}

//i = 0;
//while(i<3){
    //alert(`number ${i}!`);
    ////i++;
//}

// let x = Number(prompt("Введите первую переменную", ''));
// let y = Number(prompt("Введите вторую переменную", ''));
// let op = prompt("Введите операцию (+, -, /, *, **, %)", '');

// if(y && x){
//     switch(op){
//         case '+':
//             alert(`${x} + ${y} =${x + y}`);
//             break;
//         case '-':
//             alert(`${x} - ${y} =${x - y}`);
//             break;
//         case '/':
//             alert(`${x} / ${y} =${x / y}`);
//             break;
//         case '*':
//             alert(`${x} * ${y} =${x * y}`);
//             break;
//         case '**':
//             alert(`${x} ** ${y} =${x ** y}`);
//             break;
//         case '%':
//             alert(`${x} % ${y} =${x % y}`);
//             break;
//         default:
//             alert("Такой операции нет")
//             break;
//     };
// }
// else{
//     alert("введите числа!")
// }


//1
// let user = {
//     name: "John",
//     years: 30
// };
// let {name: nameUser, years:age, IsAdmin = false} = user;
// alert(nameUser);
// alert(age)
// alert(IsAdmin)
//
//
//
// //2
// let salaries = {
//     "John":100,
//     "Pete":300,
//     "Mary":250
// }
// let maxSalary=0;
// let emp = "";
// for (let s of Object.entries(salaries)){
//     topSalary(s)
// }
// function topSalary([name, salary]){
//     if(maxSalary<salary){
//         maxSalary=salary;
//         emp = name;
//     } 
// }
// alert("Самый высокооплачиваемый сотрудник - " + emp);

// let id1 = document.getElementById("green");
// id1.style.background = "green";
// let id2 = document.getElementById("blue");
// id2.style.background = "blue";

//Task 1
// alert(document.body.firstElementChild) //получаем div
// alert(document.body.firstElementChild.nextElementSibling )//получаем ul
// alert(document.body.firstElementChild.nextElementSibling.lastElementChild)

//Task2

let table = document.getElementById("table");
for (let row of table.rows){
    for(let cell of row.cells){
        if(cell.cellIndex == row.sectionRowIndex){
            cell.style.background = "red"
        }
    }
}