import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const MyTextInput = (props) => {
    
    return (
        <TextInput style={styles.input} value={props.value} onChangeText={(text) => props.onChange(text)} 
            secureTextEntry={props.isPassword} keyboardType={props.isPassword ? 'default' : 'email-address'} />
    )
}

export default MyTextInput;

const styles = StyleSheet.create({
    input: {
        backgroundColor: "powderblue",
        fontSize: 20,
        borderBottomColor: "blue",
        borderBottomWidth: 2
    }
});