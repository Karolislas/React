import React, { Component } from 'react';
//import { Navbar, NavbarBrand } from 'reactstrap';
//import Menu from './components/MenuComponent';
import Main from './components/MainComponent';
import './App.css';
//import { DISHES } from './shared/dishes';

class App extends Component {

  /*constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div>
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={this.state.dishes} />
      </div>
    );
  }*/

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }  
}

export default App;