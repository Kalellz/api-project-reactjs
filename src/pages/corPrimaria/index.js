import axios from "axios";
import { useState } from "react"

export default function Index(){
    const [cor, setCor] = useState('');
    const [resposta, setResposta] = useState('');
    async function VerificarCorPrimaria(){
        const resp = await axios.get('http://localhost:5000/dia2/corprimaria/' + cor);
        if(resp.data.resposta === true){
            setResposta("é Primaria")
        } else{
             setResposta("não é Primaria")
        }
    }
    return(
        <main>
            <h1>Cor Primaria</h1>
            <input type='text' placeholder="escolha sua cor:" value={cor} onChange={e => setCor(e.target.value)}></input>
            <button onClick={VerificarCorPrimaria}>Verificar</button>
            <div>
                essa cor {resposta}
            </div>
        </main>
    )
}