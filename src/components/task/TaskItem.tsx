import React from 'react';
import {
    View, StyleSheet, Image
} from 'react-native';
import { BButton, BText } from '@components';
import { Task } from '@models';
import { ICONS } from '@assets';
import { Dimension, useThemeApp, ColorType } from '@theme';

interface TaskItemProps {
    task: Task;
    taskIndex: number;
    onPressEdit: (taskIndex: number) => void;
    onChangeCheckbox: (taskIndex: number, isChecked: boolean) => void;
    onPressDelete: (taskIndex: number) => void;
    onShowMenu: (taskIndex: number) => void;
}

export const TaskItem: React.FC<TaskItemProps> = (props) => {

    const { task, taskIndex, onPressEdit, onChangeCheckbox, onPressDelete, onShowMenu } = props;

    const { colors } = useThemeApp();
    const styles = makeStyles(colors);

    // Tap the label to edit the task name
    const onPressLable = () => {
        onPressEdit(taskIndex);
    };

    // Press and hold to display menu options
    const onLongPressLable = () => {
        onShowMenu(taskIndex);
    };

    // Change task status
    const onPressCheckBox = (isChecked: boolean) => {
        onChangeCheckbox(taskIndex, isChecked);
    };

    // The user presses the delete icon to delete the task
    const onPressIconDelete = () => {
        onPressDelete(taskIndex);
    };

    const _renderLabel = () => {
        const textDecorationLine = task.isFinish ? "line-through" : "none";
        return (
            <BButton testID='button-update-task' onPress={onPressLable} onLongPress={onLongPressLable}>
                <BText style={StyleSheet.flatten([styles.txtTaskName, { textDecorationLine }])}>{task.taskName}</BText>
            </BButton>
        )
    };

    const _renderIconDelete = () => {
        return (
            <BButton onPress={onPressIconDelete} style={styles.wrapDelete}>
                <Image source={ICONS.ICON_DELETE} style={styles.iconDelete}/>
            </BButton>
        )
    };

  return (
    <View style={ styles.task }>
      <BButton onPress={() => onPressCheckBox(!Boolean(task.isFinish))}>
        <Image source={Boolean(task.isFinish) ? ICONS.ICON_CHECKED : ICONS.ICON_UNCHECK} style={styles.radioIcon} tintColor={colors.primary} resizeMode="stretch" />
      </BButton>
      <View style={styles.itemContent}>
        <View style={styles.wrapTitle}>
          {_renderLabel()}
        </View>
        {task.isFinish && _renderIconDelete()}
      </View>
    </View>
  );

};

const makeStyles = (colors: ColorType) => StyleSheet.create({
    task: {
        flexDirection: "row",
        paddingHorizontal: Dimension.margin.small,
        alignItems: "center",
        shadowColor: colors.backdrop,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        margin: Dimension.margin.small,
        backgroundColor: colors.background,
        borderRadius: Dimension.radius.small,
    },
    itemContent: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    wrapTitle: {
        flex: 1,
    },
    txtTaskName: {
        paddingVertical: Dimension.margin.base,
    },
    wrapDelete: {
        padding: Dimension.margin.small,
    },
    iconDelete: {
        width: Dimension.icon.tiny,
        height: Dimension.icon.tiny,
        tintColor: colors.error
    },
    radioIcon: {
        width: Dimension.icon.tiny,
        height: Dimension.icon.tiny,
        marginHorizontal: Dimension.margin.small,
    },
});