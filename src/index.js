import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//importando o react-router-dom para a aplicação
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
//Aplicação vai estar inteira com roteamento em volta dela, BrowserRouter vai ficar em volta de todo.
// Em volta da App tem um sistema de roteamento.

// Desafio master blaster na descrição
// Colocar um jogo nessa página: https://www.youtube.com/watch?v=jOAU81jdi-c :)

const Pagina404 = () => (<div>Página 404</div>) 
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

//Route é como vai ser declarada cada pag do site
//Browser route representa as rotas do navegador

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister(); //removido pelos professores na aplicação
