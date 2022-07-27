import './TeamMember.css'

const TeamMember = ({nome, imagem, cargo,color,raca}) => {
    return (
        <div className='integrante-card'>
            <div className='cabecalho' style={{backgroundColor: color}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4 style={{color: color}}>{nome} - {raca}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    );
}

export default TeamMember;