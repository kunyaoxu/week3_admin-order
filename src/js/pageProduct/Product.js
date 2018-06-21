import React, { Component } from 'react';
//import './css/my.css';
//import Mynavbar from './Mynavbar.js';



class Product extends Component {
  constructor(props, context){
      super(props, context);
      this.state = {};

  }

  render() {
//    console.log("render");
    return (
      <div className="Product">
            i am Product
      </div>
    );
  }
}

export default Product;