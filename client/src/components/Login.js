import React, {useState} from 'react'
import axios from 'axios'

function Login() {
    const [user, setUser] =useState({
        username: '',
        password: ''
    })

    const handleLogin = () => {

        axios.post('http://localhost:3001/login', {
            username: user.username,
            password: user.password
        }).then(response => {

            const token = response.data.token
            localStorage.setItem('jsonwebtoken', token)
        })
    }

    const handleTextChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div>
            <input type="text" name="username" onChange={(e) => handleTextChange(e)} />
            <input type="password" name="password" onChange={(e) => handleTextChange(e)} />
            <button onClick={() => handleLogin()}>Login</button>
        </div>
    )
}

export default Login