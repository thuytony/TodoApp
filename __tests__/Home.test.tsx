/**
 * @format
 */

import React from 'react';
import { Alert } from 'react-native';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { HomeScreen } from '../src/screens'
import { act } from 'react-test-renderer';

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native')
  return Object.setPrototypeOf(
    {
      Alert: {
        ...RN.Alert,
        alert: jest.fn(),
      },
    },
    RN,
  )
})

test('User open home screen', () => {
  const { getByText, getByTestId } = render(
    <HomeScreen />
  );

  // User should see the lable of home screen
  const homeLabel = getByTestId('home-label');
  expect((homeLabel).props.children).toEqual("Today's Tasks");

  // User should see the message when there is no task in the task list
  const message = getByText(`Ready to seize the day?\nSchedule your tasks now! 🌟`);
  expect(message).toBeTruthy();
});

test('User want to create, update and delete the task', async () => {
  const { getByTestId, queryByText } = render(
    <HomeScreen />
  );

  // User want to create a new task
  const buttonCreateNewTask = getByTestId('home-create-new-task-button');
  fireEvent.press(buttonCreateNewTask);

  // The Modal to create a new task will be displayed
  const modalEditTask = getByTestId('modal-edit-task');
  expect(modalEditTask).toBeTruthy();

  const newTaskName = 'new task';
  // User can input task name
  const inputTaskName = getByTestId('input-task-name');
  fireEvent.changeText(inputTaskName, newTaskName);
  await waitFor(() => {
    expect(inputTaskName.props.value).toBe(newTaskName);
  });

  // User press save button to create a new task
  const buttonSave = getByTestId('button-save-task');
  fireEvent.press(buttonSave);
  await waitFor(() => {
    expect(queryByText(newTaskName)).toBeTruthy();
  });

  // User want to update a task
  const buttonUpdateTask = getByTestId('button-update-task');
  fireEvent.press(buttonUpdateTask);
  const taskNameUpdated = 'new task updated';
  const inputTaskNameUpdated = getByTestId('input-task-name');
  fireEvent.changeText(inputTaskNameUpdated, taskNameUpdated);
  // The task name should be updated with new task name
  await waitFor(() => {
    expect(inputTaskNameUpdated.props.value).toBe(taskNameUpdated);
  });

  // User want to delete a task
  fireEvent(buttonUpdateTask, 'onLongPress')

  // The Modal menu options will be displayed
  const modalMenuTask = getByTestId('modal-menu-options');
  expect(modalMenuTask).toBeTruthy();

  // User press delete task
  const buttonDeleteTask = getByTestId('button-delete-task');
  fireEvent.press(buttonDeleteTask);

  // The Alert to confirm delete action should be show
  expect(Alert.alert).toHaveBeenCalled();
  act(() => {
    Alert.alert.mock.calls[0][2][1].onPress();
  });

  // Task should be removed from task list
  await waitFor(() => {
    expect(queryByText(taskNameUpdated)).not.toBeTruthy();
  });
});