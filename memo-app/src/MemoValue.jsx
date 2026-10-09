import { useState, useMemo } from "react";

// MemoValue.jsx
const MemoValue = () => {
    const [data, setData] = useState([1,2,3,4,5,6,7,8,9,10]);

    const total = useMemo(() => {
        console.log("데이터 합계 계산중 ...");
        const value = data.reduce((acc, item) => acc + item, 0);
        return value;
    }, [data]);

    return (
        <div>
            <h1>useMemo 예제</h1>
            <p>Total : {total}</p>
            <button onClick={() => setData([...data, data.length + 1])}>Add Item</button>
        </div>
    );
}

export default MemoValue;