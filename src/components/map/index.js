import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
  Polyline
} from "react-google-maps";

const GoogleMapComponent = withScriptjs(
  withGoogleMap((props) => {
    const { 
      startingPoint,
      startingPointClick,
      dropOff,
      dropOffClick,
    } = props;

    const pathCoordinates = [
      { lat: 14.5764, lng: 121.0851 },
     {lat: 14.6255, lng: 121.1245}
  ];
    return (
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 14.5764, lng: 121.0851 }}
      >
        {startingPoint && (
          <Marker
            position={{ lat: 14.5764, lng: 121.0851 }}
            onClick={startingPointClick}
          />
        )}

        {dropOff && (
          <Marker
            position={{ lat: 14.6255, lng: 121.1245 }}
            onClick={dropOffClick}
          />
        )}

        {startingPoint && dropOff && 
          <Polyline
            path={pathCoordinates}
            geodesic={true}
                options={{
                    strokeColor: "#F16623",
                    strokeOpacity: 0.75,
                    strokeWeight: 2,
                }}
          />
        }

      </GoogleMap>
    );
  })
);

export default GoogleMapComponent;
