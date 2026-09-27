import { useState } from "react";

// StateArray.jsx
const StateArray = () => {
    // todo 목록들의 배열 상태변수
    const [todos, setTodos] = useState([]);
    // 입력박스에 입력한 todo 텍스트를 저장할 문자열 상태변수
    const [todoText, setTodoText] = useState('');
    // 새로운 todo 객체를 생성하고 todos 배열에 추가하는 함수
    const addTodo = () => {
        if (todoText.trim()) {
            const newTodo = {
                id: Date.now(),
                text: todoText,
                finished: false
            }
            //setTodos(todos.push(newTodo));
            setTodos(prev => [...prev, newTodo]); // 불변성의 법칙
            setTodoText('');
        } else {
            alert("새로운 할일을 입력하세요");
        }
    }
    const toggleTodo = (todoId) => {
        setTodos(prev => prev.map(todo => todo.id === todoId ? 
                            {...todo, finished: !todo.finished} : todo));
    }
    const deleteTodo = (todoId) => {
        setTodos(prev => prev.filter(todo => todo.id != todoId));
    }
    const deleteFinished = () => {
        setTodos(prev => prev.filter(todo => !todo.finished));
    }
    return (
        <>
        <h1>Todo Service</h1>
        <h3>New Todo</h3>
        <input type="text"
                onChange={(e) => setTodoText(e.target.value)} 
                value={todoText}
                onKeyDown={(e) => e.key === 'Enter' && addTodo()}/>
        <button onClick={addTodo}>Add Todo</button>
        <hr/>
        <h3>Todo List</h3>
        {todos.length === 0 ? <span>TODO 목록이 없습니다</span> :
            todos.map((todo)=>(
                <div key={todo.id}>
                    <input type="checkbox" checked={todo.finished}
                        onChange={() => toggleTodo(todo.id)}/>
                    {todo.finished ? 
                    <span style={{color: 'red', textDecoration: 'line-through'}}>{todo.text}</span>
                     : <span >{todo.text}</span>}
                    <button onClick={() => deleteTodo(todo.id)}>DELETE</button>
                </div>
            ))
        }
        <hr/>
        <button onClick={deleteFinished}>완료된 할일 삭제</button>
        <button onClick={() => setTodos([])}>전체 삭제</button>
        </>
    )
}

export default StateArray;