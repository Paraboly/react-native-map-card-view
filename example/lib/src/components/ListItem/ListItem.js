import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image } from "react-native";

const ListItem = props => {
  const { name, source } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
      }}
    >
      <Image
        borderRadius={30}
        style={{ height: 30, width: 30 }}
        source={{ uri: source }}
      />
      <Text numberOfLines={1} style={{ marginLeft: 8, color: "#757575" }}>
        {name}
      </Text>
    </View>
  );
};

ListItem.propTypes = {
  example: PropTypes.number
};

ListItem.defaultProps = {
  example: 5
};

export default ListItem;
