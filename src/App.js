import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addTd, decrement, deleteTd, increment} from "./redux-toolkit/todo-toolkit-reducer";

const takeTdName = () => {
    return prompt('Enter todo text')
}

function App() {
    const count = useSelector(state => state.todoToolkit.count)
    const todos = useSelector(state => state.todoToolkit.todos).map((td, index) => {
        return (
            <div key={td.id} className='todo-container'>
                <p key={td.id} className='todo-item'>{td.text}</p>
                <button className='delete-btn' key={index} onClick={() => dispatch(deleteTd(index))}>X</button>
            </div>
        )
    })
    const dispatch = useDispatch()

    return (
        <div className='wrapper'>
            <div className='container'>
                <h1>Increment / Decrement - TODO List</h1>
                <button className='btn' onClick={() => dispatch(increment(1))}>Increment</button>
                <button className='btn' onClick={() => dispatch(decrement(1))}>Decrement</button>
                <p className='count'>{count}</p>

                <div className='todo'>
                    {todos}
                </div>
                <button className='btn' onClick={() => dispatch(addTd(takeTdName()))}>Add new todo</button>


            </div>
        </div>

    );
}

export default App;
