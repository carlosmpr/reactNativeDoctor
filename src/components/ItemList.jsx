import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";

const ItemList = ({ pic, title, text }) => {
  return (
    <View style={styles.container}>
      <Image source={pic} />
      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontWeight: "500" }}>{title}</Text>
        <Text style={{ fontWeight: "300" }}>{text}</Text>
      </View>
    </View>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  container: { display: "flex", flexDirection: "row", alignItems: "center", marginVertical:10 },
});
