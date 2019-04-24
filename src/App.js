import React, { Fragment }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";


// Import components
import Header from './component/layout/header/Header';
import AllRoutes from './routes';

// import mixins for sass
 
const Layout = ({children}) => {
  return(
  <Fragment>
    <Header/> 
      <main>
        {children}
      </main>
  <GlobalStyle/>
  </Fragment>

  )

};


const Routes = () => (

  <Layout>
      {AllRoutes.map( ({path, component}, k)=> <Route key={k} path={path} component={component} />)}
  </Layout>
)

const App = () => <Router><Switch><Route  exact path='/' component={Routes} /></Switch></Router>

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    };
body {
  height: 100%;
  width:100%;
};
body{
   background-color: black;
   font-size :1.4rem;
};
h1, p{
  font-family:Lily Script One,cursive;
  color: #FFFFFF;
}
p{
  letter-spacing: 3px;
}

`;



export default App;
