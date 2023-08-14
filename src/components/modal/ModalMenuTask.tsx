import React from 'react';
import {
    StyleSheet, View, ModalProps, Image,
} from 'react-native';
import { Task } from '@models';
import { ICONS } from '@assets';
import { BModal, BText, BButton } from '../core';
import { Dimension, useThemeApp, ColorType } from '@theme';

export interface ModalMenuTaskProps extends ModalProps {
    isVisible: boolean;
    onClose: () => void
    onPressEdit: (task?: Task) => void
    onPressDelete: (task?: Task) => void
    task: Task | undefined
}

export const  ModalMenuTask: React.FC<ModalMenuTaskProps>  = (props) => {

    const { isVisible, onClose, onPressEdit, onPressDelete, task } = props;

    const { colors } = useThemeApp();
    const styles = makeStyles(colors);

    const onModalShow = () => {
        
    };

    // Choose the edit option
    const onPressMenuEdit = () => {
        onPressEdit(task)
    };

    // Choose the delete option
    const onPressMeuDelete = () => {
        onPressDelete(task)
    };

    return (
        <BModal
            testID='modal-menu-options'
            isVisible={isVisible}
            onRequestClose={onClose}
            onModalShow={onModalShow}
        >
            <View style={styles.modalContainer}>
                <BButton onPress={onPressMenuEdit} style={styles.row}>
                    <Image source={ICONS.ICON_EDIT} style={styles.iconEdit}/>
                    <BText style={styles.labelEdit}>Edit task</BText>
                </BButton>
                <View style={styles.divider} />
                <BButton testID='button-delete-task' onPress={onPressMeuDelete} style={styles.row}>
                    <Image source={ICONS.ICON_DELETE} style={styles.iconDelete}/>
                    <BText style={styles.labelDelete}>Delete task</BText>
                </BButton>
            </View>
        </BModal>
    )

}

const makeStyles = (colors: ColorType) => StyleSheet.create({
    modalContainer: {
        padding: Dimension.margin.base,
    },
    row: {
        flexDirection: "row",
    },
    labelEdit: {

    },
    labelDelete: {
        color: colors.error,
    },
    divider: {
        marginVertical: Dimension.margin.base,
        height: StyleSheet.hairlineWidth,
        backgroundColor: colors.border,
    },
    iconDelete: {
        width: Dimension.icon.tiny,
        height: Dimension.icon.tiny,
        tintColor: colors.error,
        marginRight: Dimension.margin.base,
    },
    iconEdit: {
        width: Dimension.icon.tiny,
        height: Dimension.icon.tiny,
        tintColor: colors.text,
        marginRight: Dimension.margin.base,
    },
});
