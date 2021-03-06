import React, {Component} from 'react';
import "boostrap/dist/css/boostrap.min.css"
class App extends Component{
  constructor(){
    super()
    this.state *{
      fullName:'',
      username:'',
      email:'',
      password:''
    }
  }
  changeFullName(event){
    this.setState({
      fullName:event.target.value
    })
  }
  changeUsername(event){
    this.setState({
      username:event.target.value
    })
  }
  changeEmail(event){
    this.setState({
      email:event.target.value
    })
  }
  changePassword(event){
    this.setState({
      password:event.target.value
    })
  }
  render() {
    return( 
      <div>
        <div className='container'></div>
        <div className='form-div'></div>
         <form>
           <input type= "text" placeholder ="Full Name"
           onChange={this.changeFullName}
           value={this.state.fullName}
           className ='form-control form-group'
           />

           <input type='text'
           placeholder='Username'
           onChange={this.changeUsername}
           value={this.state.username}
           className ='form-control form-group'
           />

           <input type='text'
           placeholder='E-mail'
           onChange={this.changeEmail}
           value={this.state.email}
           className ='form-control form-group'
           />

           <input type='text'
           placeholder='password'
           onChange={this.changePassword}
           value={this.state.password}
           className ='form-control form-group'
           />
           <input type='submit' clasName='btn btn-danger btn-block' value='Submit'/>
         </form>
      </div>
    );
  }
}


export default App;
