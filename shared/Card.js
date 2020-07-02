import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Card(props) {
  const openMenu = () => navigation.openDrawer();
  return (
    <View style={styles.card}>
      <View style={styles.cardContet}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius:6,
    elevation:3,
    backgroundColor:'#fff',
    shadowOffset:{width:1,height:1},
     shadowColor:'#333',
     shadowOpacity:0.3,
     marginVertical:6,
     marginHorizontal:4,
     shadowRadius:2
     
     
  },
  cardContet: {
    marginHorizontal:18,
    marginVertical:10,
  },
});
