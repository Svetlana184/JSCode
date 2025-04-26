let count = 0;
for(let li of document.querySelectorAll('li')){
    let count_children = li.querySelectorAll('li');
    alert(li.firstChild.data + ":" + count_children);
    count++;

}
alert(count)