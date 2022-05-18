//Selectors

const todoInput = document.querySelector(".todo-input" );
const todoButton = document.querySelector(".todo-button" );
const todoList = document.querySelector( ".todo-list" );
const filterOption = document.querySelector(".filter-todos")


//Event Listeners
todoButton.addEventListener( `click`, addTodo );
todoList.addEventListener( `click`, trash );
todoList.addEventListener( `click`, check );
filterOption.addEventListener(`click`, filterTodo)

//Functions



function addTodo ( event )
{
    event.preventDefault();
    //Prevent forms from subbmiting
    

       if (!todoInput.value) {
         return;
       }
    
    // Todo DIV
    const todoDiv = document.createElement( `div` );
    todoDiv.classList.add( "todo" );
//Create LI
    const newTodo = document.createElement( `li` );
    newTodo.innerText = todoInput.value;
    newTodo.classList.add( `todo-item` );
    todoDiv.appendChild( newTodo );
    //Check button
    const completedButton = document.createElement( `button` );
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add( "complete-btn" );
    todoDiv.appendChild( completedButton );
    // Check trash button
     const trashButton = document.createElement( `button` );
    trashButton.innerHTML = `<i class="fas fa-trash"></i>` ;
    trashButton.classList.add( "trash-btn" );
    todoDiv.appendChild( trashButton );
    // Append to do list 
    todoList.appendChild( todoDiv );   
    
  
}

function trash ( event ) {
  const item = event.target;
  //delete todo
//console.log(item.classList[length]);
  if (item.classList[length] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener(`transitionend`, function () {
      todo.remove();
    });
  }
} 
  function check (event) {
 const item = event.target;
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle(`completed`);
  }
}








