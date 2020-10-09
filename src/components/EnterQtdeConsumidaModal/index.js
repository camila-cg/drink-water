import React, { useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";

import strings from "../../constants/strings";
import CommonButton from "../CommonButton";
import SimpleButton from "../SimpleButton";
import MyTextInput from "../MyTextInput";

const EnterQtdeConsumidaModal = (props) => {
    const [volumeConsumido, setVolumeConsumido] = useState(0);

    const setConsumo = () => {
        props.onInput(volumeConsumido);
    }

    return (
        <View style={styles.centeredView}>
            {/* POR QUE O ALERT DE FECHAMENTO N APARECE? */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.show}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.textHeaderModal}>{strings.TXT_INPUT_QTDE}</Text>

                        <View style={styles.inputView}>
                            {/* POR QUE O TAMANHO DO INPUT VARIA DE ACORDO COM A ENTRADA? */}
                            <MyTextInput onChange={(text) => setVolumeConsumido(parseInt(text))}></MyTextInput>
                            <Text style={styles.modalText}>{strings.UNIDADE_ML}</Text>
                        </View>
                        <SimpleButton title={strings.OK} onPress={setConsumo}/>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    inputView: {
        // backgroundColor: 'pink',
        flexDirection: "row",
        padding: 10,
    },
    textHeaderModal: {
        color: "gray",
        fontWeight: "bold",
        textAlign: "center",
        paddingBottom: 15,
        fontSize: 16
    },
    modalText: {
        textAlign: "center",
        alignSelf: "flex-end",
        fontSize: 20,
        padding: 10
    }
});

export default EnterQtdeConsumidaModal;
