import React, { Component } from 'react';
import './css/style.css';
import './css/my.css';
import Header from './js/Header.js';

import Home from './js/pageHome/Home.js';
import Orders from './js/pageOrders/Orders.js';
import Product from './js/pageProduct/Product.js';



class App extends Component {
  constructor(props, context){
      super(props, context);
      this.state = {navstate: 0,
                   };

      this.setNavstate = this.setNavstate.bind(this);
  }

  setNavstate(id){
      this.setState({navstate: id});
  }

  render() {
    const navstate = this.state.navstate;
    let output = null;
    switch(navstate){
        case 0:
            output = <Home/>;
            break;
        case 1:
            output = <Orders/>;
            break;
        case 2:
            output = <Product/>;
            break;
    }
    
    return (
      <div className="App">
          <Header navstate={navstate} setNavstate={this.setNavstate}/>
          <div className="main">
              {output}
          </div>
      </div>
    );
  }
}

export default App;
