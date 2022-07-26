import './Team.css';

const Team = (props) => {
    return (
        <section className="team-section" style={{ backgroundColor: props.secundaria }}>
            <h3 style={{ borderColor: props.primaria }}>{props.nome}</h3>
        </section>
    );
}

export default Team;