import React, { useState } from 'react';
import './styles.css';

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

        setAvaliacoesRealizadas([...avaliacoesRealizadas, novaAvaliacao]);

        setAvaliacao(0);
        setDataAvaliacao('');
        setCriticaSugestao('');

    }else { //se os campos não forem preenchidos
          alert('Por favor, preencha os campos corretamente.');
    }

        }

    };

    return (

        <div className="Conteiner">
            <h1> Avaliação do Cardápio </h1>
            <label>Avaliacao (1 a 5):</label>
            <input type="number" value={avaliacao} min="1" max="5" onChange={(e) => setAvaliacao(parseInt(e.target.value))}/>
             
            <label> Data de avaliação </label>
            <input type="date" value={dataAvaliacao} onChange={(e) => setDataAvaliacao(e.target.value)} />

            <label> Critica e/ou Sugestão: </label>
            <input type="text" value={criticaSugestao} onChange={(e) => setCriticaSugestao(e.target.value)}/>
            
        </div>
    )
