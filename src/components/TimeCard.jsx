import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TimeCard = ({ time, active }) => {

    const styles = StyleSheet.create({
        container: {
          padding: 18,
          borderWidth: 1,
          borderColor: "#f4f5f8",
          borderRadius: 10,
          backgroundColor:active ? '#3E64FF':'white',
          margin:10
        },
      
        content:{
            color: active ? 'white': 'black' 
        }
      });
  return (
    <View style={styles.container}>
      <Text style={styles.content}>{time}</Text>
    </View>
  );
};

export default TimeCard;


