
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput,MDBCard, MDBCardBody,MDBIcon } from 'mdbreact'; 

import React, { Component } from 'react';
import { Fragment } from 'react';
import axios from 'axios';
import Toper2 from "./Toper2";
import '../index.css';
import Background from './images/663049.jpg';
var sectionStyle = {
    width: "100%",
    height: "1200px",
    
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover' 
  };
class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname : '',
            lastname : '',
            gender : 'Do Not Prefer To Say',
            date : '',
            password : '',
        }
        
    }
    
    handlefirstnamechange = (event) => {
        this.setState({
            firstname : event.target.value
        })
    }
    handlelastnamechange = (event) => {
        this.setState({
            lastname : event.target.value
        })
    } 
    handlegenderchange = (event) => {
        this.setState({
            gender : event.target.value
        })
    }         
    handlepasswordchange = (event) => {
        this.setState({
            password : event.target.value,
           
        })
    }     
          
    handlesubmit = (event) => {
        
        //alert(`${this.state.firstname} ${this.state.lastname} ${this.state.gender} ${this.state.date} ${this.state.password}`)
        /*axios.post('http://127.0.0.1:8000/api/',{
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            gender : this.state.gender,
            date : this.state.date,
            password : this.state.password
        });*/

           
            event.preventDefault();
        
           this.props.history.push({pathname : `/verifymn`, state : {details : this.state}
    });

    }
    render() {

        return (
            <div>
        <Toper2/>
       
        <MDBContainer style={ sectionStyle }>
        <br />
        <MDBRow center className="h4 text-center py-4">
                    <MDBCol md="6">
                    <MDBCard>
                        <div className="header pt-3 peach-gradient">
                        <MDBRow className="d-flex justify-content-center">
                            <h3 className="white-text mb-3 pt-3 font-weight-bold">
                            Sign Up
                            </h3>
                        </MDBRow>
                        <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
                            <a href="#!" className="fa-lg p-2 m-2 fb-ic">
                            <MDBIcon fab icon="facebook-f" size="lg" className="white-text" />
                            </a>
                            <a href="#!" className="fa-lg p-2 m-2 tw-ic">
                            <MDBIcon fab className="fa-twitter white-text fa-lg" />
                            </a>
                            <a href="#!" className="fa-lg p-2 m-2 gplus-ic">
                            <MDBIcon fab className="fa-google-plus-g white-text fa-lg" />
                            </a>
                        </MDBRow>
                        </div>              
 
                <form onSubmit = {this.handlesubmit}>
                {/*<div>
                <label> FirstName </label>
                <input type = "text" value = {this.state.firstname} onChange={this.handlefirstnamechange} />
                <br />
                </div>*/}
                
                 <MDBRow center >
                     <MDBCol md="10" className="mb-4" > 
                 
                <MDBInput 
                icon="user"
                label="First name "
                group
                type="text"
                validate
                error="wrong"
                success="right"
                value = {this.state.firstname} onChange={this.handlefirstnamechange}
                style={{ maxWidth: "18rem" }}
                
                required
                />
                </MDBCol> 
               
                </MDBRow> 
                
                {/*<div>
                <label> LastName </label>
                <input type = "text" value = {this.state.lastname} onChange={this.handlelastnamechange} /> 
                <br />
                </div>*/}
                 <MDBRow center >
                <MDBCol md="10" className="mb-4">
                <MDBInput
                label="Last name"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                value = {this.state.lastname} onChange={this.handlelastnamechange}
                style={{ maxWidth: "18rem" }}
                icon="user"
                required
                />      
                </MDBCol>
                </MDBRow>          
                {/*<div>
                <label> Gender </label>
                <select  value = {this.state.gender}  onChange={this.handlegenderchange}>
                    <option value = "" >  </option>
                    <option value = "male" > Male </option>
                    <option value = "female"> Female </option>
                </select>
                </div>*/}
                 <MDBRow center>
                <MDBCol md="10" className="mb-4">  
                    <label> Gender </label>              
                    <select className="text-center" value = {this.state.gender}  onChange={this.handlegenderchange}>
                    <option >Choose Gender</option>
                    <option value="Do Not Prefer To Say">Do Not prefer To Say</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                   
                    
                    </select>
                    </MDBCol>
                </MDBRow>
                <br/>
                <br/>                                                         
                <MDBRow center>  
                <MDBCol md="10" className="mb-4">                   
                                
                <label> DateofBirth </label>    
                <input type = "date" onChange = {event => this.setState({date:event.target.value})} required />  
                </MDBCol>
                </MDBRow> 
                <MDBRow center>  
                <MDBCol md="10" className="mb-4">                
                <MDBInput style={{ maxWidth: "19rem" }}
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
                value = {this.state.password} onChange = {this.handlepasswordchange}
                style={{ maxWidth: "18rem" }}
                required
              />      
                </MDBCol>
                </MDBRow>                           
                {/*<div>

                <label> Password </label>    
                <input type = "password" value = {this.state.password} onChange = {this.handlepasswordchange}  />  
                </div> */}                  
                {/*<div>
                    
                    <button type = "submit">Submit</button>
                     
                </div>
                */}
                    <MDBRow center>  
                    <MDBCol md="6" className="mb-4">                   
                    <Fragment>

                    <MDBBtn gradient="blue" type="submit">Submit</MDBBtn>
                    </Fragment>  
                    </MDBCol>
                </MDBRow>                        
                
        </form>  
        </MDBCard>
                    </MDBCol>
                </MDBRow>             
        
        </MDBContainer>       
            </div>
        );
    }
}

export default Signup;


