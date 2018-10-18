import React, { Fragment }  from 'react';
// Import components

import Header from './component/layout/Header';
import Home from './component/homepage/Homepage';
 
const Layout = ({children}) => {
  return(
  <Fragment>
    <Header/> 
      {children}
      <footer></footer>
  </Fragment>

  )

};


const App = () => (

  <Layout>p
    
    <main>
      {/* <Home /> */}
    </main>
  </Layout>
)







export default App;
