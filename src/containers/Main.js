import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import FormInput from "components/input-field";
import GoogleMapComponent from "components/map";
import Button from "components/button";
import { getUrl } from "constants/constants";
import { fetchToken } from "store/store"
import "./index.scss";
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: "",
      destination: "",
      errorMessage: "Location is not accessible by car",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handleReset = (e) => {
    e.preventDefault()
    this.setState({
      origin: "",
      destination: "",
      errorMessage: "",
    })
  }

  fetchRoute = () => {
    const {
      origin,
      destination
    } = this.state

    const data = {
      origin, 
      destination
    }
    this.props.fetchToken(data)
  }

  render() {
    const { origin, destination, errorMessage } = this.state;

    return (
      <div className="main-container">
        <div className="form-region">
          <h3>Welcome</h3>
          <FormInput
            name="origin"
            value={origin}
            placeholder="Enter starting location"
            onChange={this.handleChange}
          />

          <FormInput
            name="destination"
            value={destination}
            placeholder="Enter drop-off point"
            onChange={this.handleChange}
          />

          <div className="form-row">
            <Button
              customStyle={{ marginRight: "4px" }}
              buttonName="Submit"
              onClick={this.fetchRoute}
            />
            <Button
              customStyle={{
                marginLeft: "4px",
                backgroundColor: "#ffffff",
                color: "#3a3a3a",
                border: "2px solid #ffa726",
              }}
              buttonName="Reset"
              onClick={this.handleReset}
            />
          </div>

          <div className="form-row">
            <p>{errorMessage ? errorMessage : ""}</p>
          </div>
        </div>
        <div className="map-region">
          <GoogleMapComponent
            googleMapURL={getUrl()}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: `100%` }} />}
            startingPoint={true}
            dropOff={true}
          />
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchToken }, dispatch);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(MainPage);
