import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  titleText: {
    fontFamily: "lato-bold",
    fontSize: 18,
    color: "#333",
  },
  paragraf: {
    marginVertical: 8,
    lineHeight: 20,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  modalToggle: {
    alignSelf: "center",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor:'#f2f2f2'
  },
  modalClose:{
    marginTop:20,
    marginBottom:0
  },
  modalContent:{
    flex:1
  },
  errorText:{
    color:'crimson',
    fontWeight:'bold',
    marginBottom:10,
    marginTop:6,
    textAlign:"center"
  }
});

export const images = {
  ratings: {
    "1": require("../../assets/rating-1.png"),
    "2": require("../../assets/rating-2.png"),
    "3": require("../../assets/rating-3.png"),
    "4": require("../../assets/rating-4.png"),
    "5": require("../../assets/rating-5.png"),
  },
};
