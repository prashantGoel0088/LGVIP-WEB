let addtodobutton = document.getElementById('press');
let todolist = document.getElementById('list');
let inputfield = document.getElementById('id');

addtodobutton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText= inputfield.value;
    todolist.appendChild(paragraph);
    inputfield.value="";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration ="line-through";
    })

    paragraph.addEventListener('dblclick', function(){
        todolist.removeChild(paragraph);
    })
    

    
})