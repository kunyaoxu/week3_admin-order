import React, { Component } from 'react';
import '../../css/pageHome/Latestorders.css';
//import Mynavbar from './Mynavbar.js';



class Latestorders extends Component {
  constructor(props, context){
      super(props, context);
      this.state = {};
      
      this.getLatestorders = this.getLatestorders.bind(this);
  }

  getLatestorders(){
    return (
        <div className="latestorder">
            123
        </div>
    );
  }
    
  render() {
//    console.log("render");
    let imageUrl = "https://di-uploads-pod11.dealerinspire.com/mcdonaldautomotivegroup/uploads/2017/05/cta-used.jpg";
//    let imagestyle = {
//        backgroundSize: "cover",
//        backgroundImage: "url(" + { imageUrl } + ")"
//    };
    let imagestyle = {
        backgroundImage: "url(" + imageUrl + ")",
        backgroundSize: "cover",
    };
    return (
      <div className="Latestorders">
          <div className="latestorder">
            <div className="image" style={imagestyle}></div>
            <div className="detail">
                <label className="itemname">i am item name</label>
                <div className="detail_s">
                    <div className="time_total">
                        <div className="gray"><i className="fas fa-clock"></i>2018/6/13</div>
                        <label className="total">total</label>
                    </div>
                    <div className="user_price">
                        <div className="gray"><i className="fas fa-male"></i>jack roman</div>
                        <label className="price">3,200</label>
                    </div>
                </div>
            </div>
          </div>
          <div className="latestorder">
            123
          </div>
          <div className="latestorder">
            123
          </div>
      </div>
    );
  }
}

export default Latestorders;