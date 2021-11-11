import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DateCard = ({ date, day, active }) => {
    const styles = StyleSheet.create({
        container: {
          width: 100,
          height: 100,
          borderColor: "#f4f5f8",
          borderWidth: 2,
          backgroundColor:active ? '#3E64FF':'white',
          borderRadius: 15,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginRight:10
        },
        main: { fontSize: 40, color: active ? 'white': 'black' },
        content: {color: active ? 'white': 'black'},
      });
      
  return (
    <View style={styles.container}>
      <Text style={styles.main}>{date}</Text>
      <Text style={styles.content}>{day}</Text>
    </View>
  );
};

export default DateCard;

