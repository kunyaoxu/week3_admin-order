import React, { Component } from 'react';
import '../../css/pageHome/Transwebitems.css';
//import Mynavbar from './Mynavbar.js';



class Transwebitems extends Component {
  constructor(props, context){
      super(props, context);
      this.state = {};
      
      this.getTranswebitems = this.getTranswebitems.bind(this);
  }

  getTranswebitems(){
    return (
        <div className="transwebitem">
            123
        </div>
    );
  }
    
  render() {
//    console.log("render");
    
    return (
      <div className="Transwebitems">
          <div className="transwebitem">
              <i className="icon fab fa-facebook"></i>
              <label className="websitename">Facebook.com</label>
              <label className="number">45,836</label>
              <i className="arrow fas fa-arrow-up"></i>
              <label className="percentage">20%</label>
          </div>
          <div className="transwebitem">
              <i className="icon fab fa-facebook"></i>
              <label className="websitename">Facebook.com</label>
              <label className="number">145,836</label>
              <i className="arrow fas fa-arrow-up"></i>
              <label className="percentage">20%</label>
          </div>
          <div className="transwebitem">
              123
          </div>
          <div className="transwebitem">
              123
          </div>
      </div>
    );
  }
}

export default Transwebitems;