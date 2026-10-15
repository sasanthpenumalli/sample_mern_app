import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
function adminlogin() {
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    let navigate = useNavigate();
    let [error, setError] = useState("")
    let login = (event) => {
        event.preventDefault()
        // Handle login logic here
        if(username === "admin" && password === "admin") {
            console.log("Login successful")
            navigate('/adminhome')
        } else {
            console.log("Invalid username or password")
            setError("Invalid username or password")
        }
    }
  return (
    <div>
        <form onSubmit={login}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username"></input>
            <br/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"></input>
            <br/>
            <button type="submit"> Admin Login</button>
        </form>
        {error && <div className="alert alert-danger">{error}</div>}
    </div>
  )
}          
export default adminlogin