import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import RootPage from './Components/RootPage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Index() {
  return(
    <div className="App">
    <header className="App-header">
      <div>
        <h1>
          Messaging App
        </h1>

        <h6 style={{marginTop:"-5%"}}>   
          React, Express, Socket-io
        </h6>

          <img src={logo} className="App-logo" alt="logo" />
      </div>
    </header>
    </div>

  );
}

function About() {
  return (
    <header className="App-header"> 
    <div className="App" style={{marginTop:"-10%"}}>
        <h2>FAQ:</h2>
        <h5 style={{textAlign:"left"}}>
          1. Enter a unique room ID (can be combination of letters or numbers)
          <br></br>
          <br></br>
          2. Select your Username
          <br></br>
          <br></br>
          3. Chat away with people in same room ID!
        </h5>
    </div>
        </header>


  )
}

function Users() {
  return <h2>Users</h2>;
}



class App extends Component {
  state = {
    response: '',
  };

  componentDidMount(){
    //test to see if server connects and shows total users
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  componentDidUpdate(){
    //updates the total users
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch(`/getTotalUsers`);
    const body = await response.json();

    //if (response.status !== 200) throw Error(response.message);
      return body;
  };


render(){
  return (
    <div className="App">
      <div style={{backgroundColor: '#282c34', color:'white'}}>

      <Router>

      <AppBar position="static" >
        <Toolbar>

          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div style={{paddingLeft:"60%"}}></div>

          <Button color="inherit" style={{flex:1}}
            component={Link} to="/"
           >Home    
          </Button>

          <Button color="inherit" style={{flex:1}}
            component={Link} to="/about"
            >About
          </Button>

        </Toolbar>
      </AppBar>

      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />

    </Router>

  
      <h2 style={{marginTop:"-5%", paddingBottom:"4%"}}>{this.state.response} users</h2>
    </div>

      <RootPage></RootPage>
    </div>
  );
  }
}

export default App;
