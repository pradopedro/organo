
import './TextField.css';
const TextField = (props) => {

    const onDigitar = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="field-text">
            <label>{props.label}</label>
            <input value={props.valor} onChange={onDigitar} required={props.required} placeholder={props.placeholder}/>
        </div>
    );
}

export default TextField;