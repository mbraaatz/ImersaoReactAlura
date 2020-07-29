import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo_miflix.png';
import './Menu.css';
import Button from '../Button';


// Criar componente vai ter uma função que retorna html

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
               <img className="Logo" src={Logo} alt="Logo MiFlix" /> 
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}
//Menu é nome da função, obrigatório ser Maiusculo a primeira letra.

export default Menu;
//exportar pra conseguir importar em outros lugares