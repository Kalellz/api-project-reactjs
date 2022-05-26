

import axios from "axios";
import { useState } from "react"

export default function Index() {
    const [qntInteiras, setQtdInteiras] = useState();
    const [qntMeias, setMeias] = useState();
    const [diaSemana, setDiaSemana] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');
    const [total, setTotal] = useState(0);

    async function calcular(){
        const resp = await axios.post('http://localhost:5000/dia2/ingressocinema' ,{
            qntInteiras : qntInteiras,
            qntMeias : qntMeias,
            diaSemana : diaSemana,
            nacionalidade : nacionalidade
        })

        setTotal(resp.data.total);
    }
    return(
        <main>
            <h1>Calcular Ingresso</h1>
            
            <div>
                valor de inteiras: <input type='number' value={qntInteiras} onChange={e => setQtdInteiras(Number(e.target.value))} />
            </div>
            <div>
                valor de meias: <input type='number' value={qntMeias} onChange={e => setMeias(Number(e.target.value))} />
            </div>
            <div>
                dia da semana: <input type='text' value={diaSemana} onChange={e => setDiaSemana(e.target.value)} />
            </div>
            <div>
                nacionalidade: <input type='text' value={nacionalidade} onChange={e => setNacionalidade(e.target.value)} />
            </div>
            <div>
                <button onClick={calcular}>Calcular</button>
            </div>
            <div>
                O total é R$ {total}
            </div>
        </main>
    )
}