import './SelectField.css';

const SelectField = (props) =>{
    return (
        <div className='field-select'>
            <label>{props.label}</label>
            <select required={props.required} value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)}>
                {props.itens.map(item => <option value={item} key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default SelectField;