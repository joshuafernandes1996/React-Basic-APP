import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => props.navigation.navigate('Components')}
      />
      <TouchableOpacity style={styles.btnStyle} onPress={() => props.navigation.navigate('List')}>
        <Text style={{ color: '#fff', textAlign: 'center', width: '100%' }}>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  btnStyle: {
    width: '100%',
    backgroundColor: 'blue',
    padding: 8
  }
});

export default HomeScreen;
