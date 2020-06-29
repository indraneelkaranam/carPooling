import React, { Component } from 'react';
import { Button } from 'antd';

import CustomLayout from '../containers/CustomLayout';
import Toper3 from './Toper3';
import { List, Avatar, Icon } from 'antd';
import logoinr from './logoinr.jpg';
import axios from 'axios';
const listData = [];

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class Notifications extends Component
{
    constructor(props) {
        super(props);
    
    this.state = {
        info : [],
        firstname : '',
        lastname : '',
        gender : '',
        date : '',
        phonenumber : '',
        email : '',
    }
    }
    refine(){
        //alert("refinement");
        const result = this.state.info.filter(word => word.offer_email == this.state.email);
        localStorage.setItem('length',result.length);
        localStorage.setItem('info',JSON.stringify(result)); 

    }    
    componentDidMount(){
        //const test = localStorage.getItem('test');
        //console.log(test);
        const res = JSON.parse(localStorage.getItem('details'));
        this.setState({firstname:res.firstname});
        this.setState({lastname:res.lastname});
        this.setState({gender:res.gender});
        this.setState({phonenumber:res.phonenumber});
        this.setState({email:res.email});

        axios.get('http://127.0.0.1:8000/api4/')
        .then(res=>{
            this.setState({
                info : res.data
            });
            //console.log(res.data);
            this.refine();

        })
        const r = localStorage.getItem('length');
        const information = JSON.parse(localStorage.getItem('info'));
        console.log("check "+information.length);
        for (let i = 0; i < information.length; i++) {
            
            listData.push({
              href: 'http://ant.design',
              title: `Notification ${i+1}`,
              avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              description:
              `firstname : ${information[i].firstname}     lastname : ${information[i].lastname}`,
              email:
                   ` ${information[i].passenger_email} `,
               gender:
                  ` ${information[i].gender} `,
               phonenumber :   
               ` ${information[i].phonenumber} `,
               date : 
                ` ${information[i].date}`,
                dol : 
                  `${information[i].dateofjourney}`,
                source :
                   `${information[i].source}`,
                destination :
                    `${information[i].destination}`   

            });
          
      }               
    }            
        //console.log(res.firstname);
        //console.log(JSON.stringify(this.state.info));
    render() {
        return (
            <div>
                <Toper3> {this.state.firstname} {this.state.lastname} </Toper3>
                <CustomLayout>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 3,
                    }}
                    dataSource={listData}
                    footer={
                    <div>
                        <b>ant design</b> footer part
                    </div>
                    }
                    renderItem={item => (
                    <List.Item
                        key={item.title}
                        // actions={[
                        // <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                        // <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                        // <IconText type="message" text="2" key="list-vertical-message" />,
                        // ]}
                        extra={
                        <img
                            width={272}
                            alt="logo"
                            src={logoinr}
                        />
                        }
                    >
                        <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                        />
                        <label>EMAIL :</label>
                        {item.email}
                        <br />
                        <label> PHONENUMBER :</label>
                        {item.phonenumber}
                        <br />
                        <label> GENDER :</label>
                        {item.gender}
                        <br />
                        <label> DATE OF BIRTH :</label>
                        {item.date}
                        <br />
                        <label> SOURCE :</label>
                        {item.source}
                        <br />
                        <label> DESTINATION :</label>
                        {item.destination}
                        <br />
                        <label> DATE OF JOURNEY :</label>
                        {item.dol}
                        <br />                                                                        
                    </List.Item>
                    )}
                />
                </CustomLayout>
            </div>
        );
    }     
}

export default Notifications;

