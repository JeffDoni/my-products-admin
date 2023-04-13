import Admin from './pages/Admin';
import Login from './pages/Login';
import { Route, Switch } from 'react-router-dom';

function App() {

  return (
   <Switch>
    <Route exact path="/admin" component={ Admin }/>
    <Route exact path="/" component={ Login }/>
  </Switch>
   
  )
}

export default App
