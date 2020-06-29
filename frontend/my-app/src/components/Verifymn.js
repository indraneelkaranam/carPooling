import React, { Component } from 'react';
import { Fragment } from 'react';
import Toper2 from './Toper2';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput,MDBCard, MDBCardBody,MDBIcon } from 'mdbreact';
import axios from 'axios';
import SpinnerPage from './Loader';
import '../index.css';
import Background from './images/663049.jpg';
var sectionStyle = {
    width: "100%",
    height: "900px",
    
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover' 
  };
class Verifymn extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            gmail : '',
            phonenumber : '',
            gmail2 : '',
            result : '',
            valid : 'false',
        }
    }
    handlenumberchange = (event) => {
        this.setState({
            phonenumber : event.target.value
        })
    }  
    handlegmailchange = (event) => {
        this.setState({
            gmail : event.target.value
           
        })
    }      
    handlegmail2change = (event) => {
        this.setState({
            gmail2 : event.target.value
           
        })
    }  
        
    refine(){
        //alert("refinement");
        const r = this.state.result.filter(word => word.email ==this.state.gmail);
        
        console.log("length is "+r.length);
        if(r.length==0)
        {
            console.log("set to true");
            this.setState({valid:"true"});
        }
        
        if(this.state.gmail==this.state.gmail2&&this.state.valid=="true")
        {//alert(`${this.props.location.state.details.firstname} ${this.state.gmail} ${this.state.phonenumber} `)
        axios.post('http://127.0.0.1:8000/api/',{
            firstname : this.props.location.state.details.firstname,
            lastname : this.props.location.state.details.lastname,
            gender : this.props.location.state.details.gender,
            date : this.props.location.state.details.date,
            password : this.props.location.state.details.password,
            phonenumber : this.state.phonenumber,
            email : this.state.gmail

        });
        
        this.props.history.push({pathname : `/loading`});
        
        }
        else if(this.state.valid=="false"){
            alert("email already exists")
        }
        else
        {
            alert("enter both emails correctly");
        }          
        if(this.state.phonenumber.length!=10)

        {
            alert("enter proper mobile number ");
        }
       
        //console.log("refined "+ JSON.stringify(r));
        //console.log("firstname "+this.state.firstname);
    }         
    handlesubmit = (event) => {
        event.preventDefault();
        axios.get('http://127.0.0.1:8000/api/')
        .then(res=>{
            this.setState({
                result : res.data
            });
            //console.log(res.data);
            this.refine();
        })        
 
    }    
    render() {
        return (
            <div>
                <Toper2/>
               
                <MDBContainer  style={ sectionStyle }>
                <br/>
                <MDBRow center className="h4 text-center py-4">
                    <MDBCol md="6">
                    <MDBCard>
                        <div className="header pt-3 peach-gradient">
                        <MDBRow className="d-flex justify-content-center">
                            <h3 className="white-text mb-3 pt-3 font-weight-bold">
                            You are One Step Ahead For Registration
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
                <form
                className="needs-validation"
                onSubmit={this.handlesubmit}
                noValidate
                >
                {/*<div>
                <label> Mobile Number </label>
                <input type = "text" value = {this.state.phonenumber} onChange={this.handlenumberchange} />
                <br />
                </div>  */}
                {/*<div>
                <label> Email </label>
                <input type = "text" value = {this.state.gmail} onChange={this.handlegmailchange} />
                <br />
                </div>*/} 
                <MDBRow center>
                <MDBCol md="10" className="mb-4"  > 
                                          
              <MDBInput style={{ maxWidth: "18rem" }}  value = {this.state.gmail2} onChange={this.handlegmail2change}
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                required
              />
              <MDBInput  style={{ maxWidth: "18rem" }} value = {this.state.gmail} onChange={this.handlegmailchange}
                label="Confirm your email"
                icon="exclamation-triangle"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                required
              />  
                <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>  
              <MDBInput  style={{ maxWidth: "18rem" }} value = {this.state.phonenumber} onChange={this.handlenumberchange}
                label="Enter Mobile NUmber"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                required
              />                              
                </MDBCol>   
            </MDBRow>                   
            <MDBRow center>  
                    <MDBCol md="4" className="mb-4">                   
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

export default Verifymn;