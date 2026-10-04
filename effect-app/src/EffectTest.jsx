import { useEffect, useState } from "react"

// EffectTest.jsx
const Basic = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState('Data is loading...');
    const [name, setName] = useState('');
    useEffect(() => {
        console.log('컴포넌트가 마운트 되었음');
        setTimeout(() => {
            setData(data + ' 데이터 읽기 완료!! ');
        }, 3000); // 3초 후에 함수를 호출
    }, [count, name]);
    return (
        <>
        <h2>상태변수 의존 이펙트</h2>
        <p>count : {count}</p>
        <button onClick={() => setCount(count + 1)}>Add Count</button>
        <p>{data}</p>
        <input type="text" name="username" value={name}
            onChange={(e) => setName(e.target.value)} />
        <p>{name}</p>
        </>
    )
}
const CleanUp = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interId;
        if (isRunning) {
            interId = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000); // 1초마다 주기적으로 함수 호출
        }
        // 클린업 함수 정의
        return () => {
            if(interId) {
                clearInterval(interId); // setInterval 함수를 해제
            }
        }
    }, [isRunning]);

    useEffect(() => {
        const handleResize = () => {
            console.log('윈도우 크기 변경');
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <>
        <h2>useEffect 클린업 함수 예제</h2>
        <p>{seconds} 초</p>
        <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? '정지' : '시작'}</button>
        </>
    )
}

const EffectTest = () => {
    return (
        <>
        <Basic />
        <CleanUp />
        </>
    )
}

export default EffectTest;