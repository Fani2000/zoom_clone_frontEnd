import { View, Text } from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
      }}
    >
      <View>
        <Entypo name="notification" size={30} color={"white"} />
      </View>
      <View>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          Meet & Chat
        </Text>
      </View>
      <View>
        <Entypo name="new-message" size={30} color={"white"} />
      </View>
    </View>
  );
};

export default Header;
