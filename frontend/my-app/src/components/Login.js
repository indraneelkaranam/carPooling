import React ,{ Component } from "react";
import Toper2 from './Toper2';
import axios from 'axios';
import Background from './images/663049.jpg';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";
import '../index.css'
var sectionStyle = {
  width: "100%",
  height: "600px",
  
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover' 
};
class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
            info : [],
            email : '',
            password : '',
            result : 'not logged in',
            isAuthenticated : ''
        }   
        }
        handleresultchange(props,info){
            if(props)
            {
                this.setState({result : "logged in" });
                this.setState({isAuthentictaed : "true" });this.props.history.push({pathname : `/login/dashboard`, state : {details : info, valid : "true"}
                
                });               
            }
            else{
              this.setState({isAuthentictaed : "false" });
                this.setState({result : "wrong credentials" });
            }
        }          
        handleemailchange = (event) => {
            this.setState({
                email : event.target.value
            })
        }   
        handlepasswordchange = (event) => {
            this.setState({
                password : event.target.value
            })
        } 
        display(){
            //console.log(this.state.info);
            //console.log("done "+`${this.state.email}`+`${this.state.password}`);
            const emails = this.state.info.map(user=>{ 
                 return (user.email);
            });
            //console.log(emails);
            const passwords = this.state.info.map(user=>{ return user.password});

           
            if (emails.indexOf(this.state.email)===-1) {
                //console.log("goes wrong");
                this.handleresultchange(false);
            }
            else {
                if(passwords[emails.indexOf(this.state.email)]===this.state.password)
                {
                    this.handleresultchange(true,this.state.info[emails.indexOf(this.state.email)]);
                }
                else
                {                   
                    this.handleresultchange(false);
                }
            }
        }             
        handlesubmit = (event) => {
            event.preventDefault();
            axios.get('http://127.0.0.1:8000/api/')
            .then(res=>{
                this.setState({
                    info : res.data
                });
                this.display();
            });
            //console.log("extracted "+ this.state.info);
           
        }
                          
render() {
  return (
     <div>
          <Toper2/> 

      <MDBContainer style={ sectionStyle }>
     
             <br />
             <br />       
      <MDBRow center>
      
        <MDBCol md="6">
          <MDBCard >
            <MDBCardBody> 
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Login:
                </h3>
              </MDBCardHeader>
              <form onSubmit={this.handlesubmit}>
                <div className="grey-text">
                  <MDBInput
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    value = {this.state.email} onChange={this.handleemailchange}
                  />
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    value = {this.state.password} onChange={this.handlepasswordchange}
                  />
                </div>

              <div className="text-center mt-4">
                <MDBBtn
                  color="light-blue"
                  className="mb-3"
                  type="submit"
                >
                  Login
                </MDBBtn>
              </div>
              </form>
              <div>
                  {this.state.result}
                  </div>
              <MDBModalFooter>
                <div className="font-weight-light">
                  <p>Not a member? Sign Up</p>
                  <p>Forgot Password?</p>
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
       
      </MDBRow>
    </MDBContainer>
    </div>
  );
}
}
export default Login;