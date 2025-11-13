import React from 'react'
import { useState } from 'react'
import '../styling/Login.css'

const Login = () => {
    const [formData, setFormData] = useState(
        {
            username: '',
            email: '',
            password: ''
        }
    );
    const handleSubmit = (e) => {
        e.preventDefault();
        const url = "http://localhost:5000/api/login";
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        console.log("Form submitted");
    }
  return (

    <div>

        <h1>Login as Student / Admin</h1>
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Username' 
                onChange={(e)=>{setFormData({...formData , username : e.target.value})}} />
                <input type="email" placeholder='Email' 
                onChange={(e)=>{setFormData({...formData , email:e.target.value})}}/>
                <input type="password" placeholder='Password' 
                onChange={(e)=>{setFormData({...formData , password:e.target.value})}}/>
                <button type="submit" >Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login