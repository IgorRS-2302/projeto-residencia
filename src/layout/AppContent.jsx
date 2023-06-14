import { CContainer, CSpinner } from "@coreui/react";
import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../routes.js";

export function AppContent() {
  return (
    <CContainer fluid className="px-0">
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="main" replace  />} />
          <Route path="/" element={<Navigate to="cadastro" replace  />} />
          <Route path="/" element={<Navigate to="painel" replace  />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}