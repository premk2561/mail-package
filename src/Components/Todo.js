import React, { useState, useRef, createElement } from 'react'

const todosarray = []

function Todo() {
    const [items, setItems] = useState('')
    const [todos, setTodo] = useState([])
    const inputs = useRef()
    const handleInputChange = (e) => {
        setItems(...items, [e.target.value])
    }
    let li = document.createElement('li');
    li.className = 'list-group-item'
    li.addEventListener("dblclick", function (e) {
        e.target.remove()
        alert('item deleted successfully')
    })
    li.addEventListener('click', function (e) { 
        e.target.style.background = '#91C788'
        e.target.style.color='white'
     })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputs.current.value == '') {
            alert('warning you are adding empty item')
        }
        else {
            todosarray.push(inputs.current.value)
            todosarray.forEach((value) => {
                // result +=`<li class="list-group-item">${value}</li>`
                li.innerHTML = value;
                document.querySelector('.list-group').appendChild(li);
            })
        }

        // let out = document.querySelector('.list-group').innerHTML=result;
        setItems('')
    }
    return (
        <div>
            <h1 className='text-center'>Todo list</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder='add your todo item' className='form-control w-50 mx-auto text-center' ref={inputs} value={items} type='text' name='item' onChange={(e) => handleInputChange(e)} />
                <button type='submit' className='btn btn-dark w-50 d-block mx-auto text-center mt-2'>add todo</button>
            </form>
            <div>
                <ul className='list-group w-50 mx-auto mt-2'>

                </ul>
            </div>
        </div>
    )
}

export default Todo
