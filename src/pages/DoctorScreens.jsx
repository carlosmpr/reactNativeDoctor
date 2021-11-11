import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Ionicons, Octicons } from "@expo/vector-icons";
import AvatarCard from "../components/AvatarCard";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const DoctorScreens = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollview}>
        <View style={styles.header}>
          <Ionicons
            name="md-arrow-back-circle-outline"
            size={35}
            color="black"
          />
          <Text style={styles.title}>Doctors</Text>
          <Octicons name="settings" size={24} color="black" />
        </View>
        <View style={styles.container}>
          <View style={styles.search}>
            <Ionicons name="search-outline" size={24} color="black" />
            <TextInput style={{ flex: 1, marginLeft: 5 }} />
          </View>
        </View>

        <View style={styles.content}>
        <AvatarCard />
        <AvatarCard />
        <AvatarCard />
        <AvatarCard />
        <AvatarCard />
        <AvatarCard />
        <AvatarCard />
        <AvatarCard />
        <AvatarCard />
        <AvatarCard />
        <AvatarCard />
        <AvatarCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorScreens;

const styles = StyleSheet.create({
  scrollview: {
    height: windowHeight,
    width: windowWidth,
  },

  container: {
    padding: 25,
    width: windowWidth,
  },

  content: {
    padding: 25,
    width: windowWidth,
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  header: {
    padding: 25,
    width: windowWidth,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  search: {
    padding: 15,
    backgroundColor: "#F8F8FA",
    display: "flex",
    flexDirection: "row",
    borderRadius: 15,
  },
});
