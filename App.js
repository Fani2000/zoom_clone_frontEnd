import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import MeetingRoom from "./screens/MeetingRoom";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{
              title: "Start a Meeting",
              headerStyle: {
                backgroundColor: "#1c1c1c",
                shadowOpacity: 0,
              },
              headerTintColor: "white",
            }}
            name="Meeting"
            component={MeetingRoom}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Home /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
