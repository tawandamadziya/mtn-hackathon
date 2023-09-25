import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image  } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import HamburgerMenu from '../components/HamburgerMenu';

const BookingsScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBook = () => {
    console.log('Book button pressed with selected date and time:', selectedDate, selectedTime);
  };

  const generateTimeSlots = () => {
    const timeSlots = [];
    let hour = 11;
    let minute = 0;
    const endHour = 15;

    while (hour < endHour) {
      const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
      const formattedMinute = minute < 10 ? `0${minute}` : `${minute}`;
      const time = `${formattedHour}:${formattedMinute} ${hour < 12 ? 'AM' : 'PM'}`;
      timeSlots.push(time);
      minute += 15;
      if (minute === 60) {
        hour += 1;
        minute = 0;
      }
    }

    return timeSlots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <View style={styles.container}>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        {/* Add the Image component with the desired image URL */}
        <Image
          source={require('../screens/123.jpg')} // Change this to your actual image URL
          style={styles.avatarImage}
        />
      </View>

      {/* Hamburger Menu */}
      <View style={styles.hamburgerMenuContainer}>
        <HamburgerMenu onPress={() => console.log('Hamburger menu pressed')} />
      </View>

      {/* Hospital Name */}
      <View style={styles.hospitalNameContainer}>
        <Text style={styles.hospitalNameText}>Hospital Name</Text>
      </View>

      {/* Calendar */}
      <View style={styles.calendarContainer}>
        <CalendarPicker onDateChange={handleDateChange} minDate={new Date()} />
      </View>

      {/* Time Slots */}
      <ScrollView horizontal style={styles.timeSlotsScrollContainer}>
        <View style={styles.timeSlotsContainer}>
          {timeSlots.map((time) => (
            <TouchableOpacity key={time} onPress={() => handleTimeSelect(time)}>
              <View style={styles.timeSlot}>
                <Text style={styles.timeSlotText}>{time}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Book Button */}
      <TouchableOpacity style={styles.bookButton} onPress={handleBook}>
        <Text style={styles.bookButtonText}>Book</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  avatarContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    overflow: 'hidden', // Ensure the image doesn't overflow the container
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  hamburgerMenuContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 40,
    height: 40,
  },
  hospitalNameContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  hospitalNameText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  calendarContainer: {
    marginTop: 30,
  },
  timeSlotsScrollContainer: {
    marginTop: 20,
  },
  timeSlotsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  timeSlot: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    alignItems: 'center',
    minWidth: 80,
  },
  timeSlotText: {
    fontSize: 18,
  },
  bookButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  bookButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BookingsScreen;
