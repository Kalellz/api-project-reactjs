import axios from "axios";
import { useState } from "react"

export default function Index(){
    const [numeros, setNumeros] = useState([]);
    const [numero, setNumero] = useState();
    const [resposta, setResposta] = useState('');


    function adicionar(){
        setNumeros([...numeros, numero]);
        setNumero('');
    }
    async function MaiorNumero(){
        const resp = await axios.post('http://localhost:5000/dia2/maiornumero', numeros);
        setResposta(resp.data.maior);
    }

    return(
        <main>

            <h1>Maior Numero</h1>
            <input type='number' value={numero} onChange={e => setNumero(Number(e.target.value))}></input>
            <button onClick={adicionar}>Adicionar Numero</button> 

            <div>
                {numeros.map(item => 
                <div>{item}</div>
                )}
            </div>
            <div>
            <button onClick={MaiorNumero}>Verificar</button><br></br> o Maior numero é: {resposta}
            </div>
        </main>
    )
}