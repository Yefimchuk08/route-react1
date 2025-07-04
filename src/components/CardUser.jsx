// import "./card.css"
function CardUser({props})
{
    console.log("Render card")
    return(
        <div id="user">
            <h2>User</h2>
            <h3>Name: {props.name} {props.lastname}</h3>
            <p>Age: {props.age}</p>
            <p>Gender: {props.gender}</p>
            <p>Email:{props.email}</p>
            <p>Username: {props.username}</p>
            <img src="https://dummyjson.com/icon/emilys/128" alt="" />
        </div>
    )
}
export default CardUser