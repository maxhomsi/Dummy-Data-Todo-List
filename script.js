    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]
    
let results = []



    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
const populateTodos = () => {
    for (let i = 0; i < arrayOfTodos.length; i++) {
        let todoList = document.getElementById("todo-list")
        let element = document.createElement("li")
        let text = document.createTextNode(arrayOfTodos[i].title)
        element.appendChild(text)
        todoList.appendChild(element)
    }
}

// const filterToDo = () => {
// return arrayOfTodos. filter ((todo) => todo. userId ===

// }

const getData = () => {
const userinput = document.getElementById("userId") 
console.log(userinput.value)

clearTodos();
setUserId();

} 
 function clearTodos() {
    let todos = document.querySelectorAll('li');
   
    for (let i = 0; i < todos.length; i++) {
    todos[i].remove();
 }
}
function setUserId(){
    const userId = document.getElementById('userId').value;
    console.log("userId is: "+ userId); 
    console.log(arrayOfTodos);
   results = arrayOfTodos.filter(todo => todo.userId === parseInt(userId));
    
    for (let i = 0; i < results.length; i++) {
        let todoList = document.getElementById("todo-list")
        let element = document.createElement("li")
        let text = document.createTextNode(results[i].title)
        element.appendChild(text)
        todoList.appendChild(element)
        console.log(results);
    }
    
}
const completed = () => {
    clearTodos();
    fetchTodos();
    completado();

    
}
function completado(){
    // const completed = document.getElementById('todo-list').value;
    // console.log("Completed?: "+ [completed]); 
    let completado = results.filter(todo => todo.completed === true);
    console.log(completado)
    for (let i = 0; i < results.length; i++) {
        let todoList = document.getElementById("todo-list")
        let element = document.createElement("li")
        let text = document.createTextNode(completado[i].title)
        element.appendChild(text)
        todoList.appendChild(element)
        console.log(results);
    }
}
