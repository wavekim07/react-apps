import { useEffect, useState } from "react"

// Async.jsx
const Async = ({ userId }) => {
    // 상태변수 정의
    const [user, setUser] = useState(null); // 정상으로 데이터 가져온 것(Fulfillmented)
    const [loading, setLoading] = useState(true); // 데이터 탐색 요청하고 기다리는 중(Pending)
    const [error, setError] = useState(null); // 에러로 결과가 나온 것(Rejected)
    let result = '';

    useEffect(() => {
        let isCancelled = false;

        // 비동기 함수 정의
        async function loadUser() {
            try {
                setLoading(true);
                const response = await fetch(`/api/users/${userId}`);
                if (!response.ok) {
                    throw new Error('사용자 정보를 가져올 수 없습니다.');
                }
                const data = await response.json(); // 읽은 데이터에서 JSON 형식으로 다시 불러옴
                if (!isCancelled) setUser(data); // 상태변수에 데이터 저장하기
            } catch(err) {
                if (!isCancelled) setError(err.message);
            } finally {
                if (!isCancelled) setLoading(false);
            }

        }

        // 비동기 함수 호출
        loadUser();

        return () => {
            isCancelled = true; // 이전 요청을 취소하는 것
        }
    }, [userId]);


    if (loading) result = '데이터 검색 중 ...';
    if (error) result =  '데이터 검색 오류 발생';
    return (
        <div>
            <p>{result}</p>
        </div>
    )
}

export default Async;