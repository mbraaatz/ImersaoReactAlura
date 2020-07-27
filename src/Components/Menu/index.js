import React from 'react';
import Logo from '../../assets/img/logo_miflix.png';
import './Menu.css';
import Button from '../Button';

// Criar componente vai ter uma função que retorna html

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
               <img className="Logo" src={Logo} alt="Logo MiFlix" /> 
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}
//Menu é nome da função, obrigatório ser Maiusculo a primeira letra.

export default Menu;
//exportar pra conseguir importar em outros lugares