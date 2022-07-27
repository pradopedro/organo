import TeamMember from '../TeamMember';
import './Team.css';

const Team = (props) => {
    return (
        props.integrantes.length > 0 &&
        <section className="team-section" style={{ backgroundColor: props.secundaria }}>
            <h3 style={{ borderColor: props.primaria }}>{props.nome}</h3>
            <div className='integrantes'>
            {props.integrantes.map( integrante => <TeamMember  color={props.primaria} key={integrante.nome} nome={integrante.nome} cargo={integrante.cargo} imagem={integrante.imagem} raca={integrante.raca}/> )}
            </div>
        </section>
    );
}

export default Team;