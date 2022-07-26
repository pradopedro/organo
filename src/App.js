import { useState } from 'react';
import Banner from './components/Banner';
import FormBase from './components/FormBase';
import Team from './components/Team';


function App() {
  const times = [
    {"nome":"Horda","primaria":"#E06B69", "secundaria":"#FDE7E8"}, {"nome":"Aliança","primaria":"#FFBA05", "secundaria":"#FFF5D9"}
  ]


  const [integrantes, setIntegrantes] = useState([]);

  const aoNovoIntegranteAdicionado = (integrante) => {
    console.log(integrante)
    setIntegrantes([...integrantes, integrante])
  }

  return (
    <div className="App">
      <Banner />
      <FormBase aoIntegranteCadastrado={integrante => aoNovoIntegranteAdicionado(integrante)} />
      {times.map(time => <Team key={time.nome} nome={time.nome} primaria={time.primaria} secundaria={time.secundaria}/>)}
    </div>
  );
}

export default App;
