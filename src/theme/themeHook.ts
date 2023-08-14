import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { ColorsLight, ColorsDark, ColorType } from './colors';

function useThemeApp(): { colors: ColorType } {

    const theme = useColorScheme();
    const isDarkTheme = theme === 'dark';

    const [colors, setColors] = useState<ColorType>(ColorsLight);

    useEffect(() => {
        if (isDarkTheme) {
            setColors(ColorsDark)
        } else {
            setColors(ColorsLight)
        }
    }, [isDarkTheme]);

    return { colors };
}

export { useThemeApp };
