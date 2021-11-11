import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";

export default function Category({ text, image,quantity,color= '#F5F5FA' }) {
  const styles = StyleSheet.create({
    text: {
      fontSize: 15,
      fontWeight: "bold",
    },
    card: {
      width: 110,
      borderRadius: 20,
      height: 120,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:color,
      marginRight: 20,
     
    },

    circle: {
      backgroundColor: "white",
      padding: 15,
      borderRadius: 50,
    },

    quantity:{
      fontSize:10,
      fontWeight:'200'
    }
  });

  return (
    <View style={styles.card}>
   <Image source={image} />
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.quantity}>{quantity}</Text>
    </View>
  );
}
