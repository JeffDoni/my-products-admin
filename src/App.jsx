import Admin from './pages/Admin';
import Login from './pages/Login';
import CompanyProfile from './pages/CompanyProfile';
import { Route, Switch } from 'react-router-dom';

function App() {

  return (
   <Switch>
    <Route exact path="/admin" component={ Admin }/>
    <Route exact path="/" component={ Login }/>
    <Route exact path="/companyprofile" component={ CompanyProfile }/>
  </Switch>
   
  )
}

export default App
