import { BrowserRouter,Switch ,Route} from 'react-router-dom';

import './App.css';
import NavBar from './components/Header/NavBar/NavBar';
import AllDeals from './components/Pages/Deal/AllDeals';
import Deal from './components/Pages/Deal/Deal';
import Footer from './components/Pages/Footer/Footer';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login/Login';
import PrivateRoute from './components/Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Pages/MyAccount/Dashboard';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route exact path="/home">
        <Home></Home>
        </Route>
        <Route exact path="/alldeals">
        <AllDeals></AllDeals>
        </Route>
        <PrivateRoute exact path="/dashboard">
        <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute exact path="/alldeals/deal/:id">
              <Deal></Deal>
            </PrivateRoute>
        <Route exact path="/login">
        <Login></Login>
        </Route>
        <Route exact path="/order">
        
        </Route>
        <Route  path="*">
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
