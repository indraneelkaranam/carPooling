import React, { Component } from 'react';
import { render } from 'react-dom';

import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';

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

class Search extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      postAddress: "",
      post_address_obj: {},
      errorMessage: "",
      latitude: null,
      longitude: null,
      isGeocoding: false
    };
  }

  handlePostAddressChange = address => {
    // console.log(address);
    this.setState({
      postAddress: address,
      latitude: null,
      longitude: null,
      errorMessage: ""
    });
  };

  render() {
    return (
      <div>
        <div
          id="post_elements_5"
          className="div-capsule-margin location_margin"
        >
          <PlacesAutocomplete
            value={this.state.postAddress}
            onChange={this.handlePostAddressChange}
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
                    {this.state.postAddress.length > 0 && (
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
        </div>
      </div>
    );
  }
}

export default Search;