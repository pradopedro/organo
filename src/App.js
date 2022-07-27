import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import FormBase from './components/FormBase';
import Team from './components/Team';



function App() {

  const times = [
    { "nome": "Horda", "primaria": "#E06B69", "secundaria": "#FDE7E8" },
    { "nome": "Aliança", "primaria": "#FFBA05", "secundaria": "#FFF5D9" }
  ]

  const RacasHor = [
    "Orc",
    "Morto-vivo",
    "Tauren",
    "Troll",
    "Elfo Sangrento",
    "Goblin",
    "Pandaren",
    "Filhos da Noite",
    "Tauren Altamontês",
    "Orc Mag'har",
    "Troll Zandalari",
    "Vulpera"
  ]
  const RacasAli = [
    "Humano",
    "Anão",
    "Elfo Noturno",
    "Gnomo",
    "Draenei",
    "Worgen",
    "Pandaren",
    "Elfo Caótico",
    "Draenei Forjado a Luz",
    "Anão Ferro Negro",
    "Kultireno",
    "Gnomecânico"
  ]

  const [integrantes, setIntegrantes] = useState([]);

  const aoNovoIntegranteAdicionado = (integrante) => {
    console.log(integrante)
    setIntegrantes([...integrantes, integrante])
  }

  return (
    <div className="App">
      <Banner />
      <FormBase times={times.map(time => time.nome)}
        racasH={RacasHor}
        racasA={RacasAli}
        aoIntegranteCadastrado={integrante => aoNovoIntegranteAdicionado(integrante)}
      />
      {times.map(time =>
        <Team key={time.nome}
          nome={time.nome}
          primaria={time.primaria}
          secundaria={time.secundaria}
          integrantes={integrantes.filter(integrante => integrante.time === time.nome)} />)}
      <Footer />
    </div>

  );
}

export default App;
