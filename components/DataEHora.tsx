import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

export default function DataHora({
  onDateSelected,
}: {
  onDateSelected: (date: string) => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const showDatePicker = () => {
    setIsVisible(true);
  };

  const hideDatePicker = () => {
    setIsVisible(false);
  };

  const handleConfirm = (date: Date) => {
    const formattedDate = moment(date).format("YYYY-MM-DD HH:mm:ss");
    setSelectedDate(formattedDate);
    onDateSelected(formattedDate);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      {selectedDate ? (
        <Text style={styles.dateText}>{selectedDate}</Text>
      ) : null}
      <TouchableOpacity style={styles.button} onPress={showDatePicker}>
        <Text style={styles.buttonText}>Selecionar Data e Hora</Text>
      </TouchableOpacity>

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
    marginTop: 10,
  },
  dateText: {
    fontSize: 16,
    marginBottom: 10,
  },
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
