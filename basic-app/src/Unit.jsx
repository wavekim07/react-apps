// Unit.jsx
export default function Unit() {
    // 1인치 = 2.54센티
    // 1미터 = 3.28피트
    const data = [10, 16, 21, 28, 39];
    const unit = 'meter';

    return (
        <>
        <h1>단위 환산</h1>
        {
            data.map((value, idx) => (
                unit == 'meter' ?
                <p key={idx}>{value} meter = {(value * 3.28).toFixed(1)} feet</p> :
                <p key={idx}>{value} inch = {value * 2.54} cm</p>
            ))
        }
        </>
    )
}