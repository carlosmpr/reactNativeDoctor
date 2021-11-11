import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  TextInput,
} from "react-native";

import doctor from "../../assets/doctor.png";
import { Feather,Ionicons,MaterialIcons } from "@expo/vector-icons";
import ChatMessage from "../components/ChatMessage";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const ChatScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image source={doctor} />
          <Text style={styles.headerTitle}>Dr. Jhon Doe</Text>
          <Feather name="phone" size={30} color="black" />
          <Feather name="video" size={30} color="black" />
        </View>
    <View style={styles.scrollView}>
        <ScrollView >
       <ChatMessage text="Hey Doc, is there any chance I’ll be able to play the violin after the operation" time="10:15" active={true}/>
       <ChatMessage text="After some healing, yes, of course!" time="10:16" />
       <ChatMessage text="Great! How exciting. I never could before!" time="10:15" active={true}/>
        </ScrollView>
        </View>
        <View style={{width:windowWidth, display:'flex', flexDirection:'row', alignItems:'center', borderTopWidth:1, padding:8, borderColor:'#F1F4F7' }}>
        <Ionicons name="attach" size={35} color="black" />
        <TextInput placeholder="Send message" style={{backgroundColor:'#F1F4F7', padding:20, flex:1}}/>
        <MaterialIcons name="keyboard-voice" size={35} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
 

  container: {
    width: windowWidth,
    display: "flex",
    alignItems: "center",
  },

  scrollView:{
      width:windowWidth,
      height:windowHeight*0.77,
      padding:20,
  },

  content:{
      width:windowWidth,
      height:windowHeight
  },

  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  headerTitle: {
    fontSize: 18,
  },
});
