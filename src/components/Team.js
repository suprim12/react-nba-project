import React, { Component } from 'react'
const url_team  = 'http://localhost:3004/teams';   
export default class Team extends Component {
  constructor(props){
      super(props);
      this.state={
         data: []
      }
  }
  componentDidMount(){
      fetch(`${url_team}?name=${this.props.match.params.id}`,{method:'GET'}).then(res=>res.json()).then(
          json=>{
              this.setState({
                  data:json
              })
          }
      )
  }
  getSquad=(squad)=>{
    return squad.map((item)=>{
        return(
            <div key={item.name} className="squad_item">
              <img alt={item.name} src={`/images/avatar.png`}/>
               <h4>{item.name}</h4>
               <ul>
                   <li>
                       Number:{item.number}
                   </li>
                   <li>
                       PPG:{item.PPG}
                   </li>
                   <li>
                       APG:{item.APG}
                   </li>
                   <li>
                       RPG:{item.RPG}
                   </li>
               </ul>
            </div>
        )
    })
  }
  getData=({data})=>{
    return data.map((item)=>{
        return(
            <div key={item.id} className="team_data_item">
               <div className="left">
                 <img src={`/images/teams/${item.logo}`} alt={item.name}/>
               </div>
               <div className="right">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <div className="squads">
                     {this.getSquad(item.squad)}
                    </div>
               </div>
            </div>
        )
    })
  }
  render() {
    return (
      <div className="team_data">
        {this.getData(this.state)}
      </div>
    )
  }
}
