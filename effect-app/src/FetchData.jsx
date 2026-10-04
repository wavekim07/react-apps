// FetchData.jsx
import { useState, useEffect } from "react";

const FetchUsers = () => {
    // 상태변수 정의
    const [users, setUsers] = useState([]); // 정상으로 데이터 가져온 것(Fulfillmented)
    const [loading, setLoading] = useState(false); // 데이터 탐색 요청하고 기다리는 중(Pending)
    const [error, setError] = useState(null); // 에러로 결과가 나온 것(Rejected)

    useEffect(() => {
        let isCancelled = false;

        // 비동기 함수 정의
        const loadUser = async () => {
            setLoading(true);
            setError(null);
            try {
                const url = 'https://jsonplaceholder.typicode.com/users?_limit=10';
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('사용자 정보를 가져올 수 없습니다.');
                }
                const data = await response.json(); // 읽은 데이터에서 JSON 형식으로 다시 불러옴
                if (!isCancelled) setUsers(data); // 상태변수에 데이터 저장하기
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
    }, []);

    return (
        <div>
            <h2>JSON User 데이터 가져오기</h2>
            {loading && (
                <p>데이터 검색 중 ...</p>
            )}
            {error && (
                <p>{error}</p>
            )}
            {!loading && !error && (
                <div>
                    {users.map(user => (
                        <p key={user.id}>
                            {user.name} ({user.email}) ; {user.address.city}
                        </p>
                    ))}
                </div>
            )}
        </div>
    )
}

const SearchPosts = () => {
    // 상태변수 정의
    const [query, setQuery] = useState(''); // 질의어 저장을 위한 상태변수
    const [posts, setPosts] = useState([]); // 정상으로 데이터 가져온 것(Fulfillmented)
    const [loading, setLoading] = useState(false); // 데이터 탐색 요청하고 기다리는 중(Pending)
    const [error, setError] = useState(null); // 에러로 결과가 나온 것(Rejected)

    useEffect(() => {
        if (!query.trim()) { // 입력된 검색어가 없으면
            setPosts([]);
            return;
        }
        const fetchPosts = async () => {
            setLoading(true);
            setError(null);
            try {
                const url = `https://jsonplaceholder.typicode.com/posts?q=${query}`;
                const response = await fetch(url);
                const data = await response.json();
                // 검색어가 제목에 있는 걸로 골라냄
                const result = data.filter(post => post.title.includes(query));
                setPosts(result);
            } catch (err) {
                setError('검색 중 오류 발생 : ' + err.message);
            } finally {
                setLoading(false);
            }
        }

        const timeId = setTimeout(() => {
            fetchPosts();
        }, 500)
        
        return () => {
            clearTimeout(timeId);
        }

    }, [query])

    return (
        <div>
            <h2>게시글 검색</h2>
            <input type="text" value={query} placeholder="게시글 제목 검색 ..."
                onChange={(e) => setQuery(e.target.value)} />
            {query && (
                <p>입력된 검색어 : {query}</p>
            )}
            {query && !loading && posts.length == 0 && (
                <p>검색 결과가 없습니다.</p>
            )}
            {posts.length > 0 && (
                <div>
                    {posts.map(post => (
                        <p key={post.id}>
                            <b>{post.title}</b>
                            <span>{post.body.slice(0,60)}...</span>
                        </p>
                    ))}
                </div>
            )}
        </div>
    )
}

const FetchData = () => {
    return (
        <>
        <FetchUsers />
        <SearchPosts />
        </>
    )
}

export default FetchData;