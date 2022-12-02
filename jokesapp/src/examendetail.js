
import { useParams } from "react-router-dom";
const { useEffect, useState } = require("react");

function ExameDetail (){
    const params = useParams();
    const [detalle, setDetalle] = useState([]);
    let listavivienda=[]
    let contador=0
    useEffect(()=>{
        if(!navigator.onLine){
            if(localStorage.getItem("detalle") === null) {
                setDetalle("Loading...")
            } else {
                setDetalle(localStorage.getItem("detalle"));
            }
        } else{
        fetch("https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json",{
            method: "GET",
              Headers: {
                "Content-Type": "application/json"
              }
        })
        .then(data => data.json()).then(data => {
            setDetalle(data);
           
       })
    }
   }, []);

   const limitarViviendas = () => {
    detalle.map(vivienda =>{
        if(vivienda.homeId===params.casaId){
           listavivienda.push(vivienda)
        } 
    })
  };
  const carta=()=>{
    return(
        <div>
            <table className="table">
                <thead className="thead-dark">
                <tr >
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Device</th>
                    <th scope="col">Value</th>
                </tr>
                </thead>
                <tbody>
                {listavivienda.map(vivienda => (
                    <>
                        <tr key={vivienda.id}>
                        <td>{contador=contador+1}</td>
                        <td>{vivienda.homeId}</td>
                        <td>{vivienda.type}</td>
                        <td>{vivienda.name}</td>
                        </tr>
                       
                    </>
                ))}
                </tbody>
            </table>
        </div>
    )
   }
   return(
    <div>
        {limitarViviendas()}
        {console.log(listavivienda)}
        <h1>hola</h1>
        {carta()}
    </div>
   );
}

export default ExameDetail;