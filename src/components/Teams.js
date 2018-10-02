import React, { Component } from 'react'
import {Link} from 'react-router-dom'
const url_teams= 'http://localhost:3004/teams';   
export default class Teams extends Component {
    constructor(props){
        super(props);
        this.state={
            teams:[],
            filterd:[],
            keyword:''
        }
    }
    componentDidMount(){
        fetch(url_teams,{method:'GET'}).then(res=>res.json()).then(json=>{
            this.setState({
            teams:json,
            filterd:json
            });
        });
    }
    handleChange = (e)=>{
        const keyword = e.target.value;
        // Check
        if(keyword !== ''){
            const list = this.state.teams.filter((item)=>{
                return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
            });
            this.setState({
                filterd:list,
                keyword:e.target.value
            })
        }
        else{
            this.setState({
               filterd:this.state.teams,
               keyword:keyword
            });
        }
    }
 getList = ({filterd})=>{
       return filterd.map((item)=>{
           return(
               <Link to={`/team/${item.name}`} key={item.id} className="team_item">
                 <img src={`/images/teams/${item.logo}`} alt={item.name}/>
               </Link>
           )
       })
 }
  render() {
    return (
      <div className="team_component">
            <div className="teams_input">
               <input type="text" placeholder="Search for team" onChange={(e)=>this.handleChange(e)} value={this.state.keyword}></input>
            </div>
            <div className="teams_container">
                {this.getList(this.state)}
            </div>
      </div>
    )
  }
}
