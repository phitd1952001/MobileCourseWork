import React, { useState, useContext } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { TextInput, Button, RadioButton, Text } from "react-native-paper";
//import DateTimePicker from '@react-native-community/datetimepicker';

import { Spacer } from "../../../components/spacer/spacer.component";
import { HikingContext } from "../../../services/hikings/hiking.context";

export const UpSert = () => {
  const { createHiking } = useContext(HikingContext);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    date: new Date(),
    parkingAvailable: false,
    lengthOfHike: 0,
    difficultLevel: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);

    if (selectedDate) {
      setFormData({ ...formData, Date: selectedDate });
    }
  };

  const handleSubmit = () => {
    // Perform data validation here
    // ...

    // If there are no validation errors, you can submit the data
    if (Object.keys(errors).length === 0) {
      // Handle form submission here
    }
  };

  return (
    <ScrollView>
      <TextInput
        label="Name"
        value={formData.name}
        onChangeText={(text) => handleInputChange("name", text)}
        error={!!errors.name}
        style={styles.textInput}
      />
      {errors.name && <Text>{errors.name}</Text>}
      <Spacer position="bottom" size="medium"/>
      <TextInput
        label="Location"
        value={formData.location}
        onChangeText={(text) => handleInputChange("location", text)}
        error={!!errors.location}
        style={styles.textInput}
      />
      {errors.location && <Text>{errors.location}</Text>}
      <Spacer position="bottom" size="medium"/>
      {/* Date input */}
      <TextInput
        label="Date"
        value={formData.date.toLocaleDateString()}
        onFocus={() => setShowDatePicker(true)}
        style={styles.textInput}
      />
      {/* {showDatePicker && (
        <DateTimePicker
          value={formData.date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )} */}
      <Spacer position="bottom" size="medium"/>
      {/* ParkingAvailable input */}
      <TextInput
        label="Parking Available "
        value={formData.parkingAvailable}
        onChangeText={(text) => handleInputChange("parkingAvailable", text)}
        error={!!errors.parkingAvailable}
        style={styles.textInput}
      />
      {errors.parkingAvailable && <Text>{errors.parkingAvailable}</Text>}
      <Spacer position="bottom" size="medium"/>
      {/* LengthOfHike input */}
      <TextInput
        label="Length Of Hike "
        value={formData.lengthOfHike}
        onChangeText={(text) => handleInputChange("lengthOfHike", text)}
        error={!!errors.lengthOfHike}
        style={styles.textInput}
      />
      {errors.lengthOfHike && <Text>{errors.lengthOfHike}</Text>}
      <Spacer position="bottom" size="medium"/>
      {/* LengthOfHike input */}
      <TextInput
        label="Difficult Level"
        value={formData.difficultLevel}
        onChangeText={(text) => handleInputChange("difficultLevel", text)}
        error={!!errors.difficultLevel}
        style={styles.textInput}
      />
      {errors.difficultLevel && <Text>{errors.difficultLevel}</Text>}
      <Spacer position="bottom" size="medium"/>
      {/* Description input */}
      <TextInput
        label="Description"
        value={formData.description}
        onChangeText={(text) => handleInputChange("description", text)}
        error={!!errors.description}
        style={styles.textInput}
      />
      {errors.description && <Text>{errors.description}</Text>}
      <Spacer position="bottom" size="medium"/>
      <Button style={styles.buttonSubmit} mode="contained" onPress={handleSubmit}>
        Submit
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    textInput: {
      backgroundColor: "white",
    },
    buttonSubmit:{
      backgroundColor: "blue",
    }
});
   
