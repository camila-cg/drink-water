import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, Alert, Modal, TouchableHighlight, Pressable } from 'react-native';
import strings from '../../constants/strings'

import CommonButton from '../../components/CommonButton';
import EnterQtdeConsumidaModal from '../../components/EnterQtdeConsumidaModal';

import Icon from 'react-native-vector-icons/Entypo';

const HomeScreen = (props) => {
    const [bebeuAgua, estadoBebeuAgua] = useState(false);
    const [numCopos, setNumCopos] = useState(0);
    const [qtdeConsumida, setQtdeConsumida] = useState(0);

    const inserirConsumo = (volumeConsumido) => {
        setNumCopos(numCopos + 1);
        setQtdeConsumida(qtdeConsumida + volumeConsumido);
        estadoBebeuAgua(false);
    }

    return (
        <SafeAreaView style={styles.container}>            
            <View style={styles.header}>
                <Text style={styles.textHeader}>{strings.HEADER}</Text>
            </View>

            <View style={styles.banner}>
                <Icon name="cup" size={60} color="dodgerblue" />
                <Text style={styles.sectionTitle}>{numCopos}</Text>
                <Icon name="drop" size={60} color="dodgerblue" />
                <Text style={styles.sectionTitle}>{qtdeConsumida}{strings.UNIDADE_ML}</Text>
            </View>

            <View style={styles.positionBtn}>
                <CommonButton title={strings.DRINK_BTN} style={styles.drinkButton}
                    onPress={() => {estadoBebeuAgua(true)}}
                    disabled={bebeuAgua} />
                {/* como desabilitar o btn? */}
            </View>

            {/* PQ A VIEW DO BTN FICA COM SOMBREAMENTO QUANDO O TECLADO É ABERTO? */}
            <EnterQtdeConsumidaModal show={bebeuAgua} onInput={inserirConsumo}></EnterQtdeConsumidaModal>
        
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    banner:{
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-evenly"
    },
    inputView: {
        backgroundColor: 'pink',
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
    },
    container: {
        flex: 1,
        margin: 2,
        backgroundColor: 'aliceblue',
        flexDirection: "column"
    },
    header: {
        backgroundColor: 'skyblue',
        marginBottom: 10,
        justifyContent: "center"
    },
    textHeader: {
        fontSize: 30,
        color: "white",
        textAlign: "center",
        padding: 20
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
    },
    positionBtn: {
        //backgroundColor: 'orange',
        position: "absolute",
        bottom: 0,
        right: 0
    },
    drinkButton: {
        backgroundColor: 'steelblue',
        borderRadius: 40,
        padding: 8,
        width: 80,
        height: 80,
        justifyContent: 'center',
        margin: 20,
        alignSelf: "flex-end"
    },
    okButton: {
        backgroundColor: 'green',
        borderRadius: 50,
        padding: 10,
        width: 60,
        height: 60,
        justifyContent: 'center',
        margin: 20,
        alignSelf: "flex-end"
    }
});

export default HomeScreen;