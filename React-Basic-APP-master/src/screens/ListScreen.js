import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


const listScreen = () => {

    const friends = [
        { name: 'Alisha', Age: 22 },
        { name: 'Jolwina', Age: 23 },
        { name: 'Ruth', Age: 24 },
        { name: 'Arshiya', Age: 25 },
        { name: 'Alisha', Age: 26 },
        { name: 'Jolwina', Age: 27 },
        { name: 'Ruth', Age: 28 },
        { name: 'Arshiya', Age: 29 }
    ]

    return <FlatList
        keyExtractor={({ matchId }, index) => index.toString()}
        data={friends}
        renderItem={({ item, index }) => {
            return <Text style={Styles.textStyle} key={index}>{item.name} - {item.Age}</Text>
        }}
    />
}

const Styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 2,
        textAlign: 'center'
    }
})

export default listScreen;