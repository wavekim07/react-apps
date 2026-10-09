import { useCallback, useState, memo } from "react";
import { Trash2, CalendarPlus } from "lucide-react";
// F:\ReactApps\memo-app>npm install lucide-react
const TodoItem = memo(( { todo, onDelete }) => {
    return (
        <div>
            <input type="checkbox" checked={todo.completed} />
            {todo.text}
            <button onClick={() => onDelete(todo.id)}>
                <Trash2 size={20} />
            </button>
        </div>
    )
});

const AddTodo = memo(({ onAdd }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // 폼 서브밋하면 웹서버에 전달하는 기본 동작을 방지
        if (input.trim()) {
            onAdd(input.trim());
            setInput('');
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                Todo : <input type="text" value={input} placeholder="할일 ..."
                            onChange={e => setInput(e.target.value)} />
                <button>
                    <CalendarPlus size={20} />
                </button>
            </form>
        </div>
    )
});

const TodoApp = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: '리액트 학습하기', completed: false},
        { id: 2, text: '영화보러 가기', completed: false},
        { id: 3, text: '미팅하기', completed: true},
    ]);

    const addTodo = useCallback((text) => {
        const newTodo = {
            id: Date.now(), text, completed: false
        };
        setTodos(prev => [...prev, newTodo]);
    }, []);
    // Todo 삭제하는 함수
    const deleteTodo = useCallback((id) => {
        setTodos(prev => prev.filter(todo => todo.id != id));
    }, []); // 컴포넌트 생성 시점에 함수 주소를 저장하고 유지함 
    return (
        <div>
            <h1>Todo List</h1>
            {/* 새로운 Todo 추가하기 */}
            <AddTodo onAdd={addTodo} />

            {/* Todo 목록 보여주기 */}
            {
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo}/>
                ))
            }
        </div>
    )
}

export default TodoApp;