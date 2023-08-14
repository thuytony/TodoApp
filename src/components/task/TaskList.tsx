import React from 'react';
import { FlatList, StyleSheet, ListRenderItemInfo, ViewStyle } from 'react-native';
import { EmptyList } from '../list/EmptyList';
import { TaskItem } from './TaskItem';
import { Task } from '@models';
import { useThemeApp, ColorType } from '@theme';

interface TaskListProps {
  tasks: Task[]
  style?: ViewStyle
  onPressEdit: (indexTaskEdit: number) => void
  onPressDelete: (indexTaskEdit: number) => void
  onChangeCheckbox: (indexTaskEdit: number, isChecked: boolean) => void
  onShowMenu: (indexTaskEdit: number) => void
}

export const TaskList = React.forwardRef((props: TaskListProps, ref) => {

    const { tasks, style } = props;

    const { colors } = useThemeApp();
    const styles = makeStyles(colors);

    const keyExtractor = (item: Task, index: number) => `${item.id}`;

    const renderEmpty = () => {
        return <EmptyList message={`Ready to seize the day?\nSchedule your tasks now! 🌟`} />
    };

    const renderItem = ({item, index}: ListRenderItemInfo<Task>) => {
        const { onPressEdit, onPressDelete, onChangeCheckbox, onShowMenu } = props;
        return (
            <TaskItem
                task={item}
                taskIndex={index}
                onPressEdit={onPressEdit}
                onPressDelete={onPressDelete}
                onChangeCheckbox={onChangeCheckbox}
                onShowMenu={onShowMenu}
            />
        );
    };

    return (
        <FlatList
            ref={ref}
            style={style}
            ListEmptyComponent={renderEmpty}
            showsVerticalScrollIndicator={false}
            data={tasks}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    );

});

const makeStyles = (colors: ColorType) => StyleSheet.create({
    
});