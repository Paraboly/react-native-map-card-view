import React from "react";
import PropTypes from "prop-types";
import { Text, View, Dimensions } from "react-native";
import MapView from "react-native-maps";
import Androw from "react-native-androw";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const INITIAL_REGION = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA
};

const MapCardView = props => {
  const { example } = props;
  return (
    <Androw
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        shadowOffset: {
          width: 0,
          height: 8
        }
      }}
    >
      <View style={{ height: 150, width: width * 0.9 }}>
        <MapView
          liteMode
          style={{ height: 200, marginVertical: 50 }}
          initialRegion={INITIAL_REGION}
        />
        <Text>{example}</Text>
      </View>
    </Androw>
  );
};

MapCardView.propTypes = {
  example: PropTypes.number
};

MapCardView.defaultProps = {
  example: 5
};

export default MapCardView;
