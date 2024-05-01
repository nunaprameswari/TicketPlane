import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Akun = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.login}>TicketPlane</Text>
        <Text style={styles.text}>Login sebelum Pesan Tiket Pesawatmu!</Text>
      </View>
      <View>
        <MaterialCommunityIcons name="home" size={30} color={'black'} />
        <Text style={styles.text}>Username</Text>
      </View>
    </View>
  );
};

export default Akun;

const styles = StyleSheet.create({
  login: {
    textAlign: 'center',
    fontSize: 60,
    fontWeight: 'bold',
    //padding: 55,
    margin: 38,
    color: 'grey',
  },
  text: {
    textAlign: 'center',
    fontSize: 17,
  },
});
