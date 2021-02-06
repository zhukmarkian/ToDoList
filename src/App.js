import React from 'react'
import ToDoList from "./Todo/ToDoList";
import './Todo/Draw.css'
import Context from "./context";
import AddToDo from "./Todo/AddToDo";
function App() {


    const [todos,setTodos] = React.useState([
        {id:1,status:false,title:'to buy eggs'},
        {id:2,status:false,title:'to buy milk'},
        {id:3,status:true,title:'to buy meat'},
        {id:4,status:false,title:'to buy bread'},
        {id:5,status:true,title:'to buy cheese'},
    ])


    function toggleTodo(id){
        setTodos ( todos.map(todo=>{
            if(todo.id === id){
            todo.status = !todo.status
            }
            return todo
        })
        )}
        function removeTodo(id){
        setTodos(todos.filter(todo=>todo.id !==id))
        }
        function addTodo(title){
        setTodos(todos.concat([{
            title,
            id:Date.now(),
            status:false
        }]))
        }
    function selectTodo (status) {
        if (setTodos(todos.filter(todo => todo.status !== false))) {
            return status
        }
    }
        function selectTodo1 (status) {
            if (setTodos(todos.filter(todo => todo.status !== true))) {
                return status
            }
        }

  return (
     <Context.Provider value={{removeTodo}} >
   <div className='wrapper'>
     <h2>Product list :</h2>
       <AddToDo onCreate={addTodo}/>
       {todos.length?<ToDoList todos={todos} onToggle={toggleTodo}/>:<p>ran out</p>}
   </div>
          <div >
              <button  onClick={selectTodo}>Completed</button>
              <button  onClick={selectTodo1}>Uncompleted</button>
          </div>
     </Context.Provider>
  );
}

export default App;

