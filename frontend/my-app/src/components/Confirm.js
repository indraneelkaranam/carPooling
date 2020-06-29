import { Descriptions, Radio } from 'antd';
import React, { Component } from 'react';
import { Button } from 'antd';
import Toper3 from './Toper3';
import { List, Avatar, Icon } from 'antd';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput,MDBCard, MDBCardBody } from 'mdbreact'; 
import { Fragment } from 'react';

class Confirm extends React.Component {
  state = {
    size: 'default',
    result : [],
    Personal : '',
    firstname : '',
    lastname : '',
    gender : '',
    phonenumber : '',
    date : ''
  };

  onChange = e => {
    e.preventDefault();  
    console.log('size checked', e.target.value);
    this.setState({
      size: e.target.value,
    });
  };
  refine(){
    //alert("refinement");
    const r = this.state.result.filter(word => word.email ==this.props.location.state.info.email);
    
    this.setState({firstname : r[0].firstname});
    this.setState({lastname : r[0].lastname});
    this.setState({gender : r[0].gender});
    this.setState({phonenumber : r[0].phonenumber});
    this.setState({date : r[0].date});
    //console.log("refined "+ JSON.stringify(r));
    //console.log("firstname "+this.state.firstname);
}  
  componentDidMount(){ 
    //event.preventDefault();
    axios.get('http://127.0.0.1:8000/api/')
    .then(res=>{
        this.setState({
            result : res.data
        });
        //console.log(res.data);
        this.refine();
    })                
}   
    handlesubmit = (event) => {
    event.preventDefault();
    alert("booked");  
        axios.post('http://127.0.0.1:8000/api3/',{
            passenger_email : this.props.location.state.details.email,
            offer_email : this.props.location.state.info.email,
            source : this.props.location.state.info.source,
            destination : this.props.location.state.info.destination,
            timeofleave : this.props.location.state.info.timeofleave,
            dateofleave : this.props.location.state.info.dateofleave,
            price :this.props.location.state.info.price,
            seats : this.props.location.state.info.seats,
            anything : "testing",
            phonenumber : this.state.phonenumber,
        });
        axios.post('http://127.0.0.1:8000/api4/',{
            offer_email : this.props.location.state.info.email,
            firstname : this.props.location.state.details.firstname,
            lastname : this.props.location.state.details.lastname,
            gender : this.props.location.state.details.gender,
            date : this.props.location.state.details.date,
            passenger_email : this.props.location.state.details.email,
            phonenumber : this.props.location.state.details.phonenumber,
            cleared : 'false',
            dateofjourney : this.props.location.state.info.dateofleave,
            source : this.props.location.state.info.source,
            destination : this.props.location.state.info.destination,            
        });      
        this.props.history.push({pathname : `/login/dashboard`});    
    //console.log("again final "+JSON.stringify(this.state.result));
    //console.log("again final "+JSON.stringify(this.state.Personal[0]));
    }
  render() {
    return (
      <div>
         <Toper3>{this.props.location.state.details.firstname} {this.props.location.state.details.lastname} </Toper3> 
        <Radio.Group onChange={this.onChange} value={this.state.size}>
          <Radio value="default">default</Radio>
          <Radio value="middle">middle</Radio>
          <Radio value="small">small</Radio>
        </Radio.Group>
        <br />
        <br />
        <Descriptions bordered title="Custom Size" size={this.state.size}>
          <Descriptions.Item label="email">{this.props.location.state.info.email}</Descriptions.Item>
          <Descriptions.Item label="Price">₹ {this.props.location.state.info.price}</Descriptions.Item>
          <Descriptions.Item label="time">{this.props.location.state.info.timeofleave}</Descriptions.Item>
          {/* <Descriptions.Item label="phone number">{this.props.location.state.info.phonenumber}</Descriptions.Item> */}
          <Descriptions.Item label="Seats">{this.props.location.state.info.seats}</Descriptions.Item>
          <Descriptions.Item label="Source">{this.props.location.state.info.source}</Descriptions.Item>
          <Descriptions.Item label="Destination">{this.props.location.state.info.destination}</Descriptions.Item>
          <Descriptions.Item label="Personal Info">
            
            First Name : {this.state.firstname}
            <br />
            Last Name : {this.state.lastname}
            <br />
            Gender : {this.state.gender}
            <br />
            phonenumber : {this.state.phonenumber}
            <br />
            DOB : {this.state.date}
            <br />
          </Descriptions.Item>
        </Descriptions>
            <MDBRow center>  
                    <MDBCol md="8" className="mb-4">                   
                    <Fragment>

                    <MDBBtn gradient="blue" type="submit" onClick={this.handlesubmit}>Confirm</MDBBtn>
                    </Fragment>  
                    </MDBCol>
                </MDBRow>         
        <br />
        <br />

      </div>
    );
  }
}

export default Confirm;