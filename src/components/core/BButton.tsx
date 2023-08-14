import React from 'react';
import { StyleSheet, Pressable, GestureResponderEvent, ViewStyle } from 'react-native';
import { BText } from './index';

type BButtonProps = {
    onPress?: ((event: GestureResponderEvent) => void) | undefined
    onLongPress?: ((event: GestureResponderEvent) => void) | undefined
    children?: React.ReactNode
    title?: string
    style?: ViewStyle
    disabled?: boolean
    testID?: string
}

const BButton: React.FC<BButtonProps> = (props: BButtonProps) => {

    const {
        onPress = () => {},
        onLongPress = () => {},
        children,
        title,
        style,
        disabled = false,
        testID,
    } = props;

    const buttonStyle = StyleSheet.flatten([styles.button, style])

    return (
        <Pressable testID={testID} style={buttonStyle} onPress={onPress} onLongPress={onLongPress} disabled={disabled}>
            {title && <BText>{title}</BText>}
            {children}
        </Pressable>
    );

}

const styles = StyleSheet.create({
    button: {
        
    },
});

export { BButton };