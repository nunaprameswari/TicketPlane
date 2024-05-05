import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from '../components/Icon';

const Data = [
  {id: 1, label: 'Top Up'},
  {id: 2, label: 'Top Up'},
  {id: 3, label: 'Top Up'},
  {id: 4, label: 'Top Up'},
  {id: 5, label: 'Top Up'},
];

const Beranda = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>
        Ticket Plane! {'                                          '}
        <MaterialCommunityIcons name="emoticon" size={20} color={'black'} />
      </Text>
      <FlatList
        data={Data}
        renderItem={({item}) => <Icon label={item.label} />}
        horizontal={true}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Akun')}
        style={styles.bottom}>
        <Text style={styles.txt}>Profile</Text>
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
