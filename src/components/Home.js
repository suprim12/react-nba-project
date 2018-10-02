import React, { Component } from 'react'
// Components 
import Sliders from './Slider';
import Subscriptions from './Subscriptions';
import Blocks from './Blocks';
import Poll from './Poll';


const url_home = 'http://localhost:3004/home';
export default class Home extends Component {

  constructor(props){
      super(props)
      this.state={
          home:'',
          blocks:''
      }
  }
  // Fetch
  componentDidMount(){
    fetch(url_home,{method:'GET'}).then(res=> res.json()).then(json=>{
     console.log(json);
     // Update State
     this.setState({
       home:json
     });
    });
  }
  render() {
    return (
      <div>
          <Sliders slides={this.state.home.slider}/>
          <Subscriptions/>
          <Blocks blocks={this.state.home.blocks} />
          <Poll polls={this.state.home.poll}/>
      </div>
    )
  }
}
