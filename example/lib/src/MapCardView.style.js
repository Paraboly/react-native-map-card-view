import { isIPhoneXFamily } from "@freakycoder/react-native-helpers";

export const _shadowStyle = (shadowColor) => ({
  shadowColor,
  shadowOpacity: 0.7,
  shadowRadius: 10,
  shadowOffset: {
    width: 0,
    height: 0,
  },
  alignItems: "center",
  justifyContent: "center",
});

export const _listStyle = (height) => ({
  height,
  borderWidth: 0,
  borderColor: "transparent",
  width: isIPhoneXFamily() ? "60%" : "55%",
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
  flexDirection: "row",
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
      height: 0,
    },
  },
  mapStyle: {
    width: 125,
    height: 125,
    borderRadius: 24,
  },
  listContainer: {
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 20,
    marginRight: 12,
  },
  listContainerGlue: {
    marginTop: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titleStyle: {
    fontSize: 18,
    marginLeft: 5,
    fontWeight: "600",
  },
  buttonContainerStyles: {
    height: "80%",
    marginRight: 16,
    marginLeft: "auto",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  firstButtonStyles: {
    minWidth: 135,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4cb61",
  },
  secondButtonStyles: {
    paddingTop: 5,
    minWidth: 135,
    paddingBottom: 5,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 12,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4cb61",
  },
  buttonsTextStyles: {
    color: "#fff",
    fontSize: 14,
    marginRight: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
};
