import {
  StatusBar,
  Platform,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import MenuButtons from "../components/MenuButtons";
import ContactsMenu from "../components/ContactsMenu";

const isAndroid = Platform.OS === "android";

const Home = () => {
  const marginTop = isAndroid ? StatusBar.currentHeight : 0;
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View style={{ ...styles.container, marginTop }}>
        <Header />
        <SearchBar />
        <MenuButtons />
        <ContactsMenu />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    padding: 15,
    flex: 1,
  },
});
export default Home;
