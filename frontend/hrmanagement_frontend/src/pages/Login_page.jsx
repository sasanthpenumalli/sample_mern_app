import {useState} from 'react'

import { useNavigate } from 'react-router-dom'


function Login_page() 
{
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let navigate = useNavigate()    
    let handlelogin = async (event) => {
        event.preventDefault()
        if(email=="admin@gmail.com" && password=="admin123") {
            // Handle successful login
            localStorage.setItem("currentuser", 
                JSON.stringify({"name": "admin", "role": "admin"}));
            navigate('/adminhome')
        } else {
            let req=await fetch("http://localhost:3000/api/emp/login", 
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });
            let data=await req.json()
            console.log(data)
            if(data.user.role=="HR") {
                localStorage.setItem("currentuser", JSON.stringify(data.user));
                navigate('/Hrhome')
            }else{
                localStorage.setItem("currentuser", JSON.stringify(data.user));
                navigate('/EmpHome')
            }
            // Handle failed login
        }
    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handlelogin}>
                <input type="email"
                onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="Enter your email" required />

                <input type="password" 
                onChange={(e)=>setPassword(e.target.value)} name="password" placeholder="Enter your password" required />

                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login_page