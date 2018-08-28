import React, { Component } from 'react';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
//import Contest from "./Components/Contest";



class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      signup    : false,
      login     : false,
      id : 0
    };
    this.toggleSignup = this.toggleSignup.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  toggleSignup(){
    this.setState({signup : !this.state.signup})
  }

  toggleLogin(){
    this.setState({login : !this.state.login})
  }

  render() {
    const props = this.props;
    return (
      <div className="main">
        <MuiThemeProvider theme={THEME}>
          <Header
            {...props}
            brand={'Smart tools'}

            color={'info'}/>
          <Home
            {...props}
            brand={'Smart tools'}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

const THEME = createMuiTheme({
  typography: {
    "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    "fontSize": 18,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  }
});

const styles = {
  root: {
    flexGrow: 1,
  },
  paper: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
