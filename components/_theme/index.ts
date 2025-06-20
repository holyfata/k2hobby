import { useRef } from "react";
import { Dark as darkPalette, Light as lightPalette } from './_palette';
import { Dark as darkTheme, Light as lightTheme } from './global';

declare global {
    interface Window {
        __palette__: typeof lightPalette | typeof darkPalette;
        __theme__: typeof lightTheme | typeof darkTheme;
    }
}

export enum Theme {
    LIGHT,
    DARK
}

export const useTheme = () => {
    const theme = useRef(Theme.LIGHT);
    const setTheme = (newTheme: Theme) => {
        theme.current = newTheme;
        window.__palette__ = newTheme === Theme.LIGHT ? lightPalette : darkPalette;
        window.__theme__ = newTheme === Theme.LIGHT ? lightTheme : darkTheme;
    };
    return {
        theme: theme.current,
        setTheme
    }
}
