import { useContext, useState } from "react";
import axios from "axios";
import { CButton, CCard, CForm, CFormInput, CFormLabel } from "@coreui/react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import './style.css'

const Login = () => {
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const {login} = useContext(UserContext);
  const [error, setError] = useState();

  async function userLogin() {
    const data = {
      email: userEmail,
      senha: userPassword,
    }

    try{
      setError("");
      const response = await axios.post(`http://localhost:8080/login`, data);
      if(response)
      login(response.data);
    }catch(err){
        setError("Email e/ou senha inválidos");
    }
  }

  function submitRequest(e) {
    e.preventDefault()
    e.stopPropagation()
    userLogin()
  }

  return (
    <div className="containerLogin">
      <div className="imgLogin"></div>
      <div className="loginForm">
        <CCard className="p-3" style={{background: '#EEE', height: '100%'}}>
          <h2>Login</h2>
          <hr />
          <CForm style={{height: '100%'}} onSubmit={(e) => submitRequest(e)}>
            <div className="loginInfos">
              <div>
                <CFormLabel htmlFor="email">E-mail</CFormLabel>
                <CFormInput type="email" id="email" onChange={(e) => setUserEmail(e.target.value)} />                
              </div>

              <div>
                <CFormLabel htmlFor="password">
                  Senha
                </CFormLabel>
                <CFormInput type="password" id="password" onChange={(e) => setUserPassword(e.target.value)} />
              </div>
              
              <CButton color="success" type="submit" style={{color: 'black'}}>Entrar</CButton>
              {
                error && <span style={{color:"red"}}>{error}</span>
              }
              <div className="infos">
                <p>Não possui login? <Link style={{textDecoration: 'none', color: 'green'}} to="/cadastro">Cadastre-se</Link></p>
              </div>
            </div>
          </CForm>
        </CCard>
      </div>
    </div>
  )
}

export default Login;