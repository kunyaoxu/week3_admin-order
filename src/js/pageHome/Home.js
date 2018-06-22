import React, { Component } from 'react';
import '../../css/pageHome/Home.css';
import Transwebitems from './Transwebitems.js';
import Latestorders from './Latestorders.js';



class Home extends Component {
  constructor(props, context){
      super(props, context);
      this.state = {};

  }

  render() {
//    console.log("render");
      
    let item = <div className="item background_shadow_padding">
                   <label>title</label>
                   <label>54,540</label>
               </div>;
    return (
      <div className="Home">
          <div className="overview">
              <div className="header">
                  <label>OVERVIEW</label>
                  <div className="timeinfo">time info.</div>
              </div>
              <div className="list">
                  {item}
                  {item}
                  {item}
              </div>
          </div>
          <div className="activity background_shadow_padding">activity在此</div>
          <div className="trans_latest">
              <div className="transaction background_shadow_padding">
                  <label className="title">Transaction Website</label>
                  <Transwebitems />
              </div>
              <div className="latest background_shadow_padding">
                  <label className="title">Latest Orders</label>
                  <Latestorders />
              </div>
          </div>
            
      </div>
    );
  }
}

export default Home;