import React from "react";
import PropTypes from "prop-types";
import { Text, View, FlatList, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Androw from "react-native-androw";
import ListItem from "./components/ListItem/ListItem";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
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
  renderListItem = (data, index) => {
    const { item } = data;
    return (
      <View key={index} style={{ marginTop: 3 }}>
        <ListItem name={item.name} source={item.source} />
      </View>
    );
  };

  return (
    <Androw
      style={{
        shadowColor: "#ccc",
        shadowOpacity: 0.7,
        shadowRadius: 10,
        shadowOffset: {
          width: 0,
          height: 0
        },
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <View
        style={{
          height: 150,
          borderRadius: 24,
          borderLeftWidth: 5,
          borderColor: "red",
          width: width * 0.9,
          flexDirection: "row",
          backgroundColor: "#fff"
        }}
      >
        <View style={{ marginLeft: 16, justifyContent: "center" }}>
          <Androw
            style={{
              shadowColor: "#ccc",
              shadowOpacity: 0.7,
              shadowRadius: 10,
              shadowOffset: {
                width: 0,
                height: 0
              },
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <MapView
              liteMode
              style={{
                width: 125,
                height: 125,
                borderRadius: 24
              }}
              initialRegion={INITIAL_REGION}
            >
              <Marker
                coordinate={{ latitude: LATITUDE, longitude: LONGITUDE }}
              />
            </MapView>
          </Androw>
        </View>
        <View
          style={{
            marginTop: 12,
            marginBottom: 12,
            marginLeft: 20,
            marginRight: 12
          }}
        >
          <Text style={{ fontWeight: "600", fontSize: 18 }}>Persons</Text>
          <View
            style={{
              marginTop: 3,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start"
            }}
          >
            <FlatList
              keyExtractor={(item, index) => item.name}
              style={{ height: 105, width: "60%" }}
              data={dummyData}
              renderItem={renderListItem}
              {...props}
            />
          </View>
        </View>
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
