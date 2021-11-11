import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const ChatMessage = ({active, text,time}) => {
    return (
        <View style={{width:windowWidth-30, display:'flex',  alignItems:active ? 'flex-end':'flex-start', padding:10}}>
            <View style={{width:'50%', backgroundColor:active? '#3E64FF':'#F1F4F7',padding:20, borderRadius:10, borderBottomEndRadius: active ? 0 : 10, borderBottomStartRadius: active ? 10:0}}>
            <Text style={{color:active ? 'white':'black'}}>{text}</Text>
            </View>
            <Text style={{fontSize:10, fontWeight:'300'}}>{time}</Text>
        </View>
    )
}

export default ChatMessage

const styles = StyleSheet.create({})
