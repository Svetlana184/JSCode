//1
let table = document.getElementById("age-table");
alert(table);

//2
let labels = table.querySelectorAll('label')
for(let label of labels){
    alert(label);
}

//3
let age = table.querySelector('td')
alert(age)

//4
let form1 = document.querySelector('form');

let forms = document.getElementsByTagName("form")
for (let form of forms){
    if(form.name == "search"){
        alert(form);
        form1 = form;
    }

}

//5
let input = form1.querySelector('label > input:first-child')
alert(input)

//6
input = form1.querySelector('form > input:last-child')
alert(input)


// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.
// Последний input в этой форме.