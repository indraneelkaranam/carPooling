import React from 'react';
import axios from 'axios';
class InfoList extends React.Component{
    state = {
        info : []
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/')
        .then(res=>{
            this.setState({
                info : res.data
            });
            console.log(res.data);
        })

    }

    render(){
        return (
            <div>
                {this.state.info.map(user=> (
                <div>    
                <div>{user.firstname}</div>
                <div>{user.lastname}</div>
                </div>
            ))}
            </div>
        );
    }
}

export default InfoList