import styled from 'styled-components';
import Button from "../Button";

export const LogoImage = styled.img`
    max-width: 168px;  
/* fazer um resolução de styles em um determinado tamanho de tela usamos @media*/
    @media (max-width: 800px) {
        max-width: 105px;
    }
`;

export const MenuWrapper = styled.nav`
    width: 100%;
    height: 94px;
    background-color: var(--black);

    z-index: 100;
    position:fixed; /*menu fica fixado ao mexer no scroll mouse*/
    top:0;/*Apos utilizar o position fixed o menu acaba ficando deslocado e tendo que ser utilizado top: 0 e left: 0*/
    left: 0%;
    padding-left: 5%; /*deixando a logo mais afastada do canto*/
    padding-right: 5%;

    display:flex;/* aplica a flexibilidade e organiza conteudo, flex por defauld é sempre por linha*/
    justify-content: space-between;/*distribui entre os dois componentes a logo e botão*/
    align-items: center;/* para alinhar no centro do menu*/

    background-color: var(--black);
    border-bottom: 2px solid var(--primary);/*borda do menu*/

    @media(max-width: 800px) { /*Deixa outro tamanho para mobile*/
        height: 40px;
        justify-content: center;
    }
`;

export const ButtonLink = styled(Button)`   
    border: 1px solid var(--white);
    border-radius:4px;
    color: var(--white);
    font-size: 16px;
    font-weight: bold;
    padding: 16px 24px;
    text-decoration: none; /*tira underline do texto*/ 
    
    /*Opção ao passar mouse sobre botão*/
    &:hover,
    &:focus{
        opacity: .5

    }
    

`;
