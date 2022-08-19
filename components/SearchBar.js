import { View, Text, TextInput } from "react-native";
import React from "react";
import Fontisto from "react-native-vector-icons/Fontisto";

const SearchBar = () => {
  return (
    <View
      style={{
        backgroundColor: "#333",
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Fontisto name="search" size={20} color={"#858585"} />
      <TextInput
        placeholderTextColor={"grey"}
        placeholder="Search"
        style={{ marginLeft: 10, fontSize: 16 }}
      />
    </View>
  );
};

export default SearchBar;
