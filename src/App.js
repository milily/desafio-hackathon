import { Fragment } from 'react';
//Components
import Login from './components/login/LoginSite';
import Home from './components/home/HomePage'
import Header from './components/home/Header';
//Styles
import './App.css';
//Authentication with Auth0
import { useAuth0 } from '@auth0/auth0-react' 


function App() {
    const {isAuthenticated, isLoading} = useAuth0()

    if (isLoading){
      return <div><h1>Loading...</h1></div>
    }

    return (
        <div>
            {isAuthenticated ? (
                  <Fragment>
                      <Header />
                      <Home />
                  </Fragment>
                ): <Login />}
        </div>
    );
}

export default App;