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
import MyTextInput from "../MyTextInput";

const EnterQtdeConsumidaModal = (props) => {
    const [volumeConsumido, setVolumeConsumido] = useState(0);

    const setConsumo = () => {
        props.onInput(volumeConsumido);
    }

    return (
        <View style={styles.centeredView}>
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
                        <Text style={styles.modalText}>MODAL</Text>

                        <View style={styles.inputView}>
                            <MyTextInput onChange={(text) => setVolumeConsumido(parseInt(text))}></MyTextInput>
                            <CommonButton title={strings.OK} style={styles.okButton} onPress={setConsumo}
                            />
                        </View>

                        {/* <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                // props.show = false;
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableHighlight> */}
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    okButton: {
        backgroundColor: 'green',
        borderRadius: 50,
        padding: 10,
        width: 60,
        height: 60,
        justifyContent: 'center',
        margin: 20,
        alignSelf: "flex-end"
    },
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
        backgroundColor: 'pink',
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default EnterQtdeConsumidaModal;
