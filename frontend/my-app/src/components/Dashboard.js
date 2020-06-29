import React, { Component, Fragment } from 'react';
import Toper3 from './Toper3';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import { makeStyles } from '@material-ui/core/styles';
import '../index.css'
  
import Background from './images/663049.jpg';
var information = [];
var sectionStyle = {
    width: "100%",
    height: "600px",
    
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover' 
  };    
class Dashboard extends Component {
    constructor(props) {
        super(props);
        
        this.state = {

            isAuthenticated : "false",
            info : [],
            firstname : '',
            lastname : '',
        }   
        }    
    componentDidMount(){
        //console.log(this.props.location.state.details);
        //console.log(this.props.location.state.valid);
        const y= localStorage.getItem('login');
        
        if(y==null)
        {
            //alert("welcome");
            localStorage.setItem('login',"true");
            localStorage.setItem('details',JSON.stringify(this.props.location.state.details));  
            information = JSON.parse(localStorage.getItem('details'));  
            this.setState({firstname:information.firstname});
            this.setState({lastname:information.lastname});        
        }
        else{   
            information = JSON.parse(localStorage.getItem('details'));
            //alert("irrelevant login" + JSON.stringify(information)+information.firstname);
            this.setState({firstname:information.firstname});
            this.setState({lastname:information.lastname});             
        }
    }    
    handleOffer = (event) => {

        //alert("working");
        this.props.history.push({pathname : `offer`, state : {details : information}});
        
    }    
    handleFind = (event) => {

        //alert("working");
        this.props.history.push({pathname : `find`, state : {details : information}});
        
    }            
    render() {
        const useStyles = makeStyles(theme => ({
            margin: {
              margin: theme.spacing(1),
            },
            extendedIcon: {
              marginRight: theme.spacing(1),
            },
          }));
        //   {this.props.location.state.details.firstname} {this.props.location.state.details.lastname}
    const classes = useStyles;
  
        return (
            <div>
               <Toper3>{this.state.firstname} {this.state.lastname} </Toper3> 

                <MDBContainer style={ sectionStyle }>
                <br />
                <br />
                <MDBRow center>
                    <MDBCol md="6">
                    <MDBCard>
                        <div className="header pt-3 peach-gradient">
                        <MDBRow className="d-flex justify-content-center">
                            <h3 className="white-text mb-3 pt-3 font-weight-bold">
                            Welcome {this.state.firstname} {this.state.lastname}
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
                            
                            <br />
                            <br />
                            <MDBCol >
                                    
                            <Fab onClick={this.handleFind}
                            variant="extended"
                            size="large"
                            color="primary"
                            aria-label="add"
                            className={classes.margin}
                            >
                            {/* <NavigationIcon className={classes.extendedIcon} /> */}
                               FIND A RIDE
                            </Fab>  
                            <br />
                            <br />                              
                               </MDBCol>
                               <MDBCol >
                                    
                                    <Fab onClick={this.handleOffer}
                                    variant="extended"
                                    size="large"
                                    color="primary"
                                    aria-label="add"
                                    className={classes.margin}
                                    >
                                    {/* <NavigationIcon className={classes.extendedIcon} /> */}
                                       OFFER A RIDE
                                    </Fab>  
                                      
                                       </MDBCol>    
                                       <br />
                            <br />                                                                                  
                    </MDBCard>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>

            </div>
        );
    }
}

export default Dashboard;