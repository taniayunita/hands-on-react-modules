import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import "./components/Fontawsomeicons"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import LoginPages from "./pages/LoginRegister/LoginPages";
import RegisterPages from './pages/LoginRegister/RegisterPages';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import './App.css';
import Beranda from './pages/Beranda';


function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar/>
        
        <div>
        <Switch>
          <Route path="/beranda" component={Beranda}/>
          <Route path="/" exact component={LoginPages} />
          <Route path="/register" component={RegisterPages} />
        </Switch>
        </div>

        <Footer/>
      </Router>
    </UserProvider>
  );
}

export default App;
