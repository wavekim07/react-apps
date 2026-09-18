// StateBasic.jsx
import { useState } from "react"; // react 패키지에서 가져오기
const StateBasic = () => {
    // 지역변수 선언
    //let number = 1;
    // 상태변수 정의
    const [point, setPoint] = useState(null);
    const [number, setNumber] = useState(3.5); // 숫자형
    const [name, setName] = useState(''); // 문자형
    const [isActive, setIsActive] = useState(); // 불리언형 
    const [menus, setMenus] = useState([]); // 배열형
    const [product, setProduct] = useState({
        pid: 0,
        name: '',
        price: 0
    }); // 객체형
    const handleClick = () => {
        setNumber(number + 1);
        setName('James');
        setIsActive(false);
        setMenus(['Tea', 'Latte', 'Moca']);
        setProduct({
            pid: 1,
            name: 'Notebook',
            price: 120000
        });
        //alert("Number : " + number);
    }
    return (
        <>
        <h2>Number : {number}</h2>
        <button onClick={handleClick}>Add Number</button>
        <hr/>
        <input type="number" value={point || ''}
            onChange={(e) => setPoint(e.target.value ? parseInt(e.target.value) : null)}
            placeholder="Your point"/>
        <p>Point : {point != null ? `${point}` : '미입력'}</p>
        </>
    )
}

export default StateBasic;