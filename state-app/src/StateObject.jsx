import { useState } from "react";

// StateObject.jsx
const StateObject = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        age: 0,
        city: ''
    });
    const updateUser = (field, value) => {
        // setUser를 호출해서 user 값을 변경
        setUser(prev => ({
            ...prev,    // ... : 스프레드 연산자
            [field]: value
        }));
    }
    return (
        <>
        <h2>New User</h2>
        <input type="text" placeholder="Name" onChange={(e) => updateUser('name', e.target.value)}/><br/>
        <input type="text" placeholder="Email" onChange={(e) => updateUser('email', e.target.value)}/><br/>
        <input type="text" placeholder="Age" onChange={(e) => updateUser('age', e.target.value)}/><br/>
        <input type="text" placeholder="City" onChange={(e) => updateUser('city', e.target.value)}/><br/>
        <p>Name : {user.name}</p>
        <p>Email : {user.email}</p>
        <p>Age : {user.age}</p>
        <p>City : {user.city}</p>
        </>
    )
}

export default StateObject;