import {
  View,
  TextInput,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

const StartMeeting = ({
  setMeetingId,
  setName,
  name,
  meetingId,
  handleStartMeeting,
}) => {
  return (
    <>
      <View
        style={{
          width: "100%",
          // backgroundColor: "#373538",
          backgroundColor: "#333",
          height: 50,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: "#484648",
          paddingHorizontal: 12,
          justifyContent: "center",
        }}
      >
        <TextInput
          placeholder="Enter name"
          placeholderTextColor={"#767476"}
          value={name}
          onChangeText={setName}
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
          paddingHorizontal: 12,
          justifyContent: "center",
        }}
      >
        <TextInput
          onChangeText={setMeetingId}
          value={meetingId}
          placeholder="Enter Meeting Id"
          placeholderTextColor={"#767476"}
          style={{ paddingVertical: 10, fontSize: 16, color: "white" }}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={handleStartMeeting}
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
    </>
  );
};

export default StartMeeting;

const styles = StyleSheet.create({});
