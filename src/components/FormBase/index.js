import TextField from '../TextField';
import './FormBase.css';

const FormBase = () => {
    return (
        <section className="FormBase">
            <form>
                <h2>Preencha os dados para criar o card do integrante</h2>
                <TextField label="Nome" placeholder="Digite seu nome..." />
                <TextField label="Cargo" placeholder="Digite seu cargo..." />
                <TextField label="Imagem" placeholder="Informe o endereço da imagem..." />
            </form>
        </section>
    );
}

export default FormBase;