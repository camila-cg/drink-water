import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, Alert, Modal, TouchableHighlight } from 'react-native';
import strings from '../../constants/strings'

import CommonButton from '../../components/CommonButton';
import MyTextInput from '../../components/MyTextInput';
import EnterQtdeConsumidaModal from '../../components/EnterQtdeConsumidaModal';

const HomeScreen = (props) => {
    const [bebeuAgua, estadoBebeuAgua] = useState(false);
    const [volumeConsumido, setVolumeConsumido] = useState(0);
    const [numCopos, setNumCopos] = useState(0);
    const [qtdeConsumida, setQtdeConsumida] = useState(0);

    const setConsumo = () => {
        estadoBebeuAgua(true);
        //Alert.alert("Clique Efetuado");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>{strings.HEADER}</Text>
            </View>
            <View style={styles.showText}>
                <Text style={styles.sectionTitle}>{strings.COPOS_BEBIDOS}{numCopos}</Text>
                <Text style={styles.sectionTitle}>{strings.QTDE_CONSUMIDA}{qtdeConsumida}</Text>
            </View>
            {
                bebeuAgua && (
                    <View style={styles.inputView}>
                        <MyTextInput onChange={(text) => setVolumeConsumido(parseInt(text))}></MyTextInput>
                        <CommonButton title={strings.OK} style={styles.okButton} onPress={() => {
                            setNumCopos(numCopos + 1);
                            setQtdeConsumida(qtdeConsumida + volumeConsumido);
                            estadoBebeuAgua(false);
                        }}
                        />
                    </View>)
            }
            <View style={styles.positionBtn}>
                <CommonButton title={strings.DRINK_BTN} style={styles.drinkButton}
                    onPress={setConsumo}
                    disabled={bebeuAgua} />
                {/* como desabilitar o btn? */}
            </View>

            {/* <EnterQtdeConsumidaModal show={bebeuAgua}></EnterQtdeConsumidaModal> */}
            <EnterQtdeConsumidaModal></EnterQtdeConsumidaModal>
        
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    showText: {
        paddingHorizontal: 10,
        alignItems: "baseline"
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
        backgroundColor: 'lightgray',
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
        backgroundColor: 'skyblue',
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