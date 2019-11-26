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

const dummyData = [
  {
    name: "Azamat Zhanisov",
    source:
      "https://images.unsplash.com/photo-1566807810030-3eaa60f3e670?ixlib=rb-1.2.1&auto=format&fit=crop&w=3334&q=80"
  },
  {
    name: "Ayo Ogunseinde",
    source:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3000&q=80"
  },
  {
    name: "Irina Iriser",
    source:
      "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3334&q=80"
  },
  {
    name: "Valerie Elash",
    source:
      "https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3334&q=80"
  }
];

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
    titleStyle,
    borderColor,
    shadowStyle,
    shadowColor,
    backgroundColor,
    borderLeftWidth
  } = props;

  renderListItem = (data, index) => {
    const { item } = data;
    return (
      <View key={index} style={{ marginTop: 3 }}>
        <ListItem name={item.name} source={item.source} />
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
            style={mapStyle || _styles.mapStyle}
            initialRegion={INITIAL_REGION}
          >
            {markers || (
              <Marker
                coordinate={{ latitude: LATITUDE, longitude: LONGITUDE }}
              />
            )}
          </MapView>
        </Androw>
        <View style={_styles.listContainer}>
          <Text style={titleStyle || _styles.titleStyle}>{title}</Text>
          <View style={_styles.listContainerGlue}>
            <FlatList
              data={data || dummyData}
              style={_styles.listStyle}
              renderItem={renderListItem}
              keyExtractor={(item, index) => item.name}
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
  title: "Testimonial",
  borderColor: "#f54242",
  backgroundColor: "#fff",
  width: ScreenWidth * 0.9
};

export default MapCardView;
