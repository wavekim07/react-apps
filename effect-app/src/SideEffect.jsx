import { useEffect, useState } from "react";

// SideEffect.jsx
const SideEffect = () => {
    const [data, setData] = useState(['hello']);
    /* 상태변수 변경 -> 렌더링 -> setData 호출 -> 상태변수 변경 -> 렌더링 ... 무한반복
    setData([...data, 'react']);
    console.log('side effect'); */
    useEffect(() => {
        setData([...data, 'react']);
        console.log('side effect'); 
    }, []) // 컴포넌트 마운트 시점에 1번 실행
    return (
        <>
        <h1>{data.toLocaleString()}</h1>
        <button onClick={() => setData([...data, 'front web'])}>Add Data</button>
        </>
    )
}

export default SideEffect;
