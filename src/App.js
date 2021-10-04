import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import SeatBooking from './Components/SeatBooking/SeatBooking';
import ConfirmAdmission from './Components/ConfirmAdmission/ConfirmAdmission';


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
          <Route path="/seatBooking">
               <SeatBooking></SeatBooking>
          </Route>
          <Route path="/confirmSeat">
               <ConfirmAdmission></ConfirmAdmission>
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
