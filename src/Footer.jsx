function Footer(props) {
    return (
        <>
            <button onClick={() => {
                props.setTodosFilter(props.todos.filter(el => el.checked == false));
            }}>todo</button>

            <button onClick={() => {
                props.setTodosFilter(props.todos.filter(el => el.checked == true));
            }}>done</button>

            <button onClick={() => {
                props.setTodosFilter(props.todos);
            }}>all</button>
        </>
    )
}

export default Footer