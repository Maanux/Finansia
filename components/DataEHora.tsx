import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

export default function DataHora() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);

  const showDatePicker = () => {
    setIsVisible(true);
  };

  const hideDatePicker = () => {
    setIsVisible(false);
  };

  const handleConfirm = (date: Date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  //   const handleShowDate = () => {
  //     setShowDate(true);
  //     console.log(setShowDate);
  //   };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Data e Hora Selecionada:</Text> */}

      {showDate && (
        <Text style={styles.dateText}>
          {moment(selectedDate).format("DD/MM/YYYY HH:mm")}
        </Text>
      )}
      <TouchableOpacity style={styles.button} onPress={showDatePicker}>
        <Text style={styles.buttonText}>Selecionar Data e Hora</Text>
      </TouchableOpacity>

      {/* Botão Mostrar com fundo preto e texto branco
      <TouchableOpacity style={styles.button} onPress={handleShowDate}>
        <Text style={styles.buttonText}>Mostrar</Text>
      </TouchableOpacity> */}

      <DateTimePickerModal
        isVisible={isVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  dateText: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
  },
  // Estilo do botão
  button: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
