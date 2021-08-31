import React, { useState, useEffect, useRef } from 'react'

function Todo2() {
    const inputs = useRef()
    const [todo, setTodo] = useState()
    const [array , setArray]=useState([])
    const handleInputChange = (e) => {
        setTodo(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setArray([...array,todo])
        setTodo('')
    }
    const Delete=(index)=>
    {
        // let updated = array.filter((item)=>{
        //     return console.log(item !==index)
        // })
        index.target.parentElement.remove();
        
    }
    return (
        <div>
            <h1 className='text-center'>Todo list</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder='add your todo item' className='form-control w-50 mx-auto text-center' ref={inputs} value={todo} type='text' name='todo' onChange={(e) => handleInputChange(e)} />
                <button type='submit' className='btn btn-dark w-50 d-block mx-auto text-center mt-2'>add todo</button>
            </form>
            <div>
                <ul className='list-group w-50 mx-auto mt-2'>
                {
                    array.map((value , index)=>(
                        <li key={index} className='list-group-item'>
                            <h5 className='p-0 m-0 d-inline'>{index+1} - {value}</h5>
                            <button onClick={(index)=>Delete(index)} className='btn btn-sm btn-danger float-end m-0 ms-2'>Delete</button>
                            <button className='btn btn-warning btn-sm float-end m-0 ms-2'>Edit</button>
                            
                            </li>
                    ))
                }
                </ul>
            </div>
        </div>
    )
}

export default Todo2
