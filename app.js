var a = document.getElementById('main');
// var b = document.getElementById('inp');
var inp = document.getElementById('inp');

function createELem() {
    var p = document.createElement('P');
    var txt = document.createTextNode(inp.value);
    p.appendChild(txt);
    // p.innerHTML = b.value;


    p.setAttribute('class', 'para');
    p.setAttribute('id', 'p1');
    var delBtn = document.createElement('BUTTON');
    var delLabel = document.createTextNode('Delete');
    delBtn.appendChild(delLabel);
    delBtn.setAttribute('onclick', 'delTodo(this)');
    p.appendChild(delBtn);
    a.appendChild(p);
    // console.log(p);
    // console.log(b.value);




}
function delTodo(elem) {
    var p = elem.parentNode;
    p.remove();
}
function dltElem(){
    main.innerHTML='';
}
