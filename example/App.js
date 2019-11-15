import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";
import MapCardView from "./lib/src/MapCardView";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <MapCardView />
      </SafeAreaView>
    </>
  );
};

export default App;
