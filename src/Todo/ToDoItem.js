import React , {useContext}from 'react'
import PropTypes from 'prop-types'
import Context from "../context";
function ToDoItem({todo,index,onChange}){
    const {removeTodo}=useContext(Context)
    const clases=[]
if (todo.status){
        clases.push('done')
    }
    return(
        <li>
            <span className={clases.join(' ')}>
                <input type='checkbox' checked={todo.status} onChange={()=>onChange(todo.id)}/>

            <strong>{index + 1}</strong>

            {todo.title}
        </span>
            <button onClick={()=>removeTodo(todo.id)}> delet</button>
        </li>
    )
}
ToDoItem.propTypes={
    todo:PropTypes.object.isRequired,
    index:PropTypes.number,
    onChange:PropTypes.func.isRequired,
}
export default ToDoItem
