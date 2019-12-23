import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    return (
        <View style={{ textAlign: 'center', width: '100%', backgroundColor: '#000', color: '#fff' }}>
            <Text style={styles.textStyle}>-------JOSHUA----------</Text>
            <Text>-------FERNANDES----------</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: '#fff'
    }
});

export default ComponentsScreen;