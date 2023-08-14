import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dimension, useThemeApp, ColorType } from '@theme';

interface EmptyListProps {
  message?: string
}

export const EmptyList: React.FC<EmptyListProps> = (props) => {

  const { message = "No data" } = props;

  const { colors } = useThemeApp();
  const styles = makeStyles(colors);

  return (
    <View>
      <Text style={styles.txtEmpty}>{message}</Text>
    </View>
  );

};

const makeStyles = (colors: ColorType) => StyleSheet.create({
  txtEmpty: {
    paddingVertical: Dimension.margin.base,
    fontStyle: "italic",
    fontSize: Dimension.text.title,
    lineHeight: 24,
    color: colors.textSecondary,
  },
});