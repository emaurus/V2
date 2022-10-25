import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    // View, text Component
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Test app</Text>
      </View>

      {/* Flexbox layout */}
      <View style={styles.jumbotron}>
        <View style={styles.container}>
          <Text style={styles.subtitle}>React Native</Text>
          <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
        </View>
        <View style={styles.container}>
          <Text style={styles.subtitle}>Expo</Text>
            <Image style={styles.tinyLogo} source={require("./assets/favicon.png")} />
        </View>
      </View>

  <Text style={styles.paragraf}>Ovo je dodatni tekst.</Text>

      {/* button component */}
      <Button 
      style={styles.gumb}
      title="Gumb" 
      onPress={() => Alert.alert("Kliknuo/la si gumb!")} />

      {/* touchable opacity component */}
      <TouchableOpacity
        style={styles.resolvedContainerStyle}
        onPress={() => Alert.alert("TouchableOpacity pressed")}
      >
        <Text style={styles.textStyle}>Klikni me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#B3DCFC",
    fontFamily: "Roboto",
  },
   gumb: {
    backgroundColor: "#9b7de2"
  },
  header: {
    borderBottomWidth: 2,
    padding: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: 700
  },
  jumbotron: {
    flexDirection: "row",
    margin: 20,
  },
  tinyLogo: {
    margin: 10,
    width: 100,
    height: 100,
  },
  resolvedContainerStyle: {
    margin: 20,
    backgroundColor: "#9b7de2",
    padding: 20,
  },
  textStyle: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
    paragraf: {
    fontSize: 10,
    color: "#001a5b",
    fontWeight: 700,
    padding: 20,
    textAlign: "center",
  },
});

