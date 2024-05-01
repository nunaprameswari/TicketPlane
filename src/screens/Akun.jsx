import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Akun = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.login}>TicketPlane</Text>
      <Text style={styles.text}>Login sebelum Pesan Tiket Pesawatmu!</Text>
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
