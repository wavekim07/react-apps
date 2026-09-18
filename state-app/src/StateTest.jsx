// StateTest.jsx
import { useState } from "react"
const CounterTest = ({ init }) => {
    const [count, setCount] = useState(parseInt(init));
    return (
        <>
        <h2>Counter Test</h2>
        <p>count : {count}</p>
        <button onClick={() => setCount(count + 1)}>1 증가</button>
        <button onClick={() => setCount(count - 1)}>1 감소</button>
        <button onClick={() => setCount(parseInt(init))}>초기화</button>
        </>
    )
}
const InputTest = () => {
    const [name, setName] = useState('');
    const handleInput = (e) => {
        setName(e.target.value);
    }
    return (
        <>
        <p>이름 :
            <input type="text" placeholder="Your name"
                onChange={()=>handleInput(event)} />
            <button>등록</button>
            Your Name : {name}
        </p>
        </>
    )
}
const ToggleTest = () => { // 상태 확인 예제
    const [isLightOn, setIsLightOn] = useState(false);

    return (
        <>
        <h2>전구 상태 변경</h2>
        <div>
            <span>{isLightOn ? 'ON' : 'OFF'}</span>
        </div>
        <button onClick={()=>setIsLightOn(!isLightOn)}>{isLightOn ? '끄기' : '켜기'}</button>
        </>
    )
}
const StateTest = () => {
    return (
        <>
        <CounterTest init={5}/>
        <InputTest />
        <ToggleTest />
        </>
    )
}

export default StateTest;