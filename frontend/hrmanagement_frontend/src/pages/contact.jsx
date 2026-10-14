import { useState } from "react"

function contact() {
  let [name, setName] = useState("")
  let [age, setAge] = useState(18)
  let [email, setEmailid] = useState("")
  let [colname,setColname] = useState("VFSTR")
  let Registerform = (e) => {
    event.preventDefault()
    console.log(name, age, email, colname);
  }
  return (
    <div>
      <h1>Contact page called</h1>
      <form onSubmit={Registerform}>
        <input type="text" value={name} placeholder=" enter your Name" onChange={(event) => setName(event.target.value)}></input>
        <br/>

        <input type="number"  value={age} placeholder=" enter your age" onChange={(e) => setAge(e.target.value)}></input>
        <br/>

        <input type="text" value={email} placeholder=" enter your Email" onChange={(e) => setEmailid(e.target.value)}></input>
        <br/>
        <input type="text" value={colname} placeholder=" enter your College Name" onChange={(e) => setColname(e.target.value)}></input>
        <br/> 

        <button type="submit">regsiter</button>
      </form>
    </div>
  )
}
export default contact