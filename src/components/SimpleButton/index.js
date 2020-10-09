import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

const SimpleButton = (props) => {
    return (
        <TouchableHighlight style={{ ...styles.openButton }} onPress={props.onPress} underlayColor={styles.underlayColor}>
            <Text style={styles.textStyle}>{props.title}</Text>
        </TouchableHighlight>
    );
}

export default SimpleButton;

const styles = StyleSheet.create({
    underlayColor:{
        color: "skyblue"
    },
    openButton: {
        backgroundColor: "#2196F3",
        borderRadius: 10,
        padding: 10,
        elevation: 8,
        alignSelf: "flex-end",
        margin: 5
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    }
});

