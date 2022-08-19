import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const items = [
  {
    id: 1,
    name: "video-camera",
    title: "New Meeting",
    color: "#FF751F",
  },
  {
    id: 2,
    name: "plus-square",
    title: "Join",
    color: "#0470DC",
  },
  {
    id: 3,
    name: "calendar",
    title: "Schedule",
    color: "#0470DC",
  },
  {
    id: 4,
    name: "upload",
    title: "Share Screen",
    color: "#0470DC",
  },
];

const MenuButtons = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      {items.map((item) => {
        return (
          <View
            key={item.id}
            style={{ flexDirection: "column", alignItems: "center" }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: item.color,
                padding: 10,
                borderRadius: 10,
                height: 50,
                width: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome name={item.name} size={23} color={"white"} />
            </TouchableOpacity>
            <Text style={{ color: "#f1f1f1", marginTop: 10 }}>
              {item.title}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default MenuButtons;
