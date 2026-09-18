// Rect.jsx
const Rect = ({width, height = 11}) => {
    // 지역변수 선언
    const w = width;
    const h = height;
    let kind = "";
    if (w == h) kind = "정사각형";
    else if (w > h) kind = "넓은사각형";
    else kind = "좁은 사각형";
    return (
        <>
        <h2>* 사각형 도형 학습 *</h2>
        <p>
            <b>가로 = </b>{w} <br/>
            <b>세로 = </b>{h} <br/>
            <b>면적 = </b>{w * h} <br/>
            <b>종류 = </b>{/*(w == h)? '정사각형' : (w > h)? '넓은 사각형' : '좁은 사각형'*/}{kind}
        </p>
        </>
    )
}

export default Rect;