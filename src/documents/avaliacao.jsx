import React, { useState } from 'react';
import '../css/styles.css';

function Avaliacao(){

    const [avaliacao, setAvaliacao] = useState(0);
    const [dataAvaliacao, setDataAvaliacao] = useState('');
    const [criticaSugestao, setCriticaSugestao] = useState('');
    const [avaliacaoRealizadas, setAvaliacaoRealizadas] = useState ([]);

    const adicionarAvaliacao = () => {

        if (avaliacao >= 1 && avaliacao <= 5 && dataAvaliacao.trim() !== '' && criticaSugestao.trim() !== '') {
        //se avaliação for maior ou igual a 1 e avalição for menor ou igual a 5 e data da avaliação for diferente de vazio
        //e criticaSugestão for diferente de vazio (condição para verificar se nenum campo está vazio ou preenchido incorretamente)
        const novaAvaliacao = { //adiciona dados de uma nova avaliação
            avaliacao: avaliacao,
            dataAvaliacao: dataAvaliacao,
            criticaSugestao: criticaSugestao
        };

        setAvaliacaoRealizadas([...avaliacaoRealizadas, novaAvaliacao]);

        setAvaliacao(0);
        setDataAvaliacao('');
        setCriticaSugestao('');

    }else { //se os campos não forem preenchidos
          alert('Por favor, preencha os campos corretamente.');
    }

        };

    return (

        <div className="Conteiner">
            <h1> Avaliação do Cardápio </h1>
          
          <div className="inputs">
            <label> Critica e/ou Sugestão: </label>
            <input type="text" className="sugestao" value={criticaSugestao} onChange={(e) => setCriticaSugestao(e.target.value)}/>
            <label>Avaliacao (1 a 5):</label>
            <input type="number" className="avaliacao" value={avaliacao} min="1" max="5" onChange={(e) => setAvaliacao(parseInt(e.target.value))}/>
             
            <label> Data de avaliação </label>
            <input type="date" className="data" value={dataAvaliacao} onChange={(e) => setDataAvaliacao(e.target.value)} />
</div>
            <div className="botao">
                <button onClick={adicionarAvaliacao}> Adicionar Avaliação </button>
                </div>
                <div className="container2">
                <h2> Avaliações Realizadas </h2>
                <ol>
                    {avaliacaoRealizadas.map((avaliacao, index) => (
                        <li key={index}>
                            <b>Avaliação</b> {avaliacao.avaliacao}, <b> Data de Avaliação: </b> {avaliacao.dataAvaliacao}, <b> Crítica e/ou Sugestão</b> {avaliacao.criticaSugestao}
                        </li>
                    ))}
                </ol>
                </div>
            </div>
    );
                    }

 export default Avaliacao;