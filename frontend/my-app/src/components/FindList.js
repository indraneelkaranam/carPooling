import React, { Component } from 'react';
import { Button } from 'antd';

import CustomLayout from '../containers/CustomLayout';
import Toper3 from './Toper3';
import { List, Avatar, Icon } from 'antd';
import logoinr from './logoinr.jpg';

const listData = [];
const temp = [];

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
class FindList extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            temp : '',
            email :'',
            source : '',
            destination : '',
            timeofleave : '',
            dateofleave : '',
            price : '',
            seats : '',
            anything : '',
            phonenumber : ''            
        }
        }    
    componentDidMount(){
        
        console.log("test "+ JSON.stringify(this.props.location.state.info));
        this.setState({temp: this.props.location.state.info});
        for (let i = 0; i < this.props.location.state.info.length; i++) {
            listData.push({
              href: 'http://ant.design',
              title: `Offer ${i+1}`,
              avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              description: `price : ${this.props.location.state.info[i].price}   seats : ${this.props.location.state.info[i].seats}`,      
              from:
                `${this.props.location.state.info[i].source} `,
               to : 
                `${this.props.location.state.info[i].destination}`,
              email : 
              `${this.props.location.state.info[i].email}`,
              id :
               ` ${i}`
            });
          }
    }    

        handleClick = text=> event=> {
        event.preventDefault();
        //alert("ready");
        var number = parseInt(text) ;
        console.log(" again test "+ JSON.stringify(this.state.temp[number]));
        console.log(" hope "+  JSON.stringify(this.props.location.state.info[number]));
        this.props.history.push({pathname : `confirm`, state : {details : this.props.location.state.details,info : this.props.location.state.info[number]}});

        
    }
    render() {
        return (
            <div>
                <Toper3>{this.props.location.state.details.firstname} {this.props.location.state.details.lastname} </Toper3>
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
                    <b>inrservices@gmail.com</b> 
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
                    <label>FROM  : </label>
                    {item.from}
                    <br/>
                    <label>   TO  :</label>                    
                    {item.to}
                    <br/>
                    <label>     EMAIL  :</label>                    
                    {item.email}
                    <br />                     
                     <Button
                    type="primary"
                    icon="poweroff"
                    
                    onClick={this.handleClick(item.id)}
                    >
                    BOOK NOW 
                    </Button>  
                    <br/>                   
                </List.Item>
                )}
            />                    
                </CustomLayout >    
            </div>
        );
    }
}

export default FindList;