import Home from './Home';
import Navbar from './Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Contact from './Contacts';
import Service from './Service';
import About from './About';
import './App.css';
import { Switch,Route, Redirect } from 'react-router';
const App = () => {
  return(
    <>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/service" component={Service}/>
      <Redirect to="/"/>
      </Switch>
    </>
  ) 
}
export default App;
