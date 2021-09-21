import React, { useState, useEffect} from "react";

import "./styles.css";

function Home() {
  const [codIBGE, setCodIBGE] = useState('')
  const [municipio, setMunicipio] = useState('')
  const [estado, setEstado] = useState('')
  const [cadastro, setCadastro] = useState([])

  function handleAddClient(event){
    event.preventDefault();
    const data = {
      id: new Date().getTime(),
      codIBGE,
      municipio,
      estado,
    }
    if(codIBGE === '' || municipio === '' || estado === ''){
      alert('Favor preencher o campo que está vazio')
      return
    }

    setCadastro([...cadastro,data])
    setCodIBGE('')
    setMunicipio('')
    setEstado('')
  }
  
  function handleDelete(id){
    setCadastro(cadastro.filter(cad => cad.id !== id))
  }

  function validate(codIBGE, municipio, estado){
    if(codIBGE === '' || municipio === '' || estado === ''){
      alert('Favor preencher o campo que está vazio')
      return
    }
  }

  useEffect(()=>{
    function loadData(){
      const storagedCadastros = localStorage.getItem('cadmunicipio:cadastro')
      if(storagedCadastros){
        setCadastro(JSON.parse(storagedCadastros))
      }
    }
    loadData()
  },[])
  
  useEffect(()=>{
    function saveData(){
      localStorage.setItem('cadmunicipio:cadastro', JSON.stringify(cadastro))
    }
    saveData()
  }, [cadastro])

 
  return (
    <>
      <header className="header">
        <h1>Cadastro de Municípios</h1>
      </header>
    
      <main className="content">
        <form className="cadastro" onSubmit={handleAddClient}>
          <label className ="form-title">Código IBGE</label>
          <input name="codIBGE"
          type="text"
          placeholder="Informe o código do IBGE"
          value={codIBGE}
          onChange = {(event) => setCodIBGE(event.target.value)} 
          />
          <label className ="form-title">Município</label>
          <input name="municipio"
          type="text"
          placeholder="Informe o Município"
          value={municipio}
          onChange = {(event) => setMunicipio(event.target.value)} 
          
          />
          <label className ="form-title">Estado</label>
          <input name="estado"
          type="text"
          placeholder="Informe o Estado"
          value={estado}
          onChange = {(event) => setEstado(event.target.value)} 
          />

          <button type="submit" 
          onSubmit={(event) => validate(codIBGE, municipio, estado)}>Enviar</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Código IBGE</th>
              <th>Município</th>
              <th>Estado</th>
              <th colSpan={1}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {cadastro.map(cad =>(
                <tr key={cad.id}>
                  <td >{cad.codIBGE}</td>
                  <td>{cad.estado}</td>
                  <td>{cad.municipio}</td>
                  <td>
                    <button className="Excluir"
                    onClick = {() => handleDelete(cad.id)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}

export { Home };
