import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { Button } from 'react-bootstrap';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Switch>
          <Route exact path="/">
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
          </Route>
          <Route path="/home">
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
          </Route>
          <Route path="/about">
              <Header></Header>
              <About></About>
              <Footer></Footer>
          </Route>
          <Route path="/service">
              <Header></Header>
              <Services></Services>
              <Footer></Footer>
          </Route>
          <Route path="/contact">
              <Header></Header>
              <Contact></Contact>
              <Footer></Footer>
          </Route>
          <Route path="*">
             <NotFound></NotFound> 
          </Route>
        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
