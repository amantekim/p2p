import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
  Polyline,
} from "react-google-maps";

const GoogleMapComponent = withScriptjs(
  withGoogleMap((props) => {
    const {
      startingPoint,
      startingPointClick,
      dropOff,
      dropOffClick,
      pathCoordinates,
    } = props;
    
    return (
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 14.5995, lng: 120.9842 }}
      >
        {pathCoordinates.length > 0 && (
          <>
            <Marker position={startingPoint} onClick={startingPointClick} />
            <Marker position={dropOff} onClick={dropOffClick} />
            <Polyline
              path={pathCoordinates}
              geodesic={true}
              options={{
                strokeColor: "#F16623",
                strokeOpacity: 0.75,
                strokeWeight: 2,
              }}
            />
          </>
        )}
      </GoogleMap>
    );
  })
);

export default GoogleMapComponent;
