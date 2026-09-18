// Shape2.jsx
import Rect from "./Rect";
import Circle from "./Circle"
const Shape2 = () => {
    return (
        <>
        <Rect width={4} height='6' /> {/* 하위 컴포넌트에 속성으로 데이터 전달*/}
        <Rect width={9} />
        <Circle radius={5} />
        </>
    )
}

export default Shape2;