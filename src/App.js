import './App.css';

import Home from "./Pages/Home.js";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router,Route } from "react-router-dom";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Auth from './Pages/Auth';
import Temp from './Pages/Temp';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Shopping from './Pages/Shopping';
import Nav from './Pages/Nav';
import Admin from './Pages/Admin';
import Addproduct from './Pages/Addproduct';
import Manageproduct from './Pages/Manageproduct';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#Ff7a00',
      },
      secondary: {
       main: '#EEC312',
     },
 
    },
    typography:{
       fontFamily:'Poppins'
    },
    
  });

  return (
    <div >
    <ThemeProvider theme={theme}>   
      <Router>     
      <Switch> 
      <Route exact path="/admin">
              <Admin />
          </Route>
          <Route exact path="/Addproduct">
              <Addproduct />
          </Route>
          <Route exact path="/manageorder">
              <Manageproduct />
          </Route>
      <Route exact path="/shopping">
            <Shopping />
          </Route> 
      <Route exact path="/cart">
            <Cart />
          </Route>
        <Route exact path="/login">      
              <Auth />
          </Route>
          
          <Route exact path="/">
              <Nav />
          </Route>
          <Route exact path="/:id">
              <Product/>
          </Route>
         
          </Switch>
      </Router>         
    </ThemeProvider>
    </div>
  );
}

export default App;
