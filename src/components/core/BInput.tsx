import React from 'react';
import { StyleSheet, TextInput, TextStyle, TextInputProps } from 'react-native';
import { useThemeApp, ColorType } from '@theme';

type BInputProps = {
    style?: TextStyle
    children?: React.ReactNode | string
    testID?: string
}

const BInput: React.FC<BInputProps & TextInputProps> = (props: BInputProps & TextInputProps) => {

    const {
        style,
        testID,
    } = props;

    const { colors } = useThemeApp();
    const styles = makeStyles(colors);

    const textStyle = StyleSheet.flatten([styles.text, style])

    return (
        <TextInput
            testID={testID}
            style={textStyle}
            {...props}
        />
    );

}

const makeStyles = (colors: ColorType) => StyleSheet.create({
    text: {
        color: colors.text,
    },
});

export { BInput };