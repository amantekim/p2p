import React from "react";
import FormInput from "components/input-field";
import GoogleMapComponent from "components/map";
import { getUrl } from "constants/constants";
import "./index.scss";
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-container">
        <div className="form-region">
          <h3>Welcome</h3>
          <FormInput
            name="startingPoint"
            value=""
            placeholder="Enter starting location"
            onChange={() => console.log("type")}
          />

          <FormInput
            name="dropoffPoint"
            value=""
            placeholder="Enter drop-off point"
            onChange={() => console.log("type")}
          />
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

export default MainPage;
