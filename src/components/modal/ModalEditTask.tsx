import React, { useState } from 'react';
import {
    StyleSheet, View, ModalProps, Keyboard,
} from 'react-native';
import { Task } from '@models';
import { BModal, BText, BButton, BInput } from '../core';
import { Dimension, useThemeApp, ColorType } from '@theme';

export interface ModalEditTaskProps extends ModalProps {
    isVisible: boolean;
    onClose: () => void
    onFinishEdit: (preTask: Task | undefined, newTaskName: string) => void
    task: Task | undefined
}

export const  ModalEditTask: React.FC<ModalEditTaskProps>  = (props) => {

    const { isVisible, onClose, onFinishEdit, task } = props;

    const { colors } = useThemeApp();
    const styles = makeStyles(colors);

    const [taskName, setTaskName] = useState((task && task.taskName) ? task.taskName : "");
    const [isShowError, setShowError] = useState<boolean>(false);

    const handleChangeText = (text: string) => {
        setTaskName(text);
    };

    // Save task name and hide the keyboard after user press save or hit done button in the keyboard
    const onSaveEdit = () => {
        if (taskName) {
            onFinishEdit && onFinishEdit(task, taskName);
            Keyboard.dismiss();
        } else {
            // Show error when user create a new task whithout task name
            setShowError(true);
        }
    };

    // When modal show, set task name and show error is default
    const onModalShow = () => {
        setTaskName((task && task.taskName) ? task.taskName : "");
        setShowError(false);
    };

    return (
        <BModal
            testID='modal-edit-task'
            isVisible={isVisible}
            onRequestClose={onClose}
            onModalShow={onModalShow}
        >
            <View style={styles.modalContainer}>
                <BText style={styles.txtLabel}>Task name</BText>
                <BInput
                    testID='input-task-name'
                    placeholder="Please input the task name"
                    autoFocus
                    blurOnSubmit={false}
                    onSubmitEditing={onSaveEdit}
                    value={taskName}
                    onChangeText={handleChangeText}
                    style={styles.edtTaskName}
                />
                    {isShowError && !taskName && <BText style={styles.txtError}>Please input task name</BText>}
                <View style={styles.header}>
                    <BButton
                        testID='button-save-task'
                        onPress={onSaveEdit}
                        disabled={!taskName}
                    >
                        <BText style={StyleSheet.flatten([styles.txtSave, { color: taskName ? colors.primary : colors.textSecondary }])}>Save</BText>
                    </BButton>
                </View>
            </View>
        </BModal>
    )

}

const makeStyles = (colors: ColorType) => StyleSheet.create({
    modalContainer: {
        padding: Dimension.margin.base,
    },
    header: {
        alignItems: "flex-end"
    },
    txtLabel: {
        fontSize: Dimension.text.small,
        color: colors.textSecondary,
        marginBottom: Dimension.margin.base,
    },
    txtSave: {
        fontSize: Dimension.text.title,
    },
    edtTaskName: {
        fontSize: Dimension.text.title,
    },
    txtError: {
        color: colors.error,
        marginTop: Dimension.margin.tiny,
    },
});
