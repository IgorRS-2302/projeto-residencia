import { lazy } from 'react'

const Main = lazy(() => import('./views/main/Main'))
const Cadastro = lazy(()=> import('./views/Cadastro/Cadastro'))
const Painel = lazy(()=> import('./views/Painel/Painel'));

export const routes = [
  { path: '/', exact: true, name: 'home' },
  { path: '/main', name: 'Main', element: Main },
  { path: '/cadastro', name: 'Cadastro', element: Cadastro},
  { path: '/painel', name: 'Painel', element: Painel}
]