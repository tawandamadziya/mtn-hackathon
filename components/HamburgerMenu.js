// HamburgerMenu.js
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const HamburgerMenu = ({ filters, toggleMenu }) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <TouchableOpacity onPress={() => setShowFilters(!showFilters)}>
      <View style={styles.menuIcon}>
      <Text style={styles.iconText}>☰</Text>
      </View>
      {/* Display filter options based on showFilters */}
      {showFilters && filters && (
        <View style={[styles.filterOptions, { width: windowWidth * 0.5 }]}>
          {filters.map((filter) => (
            <TouchableOpacity key={filter} onPress={() => console.log(`Filter selected: ${filter}`)}>
              <Text>{filter}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuIcon: {
    paddingHorizontal: 5,
  },
  iconText: {
    fontSize: 24, // Adjust the font size to make the icon bigger
  },
  filterOptions: {
    position: 'relative',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: '100%',
  },
});

export default HamburgerMenu;
