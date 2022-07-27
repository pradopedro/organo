import { useState } from 'react';
import ButtonField from '../ButtonField';
import SelectField from '../SelectField';
import TextField from '../TextField';
import './FormBase.css';

const FormBase = (props) => {
    

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [raca, setRaca] = useState('');
    const [racasAtual, setRacasAtual] = useState([]);

    const onSave = (evento) => {
        evento.preventDefault();
        props.aoIntegranteCadastrado({ nome, cargo, imagem, time, raca })
        resetFields();
    }

    function resetFields() {
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
        setRaca('');
        setRacasAtual([])
    }

    return (
        <section className="FormBase">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do integrante do grupo</h2>
                <TextField valor={nome} aoAlterado={valor => setNome(valor)} required={true} label="Username" placeholder="Digite seu nome..." />
                <SelectField valor={time} aoAlterado={valor => {
                    setTime(valor)
                    time === "Horda"? setRacasAtual(props.racasA)  : setRacasAtual(props.racasH) 
                }
                } required={true} label="Facção" itens={props.times} />
                <SelectField valor={raca} aoAlterado={valor => setRaca(valor)} required={true} label="Raça" itens={racasAtual} />
                <TextField valor={cargo} aoAlterado={valor => setCargo(valor)} required={true} label="Cargo" placeholder="Digite seu cargo..." />
                <TextField valor={imagem} aoAlterado={valor => setImagem(valor)} label="Imagem" placeholder="Informe o endereço da imagem..." />
                <ButtonField>
                    Criar Card
                </ButtonField>
            </form>
        </section>
    );
}

export default FormBase;