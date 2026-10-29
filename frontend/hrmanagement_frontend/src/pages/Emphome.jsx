 function Emphome(){
    let currentuser = JSON.parse(localStorage.getItem("currentuser"));
    return(
        <div>
            <h1>welocme {currentuser.name}</h1>
        </div>
    )
}
export default Emphome  