import React, { useState, useRef } from 'react';
import { View, Alert, Keyboard, FlatList } from 'react-native';
import { TaskList, ModalEditTask, ModalMenuTask, BText, BButton } from '@components';
import { Task } from '@models';
import { makeStyles } from './styles';
import { useThemeApp } from '@theme';

export const HomeScreen: React.FC<any> = (props) => {

    const { colors } = useThemeApp();
    const styles = makeStyles(colors);

    const refList = useRef<FlatList>(null);

    const [listTask, setListTask] = useState<Task[]>([]);
    const [isVisibleModalEditTask, setVisibleModalEditTask] = useState<boolean>(false);
    const [isVisibleModalMenuTask, setVisibleModalMenuTask] = useState<boolean>(false);
    const [currentIndexEditing, setCurrentIndexEditing] = useState<number | undefined>(undefined);

    // User want to edit the task name
    const onEditTask = (taskIndex?: number) => {
        setCurrentIndexEditing(taskIndex);
        setVisibleModalEditTask(true);
    };

    // User want to delete the task
    const onDeleteTask = (taskIndex?: number) => {
        setCurrentIndexEditing(taskIndex);
        showAlertComfirmAndDelete();
    };

    // When the user finish edit task
    const onFinishEdit = (preTask: Task | undefined, newTaskName: string) => {
        if (currentIndexEditing !== null && currentIndexEditing !== undefined) {
            setListTask(preData => {
            const newData = [...preData];
            const currentTaskEditing = preData[currentIndexEditing];
            newData[currentIndexEditing] = {
                ...currentTaskEditing,
                taskName: newTaskName
            };
            return newData;
            });
        } else {
            // Add a new task to the top of the list and scroll to the top of the list.
            setListTask(preData => {
                const id = new Date().getTime();
                const newTask = new Task(id, newTaskName, false);
                return [
                    newTask,
                    ...listTask
                ];
            });
            refList?.current?.scrollToOffset({ animated: true, offset: 0 });
        };
        Keyboard.dismiss();
        setVisibleModalEditTask(false);
    };

    // Change the task status
    const onChangeCheckbox = (taskIndex: number, isChecked: boolean) => {
        setListTask(preData => {
            const newData = [...preData];
            const preTask = preData[taskIndex];
            newData[taskIndex] = {
                ...preTask,
                isFinish: isChecked
            };
            return newData;
        })
    };

    // The options menu is displayed
    const onShowMenu = (taskIndex: number) => {
        setCurrentIndexEditing(taskIndex);
        setVisibleModalMenuTask(true);
    }

    // User selects Edit on the options menu
    const onPressMenuEdit = () => {
        setVisibleModalMenuTask(false);
        onEditTask(currentIndexEditing);
    }

    // User selects Delete on the options menu
    const onPressMenuDelete = () => {
        setVisibleModalMenuTask(false);
        onDeleteTask(currentIndexEditing);
    }

    // Tap create button to add a new task
    const onPressAddMore = () => {
        setCurrentIndexEditing(undefined);
        setVisibleModalEditTask(true);
    };

    // Show alert to confirm and delete the task
    const showAlertComfirmAndDelete = () => {
        Alert.alert(
            'Delete task',
            'Are you sure you want to delete this task?',
            [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "Yes", onPress: () => {
                if (currentIndexEditing !== null && currentIndexEditing !== undefined) {
                    setListTask(prevData => {
                        const newData = [...prevData];
                        newData.splice(currentIndexEditing, 1);
                        return newData
                    })
                }
            } }
            ],
            { cancelable: true }
        );
    }

    const currentTaskEditing = (currentIndexEditing !== null && currentIndexEditing !== undefined) ? listTask[currentIndexEditing] : undefined

    return (
        <View style={ styles.container }>
            <ModalEditTask
                isVisible={isVisibleModalEditTask}
                onClose={() => setVisibleModalEditTask(false)}
                onFinishEdit={onFinishEdit}
                task={currentTaskEditing}
            />
            <ModalMenuTask
                isVisible={isVisibleModalMenuTask}
                onClose={() => setVisibleModalMenuTask(false)}
                onPressEdit={onPressMenuEdit}
                onPressDelete={onPressMenuDelete}
                task={currentTaskEditing}
            />
            <BText testID='home-label' style={styles.txtTitle}>Today's Tasks</BText>
            <TaskList
                ref={refList}
                tasks={listTask}
                style={ styles.list }
                onPressEdit={onEditTask}
                onPressDelete={onDeleteTask}
                onChangeCheckbox={onChangeCheckbox}
                onShowMenu={onShowMenu}
            />
            <BButton
                testID='home-create-new-task-button'
                style={ styles.btnFab }
                onPress={onPressAddMore}
            >
                <BText style={styles.txtFab}>+</BText>
            </BButton>
        </View>
    );

};