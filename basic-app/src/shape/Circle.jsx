function Circle({radius}) {
    return (
        <>
        <h2>원 도형 학습</h2>
        <p>
            <b>반지름 = </b>{radius} <br/>
            <b>면적 = </b>{(radius * radius * 3.1415).toFixed(1)} <br/>
            <b>둘레 = </b>{(radius * 2 * 3.1415).toFixed(1)} <br/>
        </p>
        </>
    )
}

export default Circle;