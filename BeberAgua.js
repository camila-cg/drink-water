
import React, { useState } from 'react';

import {
    StyleSheet,
    View,
    Button,
    Text,
    TextInput,
    YellowBox,
} from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

const BeberAgua = (props) => {
    let [volumeConsumido, setVolumeConsumido] = useState(0);
    let [numCliques, alteraEstadoNumCliques] = useState(0);
    let [qtdeConsumida, setQtdeConsumida] = useState(0);

    let [bebeuAgua, estadoBebeuAgua] = useState(false);

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.sectionHeader}>Beba Água!</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.sectionTitle}>Copos bebidos: {numCliques}</Text>
                <Text style={styles.sectionTitle}>Qtde consumida (ml): {qtdeConsumida}</Text>
                {
                    bebeuAgua && (
                        <View style={styles.inputQtdeConsumidaView}>
                            <TextInput onChangeText={(text) => setVolumeConsumido(parseInt(text))}></TextInput>
                            <Button title="OK" onPress={() => {
                                alteraEstadoNumCliques(numCliques + 1);
                                setQtdeConsumida(qtdeConsumida + volumeConsumido);
                                estadoBebeuAgua(false);
                            }}
                            />
                        </View>)
                }

                <Button title="Beber" disabled={bebeuAgua} style={styles.buttonBeberAgua} onPress={() => {
                    estadoBebeuAgua(true)
                }} />
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: 'navy',
        marginBottom: 10
    },
    sectionHeader: {
        fontSize: 30,
        color: "white",
        textAlign: "center",
        padding: 20
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    inputQtdeConsumidaView: {
        // TODO: colocar input e botão lado a lado
    },
    buttonBeberAgua:{
        width: 50,
        height:50,
        borderRadius:90,
        elevation:20
    }
});

export default BeberAgua;