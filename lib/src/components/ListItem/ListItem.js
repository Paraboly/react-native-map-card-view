import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image } from "react-native";
import styles from "./ListItem.style";
import UserAvatar from "react-native-user-avatar";

const ListItem = props => {
  const { name, source, size, colors, imageStyle, textStyle } = props;
  return (
    <View style={styles.container}>
      <UserAvatar
        size={size}
        name={name}
        src={source}
        colors={colors}
        style={imageStyle || styles.imageStyle}
      />
      <Text numberOfLines={1} style={textStyle || styles.textStyle}>
        {name}
      </Text>
    </View>
  );
};

ListItem.propTypes = {
  size: PropTypes.string,
  colors: PropTypes.array
};

ListItem.defaultProps = {
  size: "30",
  colors: ["#b888a0", "#ccc", "#e36259", "#ccaabb", "#b888a0"]
};

export default ListItem;
