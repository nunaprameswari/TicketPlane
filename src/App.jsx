import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Beranda from './screens/Beranda';
import Tiket from './screens/Tiket';
import Akun from './screens/Akun';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MenuTab = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'pink',
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'blue',
        },
      }}>
      <Tabs.Screen
        name="Beranda"
        component={Beranda}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => {
            return (
              <View style={styles.background}>
                <MaterialCommunityIcons name="grid" size={size} color={color} />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="Tiket"
        component={Tiket}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="ticket" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Akun"
        component={Akun}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          component={MenuTab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '',
  },
});
