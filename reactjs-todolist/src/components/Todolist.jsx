import React from 'react'


export default function TodoList (){

    let todos = [
        'go to the gym',
        'eat veg'  ,
        'pick up kids'
    ]

    return(
        <ul className="main">
            {todos.map((todo, todoIndex) => {
                return (
                    <li className="todoItem" key= {todoIndex}>
                        {todo} 
                        <i className="fa-solid fa-pen-to-square"></i>
                    </li>
                )
            })}
        </ul>
    )
}