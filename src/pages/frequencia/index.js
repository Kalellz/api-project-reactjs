import axios from "axios";
import { useState } from "react"

export default function Index(){
    const [texto, setTexto] = useState('');
    const [caractere, setCaractere] = useState('');
    const [resposta, setResposta] = useState('');

    async function verificarFreq(){
        const resp = await axios.get(`http://localhost:5000/dia2/freqcaracter/${texto}/${caractere}`);
        setResposta(resp.data.freq);
    }
    return(
        <main>
            <h1>Frequencia</h1>

            <div>texto:<input type='text' value={texto} onChange={e => setTexto(e.target.value)} /></div>
            <div>letra :<input type='text' maxLength={1} value={caractere} onChange={e => setCaractere(e.target.value)} /></div>

            <div>
                <button onClick={verificarFreq}>Verificar</button>
            </div>
            <div>
                Este texto tem: {resposta}
            </div>
        </main>
    )
}