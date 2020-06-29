import React, { Component } from 'react';
import Toper3 from './Toper3';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput,MDBCard, MDBCardBody, MDBIcon } from 'mdbreact'; 
import { Fragment } from 'react';
import axios from 'axios';
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';
import TimeField from 'react-simple-timefield';
import Background from './images/663049.jpg';
const isObject = val => {
    return typeof val === 'object' && val !== null;
  };
  
  const classnames = (...args) => {
    const classes = [];
    args.forEach(arg => {
      if (typeof arg === 'string') {
        classes.push(arg);
      } else if (isObject(arg)) {
        Object.keys(arg).forEach(key => {
          if (arg[key]) {
            classes.push(key);
          }
        });
      } else {
        throw new Error(
          '`classnames` only accepts string or object as arguments'
        );
      }
    });
  
    return classes.join(' ');
  };
  var sectionStyle = {
    width: "100%",
    height: "1300px",
    
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover' 
  };   

class FindaRide extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            info : [],
            source: '',
            post_address_obj: {},
            errorMessage: '',
            latitude: null,
            longitude: null,
            isGeocoding: false,   
            d_post_address_obj: {},
            d_errorMessage: '',
            d_latitude: null,
            d_longitude: null,
            d_isGeocoding: false,                      
            destination : ''
        }
        }
        handleSourceAddressChange = address => {
            // console.log(address);
            this.setState({
              source: address,
              latitude: null,
              longitude: null,
              errorMessage: ""
            });
          };
          handleDestinationAddressChange = address => {
            // console.log(address);
            this.setState({
              destination: address,
              d_latitude: null,
              d_longitude: null,
              d_errorMessage: ""
            });
          }; 
          refine(){
              //alert("refinement");
              const result = this.state.info.filter(word => word.source ==this.state.source&&word.destination==this.state.destination);
              console.log("filtered "+result.length);
              this.props.history.push({pathname : `findlist`, state : {details : this.props.location.state.details,info : result}}); 

          }
          handleSubmit = (event) => {
            event.preventDefault();
            axios.get('http://127.0.0.1:8000/api2/')
            .then(res=>{
                this.setState({
                    info : res.data
                });
                //console.log(res.data);
                this.refine();

            })                
        }            
    render() {
        return (
            <div>
                <Toper3 >{this.props.location.state.details.firstname} {this.props.location.state.details.lastname}</Toper3>
                              
                <MDBContainer style={ sectionStyle }>
                <br/>
                <MDBRow center>
                    <MDBCol md="6">
                    <MDBCard>
                        <div className="header pt-3 peach-gradient">
                        <MDBRow className="d-flex justify-content-center">
                            <h3 className="white-text mb-3 pt-3 font-weight-bold">
                            Fill in the Details to Find A Ride
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
                <form onSubmit={this.handleSubmit}>
                <MDBRow center>
                    <MDBCol md="6" className="mb-4">
                    
                    <label> Source </label>
    
                    <PlacesAutocomplete
                    value={this.state.source}
                    onChange={this.handleSourceAddressChange}
                    >
                    {({ getInputProps, suggestions, getSuggestionItemProps }) => {
                    return (
                        <div className="Demo__search-bar-container">
                        <div className="Demo__search-input-container">
                            <input
                            {...getInputProps({
                                placeholder: "Tag the location",
                                className: "Demo__search-input"
                            })}
                            />
                            {this.state.source.length > 0 && (
                            <button
                                className="Demo__clear-button"
                                onClick={this.handleCloseClick}
                            >
                                x
                            </button>
                            )}
                        </div>
                        {suggestions.length > 0 && (
                            <div className="Demo__autocomplete-container">
                            {suggestions.map(suggestion => {
                                const className = classnames("Demo__suggestion-item", {
                                "Demo__suggestion-item--active": suggestion.active
                                });

                                return (
                                /* eslint-disable react/jsx-key */
                                <div
                                    {...getSuggestionItemProps(suggestion, {
                                    className
                                    })}
                                >
                                    <strong>
                                    {suggestion.formattedSuggestion.mainText}
                                    </strong>{" "}
                                    <small>
                                    {suggestion.formattedSuggestion.secondaryText}
                                    </small>
                                </div>
                                );
                                /* eslint-enable react/jsx-key */
                            })}
                            <div className="Demo__dropdown-footer">
                                <div>
                                <img
                                    src="http://files.hostgator.co.in/hostgator254362/image/powered-by-google.png"
                                    className="Demo__dropdown-footer-image"
                                />
                                </div>
                            </div>
                            </div>
                        )}
                        </div>
                    );
                    }}
                </PlacesAutocomplete>
                </MDBCol>
                </MDBRow>
                <MDBRow center>
                <MDBCol md="6" className="mb-4">
                <MDBInput
                label="SOURCE"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                value = {this.state.source}
                style={{ maxWidth: "18rem" }}
                //icon="envelope"
                required
                />      
                </MDBCol>
                </MDBRow>                  
                <MDBRow center>
                    <MDBCol md="6" className="mb-4">
                    
                    <label> Destination </label>
    
                    <PlacesAutocomplete
                    value={this.state.destination}
                    onChange={this.handleDestinationAddressChange}
                    >
                    {({ getInputProps, suggestions, getSuggestionItemProps }) => {
                    return (
                        <div className="Demo__search-bar-container">
                        <div className="Demo__search-input-container">
                            <input
                            {...getInputProps({
                                placeholder: "Tag the location",
                                className: "Demo__search-input"
                            })}
                            />
                            {this.state.destination.length > 0 && (
                            <button
                                className="Demo__clear-button"
                                onClick={this.handleCloseClick}
                            >
                                x
                            </button>
                            )}
                        </div>
                        {suggestions.length > 0 && (
                            <div className="Demo__autocomplete-container">
                            {suggestions.map(suggestion => {
                                const className = classnames("Demo__suggestion-item", {
                                "Demo__suggestion-item--active": suggestion.active
                                });

                                return (
                                /* eslint-disable react/jsx-key */
                                <div
                                    {...getSuggestionItemProps(suggestion, {
                                    className
                                    })}
                                >
                                    <strong>
                                    {suggestion.formattedSuggestion.mainText}
                                    </strong>{" "}
                                    <small>
                                    {suggestion.formattedSuggestion.secondaryText}
                                    </small>
                                </div>
                                );
                                /* eslint-enable react/jsx-key */
                            })}
                            <div className="Demo__dropdown-footer">
                                <div>
                                <img
                                    src="http://files.hostgator.co.in/hostgator254362/image/powered-by-google.png"
                                    className="Demo__dropdown-footer-image"
                                />
                                </div>
                            </div>
                            </div>
                        )}
                        </div>
                    );
                    }}
                </PlacesAutocomplete>
                </MDBCol>
                </MDBRow>
                    
                 <MDBRow center>
                <MDBCol md="6" className="mb-4">
                <MDBInput
                label="DESTINATION"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                value = {this.state.destination}
                style={{ maxWidth: "18rem" }}
                //icon="envelope"
                required
                />      
                </MDBCol>
                </MDBRow>                          
                <br/>
                                                                      
                <MDBRow center>  
                <MDBCol md="4" className="mb-4">                   
                                
                <label> DateofJourney </label>    
                <input type = "date" value = {this.state.date} onChange={this.handledatechange} />  {/*(onChange = {event => this.setState({date:event.target.value})} required*/}
                </MDBCol>
                </MDBRow> 

                <MDBRow center>
                <MDBCol md="6" className="mb-4">
                <label> Any thing to say </label>
                <MDBInput
                
                group
                type="text"
                validate
                error="wrong"
                success="right"
                value = {this.state.ats} onChange={this.handleatschange}
                style={{ maxWidth: "18rem" }}
                icon="envelope"
                
                />      
                </MDBCol>
                </MDBRow>                                                              
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

export default FindaRide;