import React, { Component } from 'react';
class Subscriptions extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            error:false,
            success:false,
        }
    }
    handleChange=(e)=>{
     this.setState({
         email:e.target.value
     })
    }
    saveSubscription = (email)=>{
    const url_subscription = `http://localhost:3004/subcriptions`;
    fetch(url_subscription,{method:'POST',headers:{'Accept':'application/json','Content-Type':'application/json' },body:JSON.stringify({email}) })
    .then(res=>res.json()).then(()=>{
       this.setState({
           email:'',
           success:true

       })
    });
    }
    clearMsg = () =>{
      setTimeout(()=>{
         this.setState({
          error:false,
          success:false
         })
        },2000);
    }
    handleSumit = (e)=>{
        e.preventDefault();
        let email = this.state.email;
        let regex = /\S+@\S+\.\S+/;

        if(regex.test(email)){
             // Save to Db.json
             console.log(email);
             this.saveSubscription(email);
        }else{
            // Error handle
            this.setState({
               error:true
            })
        }

        this.clearMsg();
    }
    render() {
        return (
            <div className="subscribe">
                <h3>Subscribe to us</h3>
                <div>
                    <form onSubmit={this.handleSumit} >
                       <input type="email" placeholder="Enter Your Email" onChange={this.handleChange} value={this.state.email}></input>
                       <small className={this.state.error ? 'error show':'error'} >Check Your Email</small>
                       <small className={this.state.success ? 'success show':'success'} >Email Submiited</small>
                       <small>We will not Spam</small>
                    </form>
                </div>
            </div>
        );
    }
}

export default Subscriptions;