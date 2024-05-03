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

const Beranda = () => (
  <View>
    <Text style={styles.text}>Hello User!</Text>
    <TouchableOpacity style={styles.search}>
      <MaterialCommunityIcons name="pencaharian" size={26} />
    </TouchableOpacity>
    <FlatList
      data={Data}
      renderItem={({item}) => <Icon label={item.label} />}
      horizontal={true}
    />
  </View>
);

export default Beranda;

const styles = StyleSheet.create({
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    fontSize: 23,
  },
  search: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
