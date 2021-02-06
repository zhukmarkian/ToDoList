import React,{useState,} from 'react'
import PropTypes from 'prop-types'
function AddToDo({onCreate}){
    const [value,setValue]=useState('')
    function submitHandler(event){
        event.preventDefault()

        if(value.trim()){
            onCreate(value)
            setValue(' ')
        }
    }

    return(
        <form  onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <button type='submit'>add to do list </button>

        </form>

    )
}
AddToDo.propTypes={
    onCreate:PropTypes.func.isRequired,
}
export default AddToDo
