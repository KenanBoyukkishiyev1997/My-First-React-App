import React, { useState } from "react";
import { Text, View, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback,Keyboard } from "react-native";
import { globalStyles } from "./styles/global";
import Card from "../shared/Card";
import { MaterialIcons } from "@expo/vector-icons";
import RevievForm from './revievForm'

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    { title: "Zena", rating: 5, body: "Lorem Ipsum", key: "1" },
    { title: "Gottom", rating: 4, body: "Lorem Ipsum", key: "2" },
    { title: "Not Final", rating: 3, body: "Lorem Ipsum", key: "3" },
    { title: "Agill Final", rating: 1, body: "Lorem Ipsum", key: "4" },
  ]);

  const addReview = (review) =>{
    review.key = Math.random().toString();
    setReviews((currentReview)=>{
      return [review,...currentReview]
    });
    setModalOpen(false)
  }
  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={globalStyles.modalContent}>
          <MaterialIcons
            name="close"
            style={{...globalStyles.modalToggle,...globalStyles.modalClose}}
            size={24}
            onPress={() => setModalOpen(false)}
          />
          <RevievForm addReview={addReview} />
        </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={globalStyles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("RevievDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
