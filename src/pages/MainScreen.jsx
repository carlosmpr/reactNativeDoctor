import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Image,
  ScrollView
} from "react-native";
import { AntDesign, MaterialCommunityIcons,Ionicons } from "@expo/vector-icons";
import doctors from "../../assets/doctors.png";
import Category from "../components/Category";
import neo from '../../assets/neo.png'
import dna from '../../assets/dna.png'
import den from '../../assets/dentist.png'
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const MainScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Welcome, Jhon Doe</Text>
          <View style={styles.icons}>
            <AntDesign name="calendar" size={24} color="black" />
            <MaterialCommunityIcons
              name="dots-vertical"
              size={24}
              color="black"
            />
          </View>
        </View>

        <View style={styles.largeCard}>
          <View style={{ width: "100%" }}>
            <Text style={styles.cardTitle}>Covid-19 HealthCare</Text>
            <Text style={styles.cardSub}>
              Book your next online appointments
            </Text>
          </View>
          <Image source={doctors} />
        </View>

        <View style={styles.slideCard}>
            <View>
            <Text style={styles.title}>STI Problems?</Text>
            <Text>Find suitable specialists here</Text>
            </View>

            <Ionicons name="md-arrow-forward-circle-outline" size={40} color="black" />
            </View>

            <Text style={{fontWeight:'600' ,marginVertical:10, fontSize:14}}>
                Specialty
            </Text>
            <ScrollView style={styles.scrollView} horizontal={true}>
                <Category text="Neurology" image={neo} quantity="2,029"/>
                <Category text="Genetics" image={dna} quantity="2,029"/>
                <Category text="Dentistry" image={den} quantity="2,029"/>
            </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    padding: 25,
  },

  scrollView: {
    width: windowWidth,

    
  },

  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },

  icons: {
    display: "flex",
    flexDirection: "row",
  },

  largeCard: {
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
    width: "100%",
    height: 450,
    backgroundColor: "#3E64FF",
    marginVertical: 20,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.26,
    shadowRadius: 6.68,
    alignItems: "center",

    elevation: 11,
  },

  cardTitle: {
    alignSelf: "flex-start",
    color: "white",
    fontWeight: "600",
    fontSize: 30,
    width: "50%",
  },

  cardSub: {
    color: "white",
    alignSelf: "flex-start",
    width: "50%",
  },

  slideCard:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      width:'100%',
      padding:30,
      backgroundColor:'#F5F5FA',
      borderRadius:20
  },

  title:{
      fontWeight:'500',
      fontSize:16
  }
});
