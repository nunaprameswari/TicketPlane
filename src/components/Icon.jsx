import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Icon = () => {
  return (
    <TouchableOpacity style={styles.tabel}>
      <View style={styles.kotak}>
        <Text style={styles.txt}>Icon</Text>
      </View>
      <Text style={styles.txt}>LABEL</Text>
    </TouchableOpacity>
  );
};

export default Icon;

const styles = StyleSheet.create({});
