import React from "react";
import PropTypes from "prop-types";
import { Text, View, FlatList, Dimensions } from "react-native";
import Androw from "react-native-androw";
import MapView, { Marker } from "react-native-maps";
import ListItem from "./components/ListItem/ListItem";
import _styles, { _shadowStyle, _container } from "./MapCardView.style";

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("window");

const ASPECT_RATIO = ScreenWidth / ScreenHeight;
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
  const {
    data,
    width,
    title,
    height,
    styles,
    markers,
    mapStyle,
    markerLat,
    markerLng,
    titleStyle,
    borderColor,
    shadowStyle,
    shadowColor,
    borderLeftWidth,
    backgroundColor,
    mapInitialRegion
  } = props;

  renderListItem = (list, index) => {
    const { item } = list;
    return (
      <View key={index} style={{ marginTop: 3 }}>
        <ListItem name={item.name} source={item.source} {...props} />
      </View>
    );
  };

  return (
    <Androw style={shadowStyle || _shadowStyle(shadowColor)}>
      <View
        style={
          styles ||
          _container(
            height,
            width,
            borderColor,
            borderLeftWidth,
            backgroundColor
          )
        }
      >
        <Androw style={_styles.mapContainer}>
          <MapView
            liteMode
            initialRegion={mapInitialRegion}
            style={mapStyle || _styles.mapStyle}
          >
            {markers || (
              <Marker
                coordinate={{ latitude: markerLat, longitude: markerLng }}
              />
            )}
          </MapView>
        </Androw>
        <View style={_styles.listContainer}>
          <Text style={titleStyle || _styles.titleStyle}>{title}</Text>
          <View style={_styles.listContainerGlue}>
            <FlatList
              style={_styles.listStyle}
              renderItem={renderListItem}
              keyExtractor={(item, index) => item.name}
              data={data && data.length > 0 && data}
            />
          </View>
        </View>
      </View>
    </Androw>
  );
};

MapCardView.propTypes = {
  title: PropTypes.string,
  shadowColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderLeftWidth: PropTypes.number,
  backgroundColor: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MapCardView.defaultProps = {
  height: 150,
  shadowColor: "#ccc",
  borderLeftWidth: 5,
  markerLat: LATITUDE,
  markerLng: LONGITUDE,
  title: "Testimonial",
  borderColor: "#f54242",
  backgroundColor: "#fff",
  width: ScreenWidth * 0.9,
  mapInitialRegion: INITIAL_REGION
};

export default MapCardView;
