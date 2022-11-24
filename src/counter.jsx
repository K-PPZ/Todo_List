function Counter({props}) {
    const counter = props.counter;
    const setCounter = props.setCounter;
    console.log(props);
    return (
        <>
            <p>Counter works!!!</p>
            <p>counter : {counter}</p>
            <button onClick={()=>{
              setCounter((prevState) => {
                return prevState + 1;
              });
            }}>click</button>
        </>
    )
}

export default Counter;