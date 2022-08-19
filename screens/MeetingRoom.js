import {
  View,
  TextInput,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const MeetingRoom = () => {
  const [name, setName] = useState("");
  const [meetingId, setMeetingId] = useState("");

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View style={{ backgroundColor: "#1c1c1c", flex: 1 }}>
        {/* <Text>Meeting Screen</Text> */}

        <View
          style={{
            width: "100%",
            // backgroundColor: "#373538",
            backgroundColor: "#333",
            height: 50,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: "#484648",
            padding: 12,
            justifyContent: "center",
          }}
        >
          <TextInput
            placeholder="Enter name"
            placeholderTextColor={"#767476"}
            value={name}
            onChange={(e) => setName(e)}
            style={{ paddingVertical: 10, fontSize: 16, color: "white" }}
          />
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: "#333",
            height: 50,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: "#484648",
            padding: 12,
            justifyContent: "center",
          }}
        >
          <TextInput
            onChange={(e) => setMeetingId(e)}
            value={meetingId}
            placeholder="Enter Meeting Id"
            placeholderTextColor={"#767476"}
            style={{ paddingVertical: 10, fontSize: 16, color: "white" }}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#0470DC",
              borderRadius: 15,
              alignItems: "center",
              height: 50,
              width: 350,
              marginTop: 20,
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Start Meeting
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MeetingRoom;

const styles = StyleSheet.create({});
