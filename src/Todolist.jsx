import Todos from "./Todos"

function Todolist(props) {
    return (
        <>
            <ul>
                {props.todos.map((todo) => {
                    return (
                        <Todos key={todo.value} todos={props.todos} setTodos={props.setTodos} todo={todo} />
                    )
                })}
            </ul>
        </>
    )
}

export default Todolist