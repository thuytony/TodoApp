import { StyleSheet } from 'react-native';
import { Dimension, ColorType } from '@theme';

const makeStyles = (colors: ColorType) => StyleSheet.create({
    container: {
        flex: 1,
        padding: Dimension.margin.small,
    },
    txtTitle: {
        fontSize: 40,
        marginTop: Dimension.margin.small,
        color: colors.primary,
    },
    list: {
        flex: 1,
        marginTop: 8,
    },
    btnFab: {
        backgroundColor: colors.primary,
        right: 16,
        bottom: 16,
        position: "absolute",
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: colors.backdrop,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    txtFab: {
        color: "white",
        fontSize: 35,
        marginTop: -5,
    },
});

export { makeStyles };
