import React, { Component } from 'react';
// import { Button } from 'react-native-elements';
import { Icon } from 'antd';
import { Typography } from 'antd';
import { Button } from 'antd';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});



const { Title } = Typography;



class Homepage extends Component {
    handleSignup = (event) => {
        console.log("occured");
        this.props.history.push({pathname : `/Signup`
    });
    }
    render() {
        return (
    <div>   
    <div>
    <Title>CAR POOLING</Title>
    </div>  
    <div>
    <br />
    <br />
    <br />
    <br />      
    <Button type="primary"> Find A Ride</Button>
    
    <br />
    <br />
    <br />
    <br />
    
    <Button type="primary"> Offer A Ride</Button>
    
    <br />
    <br />
    <br />
    <br />
    <Button type="danger"> Login </Button>

    <br />
    <br />
    <br />
    <br />   
    <form onSubmit = {this.handleSignup}> 
    <div>    
    <Button type="submit" title="Solid Button" > SignUp </Button>
    </div>
    </form>
    <br />
    <br />
    <br />
    <br /> 


  <div className="icons-list">
    <IconFont type="icon-tuichu" />
    <span> </span>
    <IconFont type="icon-facebook" />
    <span> </span>
    <IconFont type="icon-twitter" />
    <span> </span>
  </div>
  </div> 
  </div>
        );
    }
}

export default Homepage;