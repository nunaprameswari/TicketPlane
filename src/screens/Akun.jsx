import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Akun = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.login}>TicketPlane</Text>
        <Text style={styles.text}>Login sebelum Pesan Tiket Pesawatmu!</Text>
      </View>
      <View style={styles.box}>
        <MaterialCommunityIcons
          name="account"
          size={30}
          color={'black'}
          style={styles.icon}
        />
        <TextInput style={styles.input} placeholder='Username'></TextInput>
      </View>
      <View style={styles.box}>
        <MaterialCommunityIcons
          name="lock"
          size={30}
          color={'black'}
          style={styles.icon}
        />
        <TextInput style={styles.input} placeholder='Password' secureTextEntry></TextInput>
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
  box: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginHorizontal: 30,
    height: 50,
    borderRadius: 20,
    marginVertical: 30,
    elevation: 15,
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15,
  },
  input: {
    flex: 1,
    fontSize: 18,
    fontStyle: 'italic',
  },
});
