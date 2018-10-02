import React, { Component } from 'react'
const url_poll=  'http://localhost:3004/teams';   
export default class Poll extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pollTeams:[]
         }
    }
   fetchPoll(){
       fetch(`${url_poll}?poll=true&_sort=count&_order=desc`,{method:'GET'}).then(res=>res.json()).then(json=>{
           console.log(json);
          this.setState({
             pollTeams:json
          });
       });
   }
   componentDidMount(){
       this.fetchPoll();
   }
   handleClick(count,id){
    fetch(`${url_poll}/${id}`,{method:'PATCH',headers:{'Accept':'application/json','Content-Type':'application/json'},body:JSON.stringify({count:count + 1})}).then(()=>this.fetchPoll() )
   }
   renderPoll(){
      const position = ['1st','2nd','3rd']
       if(this.state.pollTeams){
        return this.state.pollTeams.map((item,index)=>{
            return(
                <div key={item.id} className="poll_item" onClick={()=>this.handleClick(item.count,item.id) }>
                    <img alt={item.name} src={`/images/teams/${item.logo}`}/>
                    <h4>{position[index]}</h4>
                    <div>{item.count} Votes</div>
                </div>
            )
        })
       }

   }
  render() {
    return (
      <div className="polls_wrapper">
      <h3>Vote Your Teams To Be Champion?</h3>
        <div className="polls">
        {this.renderPoll()}
        </div>
      </div>
    )
  }
}
