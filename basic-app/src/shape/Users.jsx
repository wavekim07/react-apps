// Users.jsx
const UserCard = ({name, job, avatar}) => {
    return (
        <>
        <h2 style={{color: avatar}}>{name}</h2>
        <h4>{job}</h4>
        </>
    )
}
const Users = () => {
    const users = [
        {name:'Peter', job:'Designer', avatar:'#22df13'},
        {name:'Harry', job:'Programmer', avatar:'#de2211'},
        {name:'James', job:'Designer', avatar:'#2233ff'},
    ];
    // 이벤트 함수들을 정의
    const handleClick = (r) => {
        //alert("Test");
        const size = r * r * 3.14;
        alert("Circle size is " + size);
    }
    return (
        <>
        <h1>Our Members</h1>
        {
            users.map((user, index) => ( 
                <UserCard key={index} name={user.name}
                    job={user.job}
                    avatar={user.avatar} />
                ))
        }
        <button onClick={() => handleClick(5)}>Click Me</button>
        </>
    )
}
export default Users;