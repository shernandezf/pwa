import Row from 'react-bootstrap/Row';
const { useEffect, useState } = require("react");

function Marvel (){
    const [heros, setHeros] = useState([]);
    useEffect(()=>{
        if(!navigator.onLine){
            if(localStorage.getItem("heros") === null) {
                setHeros("Loading...")
            } else {
                setHeros(localStorage.getItem("heros"));
            }
        } else{
        fetch("https://gateway.marvel.com:443/v1/public/characters?apikey=4bf47ce7ef0d15bb3f4139be2a12dd2c&ts=hola&hash=c4e51dc55b7086f79547ec5133d8055e",{
            method: "GET",
              Headers: {
                "Content-Type": "application/json"
              }
        })
        .then(data => data.json()).then(data => {
           setHeros(data.data.results);
           
       })
    }
   }, []);
   const carta=()=>{
    return(
        <Row>
        {heros.map(heroe => (
        <><p key={heroe.id}>{heroe.name}</p><p key={heroe.id}>{heroe.description}</p></>
        ))}  
        </Row>)
   }
    return(
        <div>
            <h1>heroes</h1>
            <Row>
                {carta()}
            </Row>
        </div>
    )
}
export default Marvel;