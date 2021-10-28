import './App.css';
import {  Route, Switch} from "react-router-dom"
import HomePage from './Pages/HomePage';
import Business from './Pages/Business';
import Technology from './Pages/Technology';
import Science from './Pages/Science';

const App = () => {

  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/categories/:id" component={Business}/>
      <Route exact path="/categories/:id" component={Technology}/>
      <Route exact path="/categories/:id" component={Science}/>
    </Switch>
  );
};

export default App;