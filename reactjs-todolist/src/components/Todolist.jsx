export default function TodoList (){

    let todos = [
        'go to the gym',
        'eat veg'  ,
        'pick up kids'
    ]

    return(
        <ul>
            {todos.map((todo, todoIndex) => {
                return (
                    <li key= {todoIndex}>{todo} </li>
                )
            })}
        </ul>
    )
}