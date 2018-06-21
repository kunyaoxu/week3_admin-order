import React, { Component } from 'react';
import '../css/Header.css';
//import Mynavbar from './Mynavbar.js';



class Header extends Component {
  constructor(props, context){
      super(props, context);
      this.state = {};
  }

  render() {
//    console.log("render");
    const navs = ["HOME", "ORDERS", "PRODUCT"];
    const { navstate, setNavstate } = this.props;
      
    let navBtns = navs.map((element, index)=>{
        let classname = "navBtn";
        if(navstate === index)
            classname += " active";
        return (<div key={index} className={classname} onClick={()=>{setNavstate(index)}} ><a>{navs[index]}</a></div>);
    });
    
    return (
      <div className="Header d-flex">
          <div className="logo">LOGO.</div>
          {navBtns}
          <div className="user"><a>{"ADMIN"}</a></div>
      </div>
    );
  }
}

export default Header;
