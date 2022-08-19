import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

const users = [
  {
    type: "starred",
    id: 0,
    name: "Starred",
  },
  {
    id: 1,
    type: "contact",
    name: "Fani Keorapetse",
    photoUrl:
      "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: 2,
    type: "contact",
    name: "Sam Smith",
    photoUrl:
      "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

const ContactsMenu = () => {
  return (
    <View style={styles.container}>
      {users.map((user) => (
        <TouchableOpacity key={user.id}>
          <View id={user.id} style={styles.row}>
            <View style={styles.starredIcon}>
              {user.type === "starred" ? (
                <AntDesign name="star" size={30} color="#efefef" />
              ) : (
                <Image
                  source={{ uri: user.photoUrl }}
                  style={{ width: 55, height: 55, borderRadius: 20 }}
                />
              )}
            </View>
            <Text style={styles.text}>{user.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  starredIcon: {
    marginRight: 10,
    backgroundColor: "#333",
    padding: 10,
    width: 55,
    height: 55,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});

export default ContactsMenu;
