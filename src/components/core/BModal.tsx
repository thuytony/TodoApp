import React from 'react';
import {
    StyleSheet, Platform, View, Modal, ModalProps, TouchableWithoutFeedback, KeyboardAvoidingView,
} from 'react-native';
import { useThemeApp, ColorType } from '@theme';

export interface BModalProps extends ModalProps {
    isVisible: boolean;
    onRequestClose: () => void;
    onModalShow: () => void;
    onModalDismiss?: () => void;
    children: React.ReactNode;
    testID?: string
}

export const BModal: React.FC<BModalProps>  = (props) => {

    const { isVisible, onRequestClose, onModalShow, onModalDismiss, children, testID } = props;

    const { colors } = useThemeApp();
    const styles = makeStyles(colors);

    return (
    <Modal
        testID={testID}
        visible={isVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={onRequestClose}
        onShow={onModalShow}
        onDismiss={onModalDismiss}
    >
        <View style={styles.modal}>
            <TouchableWithoutFeedback onPress={onRequestClose}>
                <View style={styles.container} />
            </TouchableWithoutFeedback>

            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "position" : undefined}>
                <View style={styles.content}>
                    {children}
                </View>
            </KeyboardAvoidingView>
        </View>
    </Modal>
    )

}

const makeStyles = (colors: ColorType) => StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: colors.backdrop,
        justifyContent: "flex-end"
    },
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    content: {
        backgroundColor: colors.background,
        bottom: 0
    },
});
