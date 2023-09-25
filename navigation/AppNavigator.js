// navigation/AppNavigator.js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from '../screens/SearchScreen';
import BookingScreen from '../screens/BookingsScreen'; 
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen'

const AppNavigator = createStackNavigator(
  {
    Search: SearchScreen,
    Booking: BookingScreen, 
    Login: LoginScreen,
    Signup:SignUpScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(AppNavigator);
