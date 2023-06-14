import {useContext, useState} from 'react';
import { UserContext } from '../../contexts/userContext';

import './style.css'


const Painel = () => {

  const [currentSection, setCurrentSection] = useState();
  const {userData} = useContext(UserContext);
  

  return (
    <main>
        <aside>
            <ul>
                <li><button>Meus Pedidos</button></li>
                <li><button>Fazer Pedido</button></li>
            </ul>
        </aside>
        <section>
        </section>
    </main>
  )
}

export default Painel