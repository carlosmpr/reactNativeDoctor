import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import doctor from "../../assets/doctor.png";
import { Foundation } from "@expo/vector-icons";
const AvatarCard = () => {
  return (
    <View style={styles.card}>
      <Image source={doctor} />
      <View style={styles.content}>
        <Text style={styles.name}>Dr Bellamy N</Text>
        <Text style={styles.specialty}>Viratologist</Text>
        <View style={styles.review}>
          <Foundation name="star" size={16} color="#FFE662" />
          <Text style={styles.textReview}>4.5(135)Reviews</Text>
        </View>
      </View>
    </View>
  );
};

export default AvatarCard;

const styles = StyleSheet.create({
  card: {
      display:'flex',
      alignItems:'center',
      justifyContent:'space-evenly',
    width: 170,
    height: 200,
    backgroundColor: "white",
    marginRight: 10,
    marginVertical: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6.68,
    alignItems: "center",

    elevation: 1,
  },
  content:{
      alignItems:'center'
  },
  name:{
      fontWeight:'700',
      fontSize:16
  },
  specialty:{
      fontWeight:'300'
  },

  review:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      
  },

  textReview:{
      fontSize:10
  }
});
