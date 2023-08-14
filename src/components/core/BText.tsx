import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { useThemeApp, ColorType } from '@theme';

type BTextProps = {
    style?: TextStyle
    children?: React.ReactNode | string
    testID?: string
}

const BText: React.FC<BTextProps> = (props: BTextProps) => {

    const {
        style,
        children,
        testID,
    } = props;

    const { colors } = useThemeApp();
    const styles = makeStyles(colors);

    const textStyle = StyleSheet.flatten([styles.text, style])

    return (
        <Text testID={testID} style={textStyle}>{children}</Text>
    );

}

const makeStyles = (colors: ColorType) => StyleSheet.create({
    text: {
        color: colors.text,
    },
});

export { BText };