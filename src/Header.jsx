import { useState } from "react";

function Header(props) {
    const [value, setValue] = useState("");
    return (
        <>
            <form action="#">
                <input type="text" placeholder="Entrez une valeur" onChange={(e) => {
                  setValue(() => {
                    return e.target.value;
                  });
                }}/>

                <button type="submit" onClick={() => {
                  props.setTodos(() => {
                    return [...props.todos, {value: value, id: props.todos.length, checked: false}];
                  });
                  props.setTodosFilter(() => {
                    return [...props.todos, {value: value, id: props.todos.length, checked: false}];
                  });
                }}>add</button>        
            </form>
        </>
    )
}

export default Header