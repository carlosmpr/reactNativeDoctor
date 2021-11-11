import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TextInput,
  Button,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import DateCard from "../components/DateCard";
import TimeCard from "../components/TimeCard";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const AppoinmentScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollview}>
        <View style={styles.header}>
          <Text style={styles.title}>New Appoinment</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.subTitle}>July,2020</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>

        <ScrollView
          style={{ width: windowWidth, padding: 20 }}
          horizontal={true}
        >
          <DateCard date="13" day="Mon" />
          <DateCard date="14" day="Tue" active={true} />
          <DateCard date="15" day="Wed" />
          <DateCard date="16" day="Thur" />
          <DateCard date="17" day="Fri" />
        </ScrollView>
        <Text style={styles.subTitle}>Available Time</Text>
        <View style={styles.time}>
          <TimeCard time={"09:00 Am"} active={true} />
          <TimeCard time={"09:30 Am"} />
          <TimeCard time={"10:00 Am"} />
          <TimeCard time={"10:30 Am"} />
          <TimeCard time={"11:00 Am"} />
          <TimeCard time={"11:30 Am"} />
          <TimeCard time={"01:00 Pm"} />
          <TimeCard time={"02:00 Pm"} />
          <TimeCard time={"03:00 Pm"} />
        </View>

        <Text style={styles.subTitle}>Patient Details</Text>
        <TextInput placeholder="Full Name" style={{marginVertical:10, width:'100%', padding:15, backgroundColor:'#F8F8FA', borderRadius:10}}/>

        <TextInput placeholder="Age" style={{marginVertical:10, width:'100%', padding:15, backgroundColor:'#F8F8FA', borderRadius:10}}/>

        <Text>Gender</Text>
        <View style={{display:'flex', flexDirection:'row'}}>
            <TimeCard time="Male" active={true}/>
            <TimeCard time="Female"/>
        </View>

        <TextInput placeholder="Symptons" style={{marginVertical:10, width:'100%', padding:50, backgroundColor:'#F8F8FA', borderRadius:10}}/>
        <Button title="Set Appointment" />
        <View style={{height:windowHeight/5}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppoinmentScreen;

const styles = StyleSheet.create({
  scrollview: {
    height: windowHeight,
    width: windowWidth,
    padding: 20
  },

  header: {
    width: "100%",
    padding: 20,
  },

  title: {
    fontWeight: "500",
    fontSize: 20,
    textAlign: "center",
  },

  container: {
   
    display: "flex",
    flexDirection: "row",
  },

  subTitle: {
    fontWeight: "500",
    fontSize: 16,
  },

  time: {
    paddingVertical: 20,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
  },
});
