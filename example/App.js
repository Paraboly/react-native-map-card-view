import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import MapCardView from "@paraboly/react-native-map-card-view";

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
  }
];

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{ marginTop: 32 }}>
          <MapCardView
            data={dummyData}
            title="Hello"
            colors={["red", "black", "gray"]}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
