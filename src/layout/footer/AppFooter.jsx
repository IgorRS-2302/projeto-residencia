import { CFooter, CImage } from "@coreui/react";
import Logo from "../../assets/svg/LogoWasteGreen.svg";

export function AppFooter() {
  return (
    <CFooter>
      <div>
        <CImage src={Logo} style={{ width: "12rem" }} />
      </div>
      {/* <div>
        <span>Devs: </span>
        <b>Alipio Gomes, Igor Siqueira, João Gabriel, Kennedy Mendes e Wellington Michel.</b>
      </div> */}
    </CFooter>
  );
}
