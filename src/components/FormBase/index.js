import { useState } from 'react';
import ButtonField from '../ButtonField';
import SelectField from '../SelectField';
import TextField from '../TextField';
import './FormBase.css';

const FormBase = () => {

    const times = [
        "HORDA", "ALIANÇA"
    ]

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const onSave = (evento) =>{
        evento.preventDefault();
        console.log('form submetido: ', nome, cargo, imagem, time);
    }

    return (
        <section className="FormBase">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do integrante do grupo</h2>
                <TextField valor={nome} aoAlterado={valor => setNome(valor)} required={true} label="Username" placeholder="Digite seu nome..." />
                <TextField valor={cargo} aoAlterado={valor => setCargo(valor)} required={true} label="Cargo" placeholder="Digite seu cargo..." />
                <TextField valor={imagem} aoAlterado={valor => setImagem(valor)} label="Imagem" placeholder="Informe o endereço da imagem..." />
                <SelectField valor={time} aoAlterado={valor => setTime(valor)} required={true} label="Facção" itens={times} />
                <ButtonField>
                        Criar Card
                </ButtonField>
            </form>
        </section>
    );
}

export default FormBase;