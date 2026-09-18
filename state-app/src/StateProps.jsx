// StateProps.jsx
import { useState } from "react"

const ChildComp = ({ cash, setCash }) => {
    const handleClick = () => {
        /*setCash(cash + 500) // 현재 cash 값에 500 더한 값 setCash(1500)
        setCash(cash + 500) 
        setCash(cash + 500)
        setCash(cash + 500)*/
        setCash(prev => prev + 500);
        setCash(prev => prev + 500);
        setCash(prev => prev + 500);
        setCash(prev => prev + 500);
    }
    return (
        <>
        <h3>Child Component</h3>
        <p>My cash : {cash}</p>
        <button onClick={handleClick}>Add Cash</button>
        </>
    )
}
// StateProps.jsx
const StateProps = () => {
    const [cash, setCash] = useState(1000);
    return (
        <>
        <h2>Parent Component : 상태변수 생성</h2>
        <ChildComp cash={cash} setCash={setCash}/>
        </>
    )
}

export default StateProps;