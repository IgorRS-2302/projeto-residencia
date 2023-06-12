import axios from "axios";
import { useState, useEffect } from "react";
import {CFormSelect, CCard, CForm, CFormInput, CFormLabel, CCol, CButton, CRow} from '@coreui/react'
import './style.css'

const Cadastro = () => {
  const [estados, setEstados] = useState();
  const [cidades, setCidades] = useState();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userCNPJ, setUserCNPJ] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [userCity, setUserCity] = useState("")
  const [userEstate, setUserEstate] = useState("")
  const [userType, setUserType] = useState("")
  const [userAdress, setUserAdress] = useState("")
  const [userHouseNumber, setUserHouseNumber] = useState("")

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((res) => setEstados(res.data));
  }, []);

  function setUf(value) {
    const res = value
    var arrayValores = res.split(",");
    setUserEstate(arrayValores[1])

    axios
      .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${arrayValores[0]}/municipios`)
      .then((res) => setCidades(res.data))
  }

  function register() {
    const data = {
      nome: userName,
      cnpj: userCNPJ,
      email: userEmail,
      senha: userPassword,
      estado: userEstate,
      cidade: userCity,
      rua: userAdress,
      numero: userHouseNumber,
      type: userType,
    }

    axios
      .post(`http://localhost:8080/registro`, data)
  }

  function submitRequest(e) {
    e.preventDefault()
    e.stopPropagation()
    register()
  }

  return (
    <>
      <div className="containerRegister">
        <div className="registerForm">
          <CCard className="p-3" style={{background: '#EEE'}}>
            <h2>Registre-se</h2>

            <CForm onSubmit={(e) => submitRequest(e)}>
              <CRow>
                <CCol xs="6">
                  <CFormLabel htmlFor="name">
                    Nome
                  </CFormLabel>
                  <CFormInput type="text" id="name" onChange={(e) => setUserName(e.target.value)} />

                  <CFormLabel htmlFor="email">
                    E-mail
                  </CFormLabel>
                  <CFormInput type="email" id="email" placeholder="email@gmail.com" onChange={(e) => setUserEmail(e.target.value)} />
                  
                  <CFormLabel htmlFor="password">
                    Senha
                  </CFormLabel>
                  <CFormInput type="password" id="password" onChange={(e) => setUserPassword(e.target.value)}  />

                  <CFormLabel htmlFor="cnpj">
                    CNPJ {`(Apenas números)`}
                  </CFormLabel>
                  <CFormInput type="number" id="cnpj" onChange={(e) => setUserCNPJ(e.target.value)} />

                  <CFormLabel htmlFor="categoria">
                    Categoria
                  </CFormLabel>
                  <CFormSelect id="categoria" onChange={(e) => setUserType(e.target.value)}>
                    <option>Escolha uma opção</option>
                    <option value="produtor">Produtor</option>
                    <option value="estabelecimento">Estabelecimento</option>
                  </CFormSelect>
                </CCol>
                <CCol xs="6">
                  <CFormLabel htmlFor="estado">
                    Estado
                  </CFormLabel>
                  <CFormSelect 
                    id="estado"
                    aria-label="Default select example"
                    onChange={(e) => setUf(e.target.value)}
                  >
                    <option>Escolha um estado</option>
                    {estados &&
                      estados.map((estado) => (
                      <option key={estado.id} value={[estado.id, estado.nome]}>
                        {estado.nome}
                      </option>
                      ))}
                  </CFormSelect>

                  <CFormLabel htmlFor="cidade">
                    Cidade
                  </CFormLabel>
                  <CFormSelect
                    id="cidade"
                    aria-label="Default select example"
                    onChange={(e) => setUserCity(e.target.value)}
                  >
                    {
                      !cidades &&
                      <option>Selecione um estado</option>
                    }
                    {cidades &&
                      cidades.map((cidade) => (
                      <option key={cidade.id} value={cidade.nome}>
                        {cidade.nome}
                      </option>
                      ))}
                  </CFormSelect>

                  <CFormLabel htmlFor="endereco">
                    Endereço
                  </CFormLabel>
                  <CFormInput type="text" id="endereco" onChange={(e) => setUserAdress(e.target.value)} />
                  
                  <CFormLabel htmlFor="numero">
                    Número {`(Nº)`}
                  </CFormLabel>
                  <CFormInput type="number" id="numero" onChange={(e) => setUserHouseNumber(e.target.value)} />
                </CCol>
              </CRow>
              <CRow>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <p style={{margin: '0'}}>Já possui login? <span style={{color: 'green'}}>Entrar</span></p>
                  <CButton color="success" type="submit" style={{color: 'white'}}>Cadastrar</CButton>
                </div>
              </CRow>
            </CForm>
          </CCard>
        </div>
        <div className="imgRegister"></div>
      </div>
    </>
  );
};

export default Cadastro;
