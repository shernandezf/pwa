const { useEffect, useState } = require("react");

function Marvel (){
    const [hero, setHero] = useState([]);
    
    useEffect(()=>{
        fetch("https://gateway.marvel.com:443/v1/public/characters?apikey=4bf47ce7ef0d15bb3f4139be2a12dd2c&ts=a timestamp&hash=c4e51dc55b7086f79547ec5133d8055e",{
            method: "GET",
              Headers: {
                "Content-Type": "application/json"
              }
        })
        .then(data => data.json()).then(data => {
           setHero(data);
       })
   }, []);

    return(
        <div>
            <h1>Joke</h1>
            <p>{console.log(hero)} asd</p>
           
        </div>
    )
}
export default Marvel;