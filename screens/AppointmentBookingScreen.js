// screens/AppointmentBookingScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const AppointmentBookingScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleBookAppointment = () => {
    // Implement logic to book the appointment
    Alert.alert('Appointment Booked', `Date: ${selectedDate}, Time: ${selectedTime}`);
  };

  return (
    <View>
      <TextInput
        placeholder="Select a date"
        value={selectedDate}
        onChangeText={(text) => setSelectedDate(text)}
      />
      <TextInput
        placeholder="Select a time"
        value={selectedTime}
        onChangeText={(text) => setSelectedTime(text)}
      />
      <Button title="Book Appointment" onPress={handleBookAppointment}  />
    </View>
  );
};

export default AppointmentBookingScreen;
