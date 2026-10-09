import { useCallback, useState, memo } from "react"

// MemoBasic.jsx
function MemoBasic() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    const handleClick = useCallback(() => {
        console.log("Button is clicked!!");
        setCount(count + 1);
    }, []);

    return (
        <div>
            Text : <input type="text" value={text}
                        onChange={e => setText(e.target.value)} />
            <p>count : {count}</p>
            <MyButton onClick={handleClick} label={text} />
        </div>
    );
}

// Memoized Component
const MyButton = memo(( { onClick, label }) => {
    console.log("MyButton is Re-rendered!!");
    return <button onClick={onClick}>{label}</button>
});

export default MemoBasic;