import React, { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const CommonButton = (props) => {
    return (
        <Pressable style={props.style} onPress={props.onPress} >
            <Text style={styles.text}>{props.title}</Text>
        </Pressable>

    );
}

export default CommonButton;

// Como inserir ícone no btn?

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    }

});

