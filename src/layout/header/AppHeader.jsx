import { useEffect, useState } from 'react'

import Logo from "../../assets/svg/LogoWasteGreen.svg";
import { CCollapse, CContainer, CHeader, CHeaderBrand, CHeaderNav, CImage, CNavItem, CNavLink, CNavbarNav, CNavbarToggler} from '@coreui/react';
import * as icon from '@coreui/icons';
import CIcon from '@coreui/icons-react';

export function AppHeader() {
  const [visible, setVisible] = useState(false)
  const [exibirElemento, setExibirElemento] = useState(false)

  const verificarLarguraTela = () => {
    const larguraTela = window.innerWidth;
    setExibirElemento(larguraTela < 900);
  };

  useEffect(() => {
    verificarLarguraTela();
    window.addEventListener('resize', verificarLarguraTela);
    return () => {
      window.removeEventListener('resize', verificarLarguraTela);
    };
  }, [])

  return (
    <>
      <CHeader style={{padding: '10px 10vw'}}>
        <CContainer fluid>
          <CHeaderBrand href="#"><CImage src={Logo} style={{width: '12rem'}}/></CHeaderBrand>
          {
            exibirElemento === true ? 
            <>
              <div className="d-flex gap-3">  
                <div style={{display: 'flex', alignItems: 'center', border: '1px solid rgba(0, 0, 0, 0.25)', padding: '7px', borderRadius: '100px'}}>
                  <CNavbarToggler onClick={() => setVisible(!visible)}>
                    <CIcon icon={icon.cilMenu} size="xl" />
                  </CNavbarToggler>
                </div>
              </div>
              <CCollapse className="navbar-collapse" visible={visible}>
                <CNavbarNav>
                  <CNavItem>
                    <CNavLink href="#/cadastro" active>
                      Junte-se
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink href="#">Nossa missão</CNavLink>
                  </CNavItem>
                  <CNavItem href="#">
                    Seja parceiro
                  </CNavItem>
                  <CNavItem href="#">
                    Adubo
                  </CNavItem>
                  <CNavItem href="#/login">
                    Entrar
                  </CNavItem>
                </CNavbarNav>
              </CCollapse>
            </>
            : 
            <CHeaderNav>
              <CNavItem>
                <CNavLink href="#/cadastro" active>
                  Junte-se
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">Nossa missão</CNavLink>
              </CNavItem>
              <CNavItem href="#">
                Seja parceiro
              </CNavItem>
              <CNavItem href="#">
                Adubo
              </CNavItem>
              <CNavItem href="#/login" style={{border: '1px solid black', borderRadius: '4px'}}>
                Entrar
              </CNavItem>
              {/* <CNavItem href="#/carrinho">
                <CIcon icon={icon.cilCart} size="xl" />
              </CNavItem> */}
            </CHeaderNav>
          }
        </CContainer>
      </CHeader>
    </>
  )
}
