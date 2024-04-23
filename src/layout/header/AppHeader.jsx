import { useEffect, useState } from "react";

import Logo from "../../assets/svg/LogoWasteGreen.svg";
import {
  CCollapse,
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CImage,
  CNavItem,
  CNavLink,
  CNavbarNav,
  CNavbarToggler,
  CButton,
} from "@coreui/react";
import * as icon from "@coreui/icons";
import CIcon from "@coreui/icons-react";

export function AppHeader() {
  const [visible, setVisible] = useState(false);
  const [exibirElemento, setExibirElemento] = useState(false);

  const verificarLarguraTela = () => {
    const larguraTela = window.innerWidth;
    setExibirElemento(larguraTela < 900);
  };

  useEffect(() => {
    verificarLarguraTela();
    window.addEventListener("resize", verificarLarguraTela);
    return () => {
      window.removeEventListener("resize", verificarLarguraTela);
    };
  }, []);

  return (
    <>
      <CHeader style={{ padding: "10px 10vw" }}>
        <CContainer fluid>
          <CHeaderBrand href="#">
            <CImage src={Logo} style={{ width: "12rem" }} />
          </CHeaderBrand>
          {exibirElemento === true ? (
            <>
              <div className="d-flex gap-3">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid rgba(0, 0, 0, 0.25)",
                    padding: "7px",
                    borderRadius: "100px",
                  }}
                >
                  <CNavbarToggler onClick={() => setVisible(!visible)}>
                    <CIcon icon={icon.cilMenu} size="xl" />
                  </CNavbarToggler>
                </div>
              </div>
              <CCollapse className="navbar-collapse" visible={visible}>
                <CNavbarNav>
                  <CNavItem>
                    <CButton>Test</CButton>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink href="#/cadastro" active>
                      Junte-se
                    </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink href="#">Nossa missão</CNavLink>
                  </CNavItem>
                  <CNavItem href="#">Seja parceiro</CNavItem>
                  <CNavItem href="#">Adubo</CNavItem>
                  <CNavItem href="#/login">Entrar</CNavItem>
                </CNavbarNav>
              </CCollapse>
            </>
          ) : (
            <CHeaderNav style={{ gap: "10px" }}>
              <CNavItem>
                <CNavLink
                  style={{
                    color: "#177200",
                    fontWeight: "bold",
                    border: "2px solid #177200",
                    borderRadius: "10px",
                  }}
                  href="#/cadastro"
                  active
                >
                  Junte-se
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  style={{
                    color: "#177200",
                    fontWeight: "bold",
                    border: "2px solid #177200",
                    borderRadius: "10px",
                  }}
                  href="#"
                >
                  Nossa missão
                </CNavLink>
              </CNavItem>
              <CNavItem
                style={{
                  color: "#177200",
                  fontWeight: "bold",
                  border: "2px solid #177200",
                  borderRadius: "10px",
                }}
                href="#"
              >
                Planos
              </CNavItem>
              <CNavItem
                href="#/login"
                style={{
                  padding: "10px 20px",
                  color: "white",
                  fontWeight: "bold",
                  background: "#2ED703",
                  borderRadius: "10px",
                }}
              >
                Entrar
              </CNavItem>
              {/* <CNavItem href="#/carrinho">
                <CIcon icon={icon.cilCart} size="xl" />
              </CNavItem> */}
            </CHeaderNav>
          )}
        </CContainer>
      </CHeader>
    </>
  );
}
