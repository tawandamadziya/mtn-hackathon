import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    // Navigate to the new screen
    navigation.navigate('Search');
  };
  return (
    <View style={styles.container}>
      <View style={styles.semiCircleCent} />
      <View style={styles.semiCircleLeft} />
      <View style={styles.semiCircleRight} />
      <View style={styles.loginContainer}>
        <Text style={styles.headerText}>Register</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          // Add any other necessary TextInput props here
        />
          <TextInput
          style={styles.input}
          placeholder="Email"
          secureTextEntry
          // Add any other necessary TextInput props here
        />
          <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          secureTextEntry
          // Add any other necessary TextInput props here
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          // Add any other necessary TextInput props here
        />

        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText} >Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.AllAcText}>Already have an account?</Text>
        <TouchableOpacity onPress={handleLoginPress}>
        <Text style={styles.SignIn}>Sign In</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.finalButton}>
          <View style={styles.buttonContent}>
            <Text style={styles.finalButtonText}>Sign up with Google  <Icon name="google" size={20} color="black" style={styles.googleIcon} /></Text>
          </View>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  semiCircleLeft: {
    position: 'absolute',
    top: 0,
    left: -60,
    backgroundColor: '#288CE8',
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  semiCircleCent: {
    position: 'absolute',
    top: 30,
    right: -60,
    backgroundColor: '#288CE8',
    width: 170,
    height: 170,
    borderRadius: 100,},
  semiCircleRight: {
    position: 'absolute',
    top: 40,
    right: -60,
    backgroundColor: '#0D77D9',
    width: 150,
    height: 150,
    borderRadius: 100,},

  loginContainer: {
    backgroundColor: '#C4C4C4',
    height: '75%',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight:'700',
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#288CE8',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  AllAcText
  : {
    fontSize: 17,
    marginBottom: 10,
    fontWeight:'700',
  },
  SignIn: {
    fontSize: 17,
    marginBottom: 20,
    color: '#288CE8',
    fontWeight:'700',
  },
  finalButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    width: '100%',
  },
  finalButtonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default SignUpScreen;
