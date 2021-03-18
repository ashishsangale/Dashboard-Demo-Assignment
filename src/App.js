import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" render={() => <Landing/>}/>
        <Route exact path="/bar" render={() => <Landing/>}/>
        <Route exact path="/pie" render={() => <Landing/>}/>
        <Route exact path="/line" render={() => <Landing/>}/>
        <Redirect to="/"/>
      </Switch>
    </div>
  );
}

export default App;
