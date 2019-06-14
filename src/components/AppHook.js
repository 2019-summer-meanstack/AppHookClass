import React, {useState, useEffect} from 'react';


const AppHook = props  =>{

    // const {count, setcount} = useState(10);
    const [count, setCount] = useState(props.initialCount);
    const [tasks, setTask] = useState([]);
    const [name, setName] = useState('marie');

    useEffect(() =>{
        console.log('called effect');
        const datas = JSON.parse(localStorage.getItem('task'));
        if(datas){
            setTask(datas);
        }
    }, []);

    useEffect(() =>{
        document.title = count;
       localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [count, tasks]);

    const incrementCount = () =>{
        setCount(count + 1);
    };
    const decrementCount = () =>{
        setCount(count - 1);
    };
    const reset = () =>{
        setCount(props.initialCount);
    };
        return(
        <div>
        <h1> React Hooks {name}</h1>
        {/* <p>{myhook[0]}</p> */}
        <p>{count}</p>
        <button onClick={incrementCount}>+1</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrementCount}>-1</button>
        <input value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
    );
};

export default AppHook;