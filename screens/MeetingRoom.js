import {
  View,
  TextInput,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import StartMeeting from "../components/StartMeeting";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Camera, CameraType } from "expo-camera";

const menuItems = [
  {
    id: 1,
    name: "microphone",
    title: "Mute",
    color: "#efefef",
  },
  {
    id: 2,
    name: "video-camera",
    title: "Stop Video",
    color: "red",
  },
  {
    id: 3,
    name: "upload",
    title: "Share Content",
  },
  {
    id: 4,
    name: "group",
    title: "Participants",
  },
];

const MeetingRoom = () => {
  const [name, setName] = useState("");
  const [meetingId, setMeetingId] = useState("");
  const [socket, setSocket] = useState(null);
  const [activeUsers, setActiveUsers] = useState([]);
  const [startCamera, setStartCamera] = useState(false);

  useEffect(() => {
    console.log("Stating");
    let s = io("http://192.168.8.126:3000");
    s.on("user-connected", (userId) => {
      console.log("USER CONNECTED", userId);
      setName(userId);
    });
    s.on("all-users", (users) => {
      console.log("ALL USERS", users);
      // users = users.filter((user) => user.userId !== name);
      setActiveUsers(users);
    });
    setSocket(s);
  }, []);

  useEffect(() => {
    if (activeUsers.length > 0) {
      console.log("Users Active", activeUsers);
    }
  }, [activeUsers]);

  const handleStartCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    }
  };

  const handleStartMeeting = () => {
    if (name.length > 0 && meetingId.length > 0) {
      console.log(name, meetingId);
      socket.emit("join-room", { userId: name, roomId: meetingId });
      handleStartCamera();
    }
    // console.log(name, meetingId);
  };

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View
        style={{
          backgroundColor: "#1c1c1c",
          flex: 1,
          paddingTop: 10,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {startCamera ? (
          <>
            <Camera
              style={{
                width: activeUsers.length === 0 ? "100%" : 200,
                height: activeUsers.length === 0 ? 600 : 200,
              }}
              type={CameraType.front}
            ></Camera>
            {activeUsers
              .filter((user) => user.userId !== name)
              .map((user, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      borderColor: "grey",
                      borderWidth: 1,
                      width: 200,
                      height: 200,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "white" }}>{user.userId}</Text>
                  </View>
                );
              })}

            <View
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-around",
                backgroundColor: "black",
              }}
            >
              {menuItems.map((menuItem) => (
                <View key={menuItem.id} style={{ padding: 10 }}>
                  <TouchableOpacity
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <FontAwesome
                      name={menuItem.name}
                      size={24}
                      color={menuItem.color ?? "white"}
                    />
                    <Text
                      style={{
                        color: menuItem.color ?? "white",
                        marginTop: 10,
                      }}
                    >
                      {menuItem.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </>
        ) : (
          <StartMeeting
            name={name}
            setName={setName}
            setMeetingId={setMeetingId}
            handleStartMeeting={handleStartMeeting}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default MeetingRoom;

const styles = StyleSheet.create({});
