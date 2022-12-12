import React, {useState, useEffect} from "react";

function App(){

const [dogPic, setDogPic] = useState("");

useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res=>res.json())
    .then(data=>{
        setDogPic(data.message);
    })
},[]);

if (!dogPic){
    return <h2>Loading...</h2>
}


// Beginning of JSX Return
    return(
        <img alt="A Random Dog" src={dogPic} ></img>
    )
}

export default App;