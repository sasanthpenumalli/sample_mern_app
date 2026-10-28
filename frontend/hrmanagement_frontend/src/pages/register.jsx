import {useState} from 'react';



function register()
{
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let [role,setRole]=useState("");
    let handleregister=async(event)=>{
        event.preventDefault();
        let req=await fetch("http://localhost:3000/api/emp/register",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name,email,password,role})
        }); 
        let data=await req.json();
        if(req){
            console.log("data inserted successfully");
            console.log(data);
        }else{
            console.log("data not inserted");
            console.log(data);
        }

    }


    return(<div>
        <h1>Register</h1>
        <from onsubmit={handleregister}>
            <input type="text" 
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name" 
            value={name} ></input><br></br>

            <input type="email"
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}></input><br></br>

            <input type="password"
            placeholder="Enter your password"
            value={password} 
             onChange={(e) => setPassword(e.target.value)}></input><br></br>

            <select value={role} onChange={(e) => setRole(e.target.value)}>

                <option value="">Choose role</option>
                <option value="employee">Employee</option>
                <option value="manager">Manager</option>
            </select>
            <br/>
            <button type="submit">Register</button>
        </from>
    </div>)
}
export default register