// Practice.jsx
function Practice() {
    // JS의 변수 선언 : const, let
    const isAdmin = false;
    const admin = isAdmin ? "admin" : "user";
    const count = 5;
    const newPost = false;
    const cars = ["Avante", "Sonata", "santafe", "Kona"];
    const menu = [ // 객체 배열
        {id:1, name:'Pizza', price: 19500},
        {id:2, name:'Pasta', price: 21300},
        {id:3, name:'Steak', price: 33600},
        {id:4, name:'Salad', price: 13500},
        {id:5, name:'Coffee', price: 6500},
    ]
    return (
        <>
        <h1>JSX 문법 이해하기</h1>
        {/* JSX 주석 */}
        <h2 className={isAdmin ? "admin" : "user"}>조건부 렌더링이란?</h2>
        <p>
            {
                isAdmin ? "관리자" :
                    count > 0 ? `${count}명의 사용자 입장` : "사용자 없음"
            }
        </p>
        <h3>블로그</h3>
        {newPost && <div>
            <h4>새로운 블로그 기사</h4>
            <p>오늘의 경제 이슈는 ...</p>
        </div>}
        <h3>현대자동차 모델 리스트</h3>
        <ul>
            {
                cars.map((car, index) => (
                    <li key={index}>{car}</li>
                ))
            }
        </ul>
        <h3> Our Best Menu</h3>
        {
            menu.map((m, idx) => (
                <div key={m.id}>
                    <p>{m.name}({m.price}원)</p>
                </div>
            ))
        }
        </>
    )
}

export default Practice;