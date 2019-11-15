import React from "react";
import PropTypes from "prop-types";
import { Text, View, Dimensions } from "react-native";
import styles from "./Header.style";
import Androw from "react-native-androw";

const { width, height } = Dimensions.get("window");

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
