import Row from 'react-bootstrap/Row';
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const { useEffect, useState } = require("react");

function Examen (){
    const [viviendas, setViviendas] = useState([]);
    useEffect(()=>{
        if(!navigator.onLine){
            if(localStorage.getItem("viviendas") === null) {
                setViviendas("Loading...")
            } else {
                setViviendas(localStorage.getItem("viviendas"));
            }
        } else{
        fetch("https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json",{
            method: "GET",
              Headers: {
                "Content-Type": "application/json"
              }
        })
        .then(data => data.json()).then(data => {
            setViviendas(data);
           
       })
    }
   }, []);
   const carta=()=>{
    return(
        <Row className="justify-content-md-center">
        {viviendas.map(vivienda => (
        <>
         <Card key={vivienda.id} style={{ width: "18rem", height: "24rem",marginLeft : 10}} className="mb-3">
                <Card.Img src="https://media.istockphoto.com/id/1415886888/photo/freshly-painted-craftsman-bungalow-house.jpg?b=1&s=170667a&w=0&k=20&c=lWGj1yZBmuZ-FB7401-NraD_tvhE36hw_zF363hsXAY="/>
                <Card.Body >
                <Card.Title >
                    <Link to={"/casas/" +vivienda.id}>
                    {vivienda.name}
                    </Link>
                </Card.Title>
                <Card.Text>{vivienda.address}</Card.Text>
                <Card.Text>{vivienda.phone}</Card.Text>
                </Card.Body>
            </Card>
        </>
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
export default Examen;