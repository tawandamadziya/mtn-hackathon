import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import hospitalsData from './hospitals.json';
import HamburgerMenu from '../components/HamburgerMenu.js';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [mapType, setMapType] = useState('standard');
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);

  useEffect(() => {
    setHospitals(hospitalsData);
  }, []);

  const filteredHospitals = hospitals.filter(
    hospital => hospital.province.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMapReset = () => {
    setMapType(prevMapType => (prevMapType === 'standard' ? 'satellite' : 'standard'));
  };

  const filterOptions = ['Province', 'Distance', 'Name'];

  const handleHospitalSelect = (hospital) => {
    setSelectedHospital(hospital);
  };

  // const handleMapReset = () => {
  //   setSelectedHospital(null);
  // };
  const handleBookingsPress = () => {
    // Navigate to the new screen
    navigation.navigate('Booking');
  };

  return (
    <View style={styles.container}>
      {/* Map */}
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        mapType={mapType}
        initialRegion={{
          latitude: -28.4792625, // Centered around South Africa
          longitude: 24.6727131,
          latitudeDelta: 15,
          longitudeDelta: 15,
        }}
        region={selectedHospital ? {
          latitude: selectedHospital.location.latitude,
          longitude: selectedHospital.location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        } : null}
      >
        {selectedHospital && (
          <Marker
            coordinate={selectedHospital.location}
            title={selectedHospital.name}
            description={selectedHospital.province}
          />
        )}
      </MapView>

      {/* White Container */}
      <View style={styles.whiteContainer}>
        <FlatList
          data={filteredHospitals}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleHospitalSelect(item)}>
              <View style={styles.hospitalItem}>
                <Text style={styles.hospitalText}>{item.name} - {item.province}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <View style={styles.buttonsContainer}>
          <Button
            title="Go to Bookings"
            onPress={handleBookingsPress}
            style={styles.button}
          />
          <Button
            title="Change View"
            onPress={handleMapReset}
            color="#FF5252"
          />
        </View>
      </View>

      {/* Hamburger Menu */}
      {/* <HamburgerMenu onPress={() => console.log('Hamburger menu pressed')} filters={filterOptions} /> */}

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for a province"
          onChangeText={setSearchTerm}
          value={searchTerm}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems:'center',
  },
  searchBarContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
    width:'70%',
    alignItems:'center',
  },
  searchBar: {
    height: 40,
    margin: 10,
  },
  hospitalItem: {
    height:60,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#638E68',
  },
  hospitalText: {
    fontSize: 16,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
    zIndex: -1,
  },
  whiteContainer: {
    backgroundColor: 'white',
    height: '46%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    // backfaceVisibility:'hidden',
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default SearchScreen;
