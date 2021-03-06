import { isIPhoneXFamily } from "@freakycoder/react-native-helpers";

export const _shadowStyle = shadowColor => ({
  shadowColor,
  shadowOpacity: 0.7,
  shadowRadius: 10,
  shadowOffset: {
    width: 0,
    height: 0
  },
  alignItems: "center",
  justifyContent: "center"
});

export const _listStyle = height => ({
  height,
  borderWidth: 0,
  borderColor: "transparent",
  width: isIPhoneXFamily() ? "60%" : "55%"
});

export const _container = (
  height,
  width,
  borderColor,
  borderLeftWidth,
  backgroundColor
) => ({
  width,
  height,
  borderColor,
  borderLeftWidth,
  backgroundColor,
  borderRadius: 24,
  flexDirection: "row"
});

export default {
  mapContainer: {
    marginLeft: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#ccc",
    shadowOpacity: 0.7,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0
    }
  },
  mapStyle: {
    width: 125,
    height: 125,
    borderRadius: 24
  },
  listContainer: {
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 20,
    marginRight: 12
  },
  listContainerGlue: {
    marginTop: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  titleStyle: {
    fontSize: 18,
    marginLeft: 5,
    fontWeight: "600"
  }
};
