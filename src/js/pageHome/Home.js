import React, { Component } from 'react';
import '../../css/pageHome/Home.css';

import Transwebitems from './Transwebitems.js';
import Latestorders from './Latestorders.js';
import { Line } from 'react-chartjs-2';


class Home extends Component {
  constructor(props, context){
      super(props, context);
      this.state = {};
      
      this.componentDidMount = this.componentDidMount.bind(this);
      this.updateCanvas = this.updateCanvas.bind(this);
  }
    
  componentDidMount() {
      this.updateCanvas();
      
  }

  updateCanvas(){

  }

  render() {
//    console.log("render");
      
//    let item = <div className="item background_shadow_padding">
//                   <label>title</label>
//                   <label>54,540</label>
//               </div>;
    
    let canvas_data = {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                label: 'red',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#D0021B',
                borderColor: '#D0021B',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#D0021B',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#D0021B',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 46]
              },
              {
                label: 'green',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#7ED321',
                borderColor: '#7ED321',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#7ED321',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#7ED321',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [70, 88, 46, 66, 86, 99, 50]
              },
              {
                label: 'blue',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#4A90E2',
                borderColor: '#4A90E2',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#4A90E2',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#4A90E2',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [36, 77, 49, 56, 76, 90, 60]
              }]
            };
    return (
      <div className="Home">
          <div className="overview">
              <div className="header">
                  <label>OVERVIEW</label>
                  <div className="timeinfo">time info.</div>
              </div>
              <div className="list">
                  <div className="item background_shadow_padding">
                       <label><i class="fas fa-hand-holding-usd"></i>title red</label>
                       <label className="red">54,540</label>
                  </div>
                  <div className="item background_shadow_padding">
                       <label><i class="fas fa-boxes"></i>title green</label>
                       <label className="green">54,540</label>
                  </div>
                  <div className="item background_shadow_padding">
                       <label className="itemtitle"><i class="fas fa-money-bill"></i>title blue</label>
                       <label className="blue">54,540</label>
                  </div>
              </div>
          </div>
          <div className="activity background_shadow_padding">
              <label className="title">Activity</label>
              <Line data={canvas_data}/>
          </div>
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