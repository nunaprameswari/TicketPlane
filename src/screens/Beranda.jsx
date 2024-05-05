import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Tombol from '../components/Tombol';
import Icon from 'react-native-vector-icons/FontAwesome';

const Data = [
  {id: 1, label: 'Pembayaran'},
  {id: 2, label: 'Kalender'},
  {id: 3, label: 'Schedule'},
  {id: 4, label: 'Ticket'},
  {id: 5, label: 'Top Up'},
];

const Beranda = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>
        Ticket Plane! {'                                          '}
        <Icon name="search" size={20} color={'black'} />
      </Text>
      <FlatList
        data={Data}
        renderItem={({item}) => <Tombol label={item.label} />}
        horizontal={true}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Akun')}
        style={styles.bottom}>
        <Text style={styles.txt}>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    fontSize: 23,
  },
  bottom: {
    borderWidth: 5,
    margin: 20,
    padding: 12,
    borderRadius: 40,
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  txt: {
    fontSize: 32,
    color: 'white',
  },
});
