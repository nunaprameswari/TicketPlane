import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
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
    <FlatList
      data={Data}
      renderItem={({item}) => <Icon label={item.label} />}
      horizontal={true}
    />
  </View>
);

export default Beranda;

const styles = StyleSheet.create({});
