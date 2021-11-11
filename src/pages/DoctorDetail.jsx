import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Image,
  Button,
} from "react-native";
import doctor from "../../assets/doctor.png";
import Category from "../components/Category";
import patient from "../../assets/patien.png";
import expi from "../../assets/expi.png";
import rate from "../../assets/rate.png";
import msg from "../../assets/msg.png";
import call from "../../assets/call.png";
import video from "../../assets/video.png";
import ItemList from "../components/ItemList";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const DoctorDetail = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollview}>
        <View style={styles.container}>
          <Image source={doctor} style={styles.image} />
          <Text style={styles.name}> Dr Bellamy Nicholas</Text>
          <Text style={styles.specialist}>Viralogist</Text>
        </View>

        <View style={[styles.details, styles.color]}>
          <Category
            text="1000+"
            quantity="Patiens"
            color={"white"}
            image={patient}
          />
          <Category
            text="10 Yrs"
            quantity="Experience"
            color={"white"}
            image={expi}
          />
          <Category
            text="4.5"
            quantity="Ratings"
            color={"white"}
            image={rate}
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.subTitles}>About Doctor</Text>
          <Text>
            Dr. Jhon Doe Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.{" "}
          </Text>
          <View style={{ height: 20 }}></View>
          <Text style={styles.subTitles}>Working Time</Text>
          <Text>Mon - Sat (08:30 AM - 09:00 PM)</Text>

          <View style={{ height: 20 }}></View>

          <Text style={styles.subTitles}>Comunications</Text>
          <ItemList pic={msg} title="Messaging" text="Chat, share photos." />
          <ItemList
            pic={call}
            title="Audio Call"
            text="Call your doctor directly."
          />
          <ItemList
            pic={video}
            title="Video Call"
            text="Video call your doctor."
          />
        </View>

        <Button title={"Book Appointment"} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorDetail;

const styles = StyleSheet.create({
  scrollview: {
    height: windowHeight,
    width: windowWidth,
  },

  container: {
    width: windowWidth,
    display: "flex",
    alignItems: "center",
  },

  details: {
    width: windowWidth,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },

  image: {
    marginVertical: 20,
  },

  name: {
    fontWeight: "600",
    fontSize: 18,
  },

  specialist: {
    marginBottom: 20,
  },

  color: {
    backgroundColor: "#FBF9FA",
  },

  content: {
    width: windowWidth,
    padding: 20,
  },

  subTitles: {
    fontWeight: "600",
    fontSize: 17,
  },
});
