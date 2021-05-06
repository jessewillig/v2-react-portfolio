import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import About from './pages/About';
// need to import everything within router, meaning all the components

function App() {
  return (
<Router>
  <Route exact path='/' component={About} />
  {/* <Route exact path='/' component={ } />
  <Route exact path='/' component={ } />
  <Route exact path='/' component={ } />
  <Route exact path='/' component={ } /> */}
  {/* <MobileNav/> */}
</Router>
  )
}

export default App;
