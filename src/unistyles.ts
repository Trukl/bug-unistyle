import { StyleSheet } from 'react-native-unistyles';

const lightTheme = {
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    error: '#FF3B30',
    background: '#fff',
    text: '#000',
    textSecondary: '#666',
    border: '#ddd',
    surface: '#f5f5f5',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
  },
};

const darkTheme = {
  colors: {
    primary: '#0A84FF',
    secondary: '#5E5CE6',
    error: '#FF453A',
    background: '#000',
    text: '#fff',
    textSecondary: '#999',
    border: '#333',
    surface: '#1c1c1e',
  },
  spacing: lightTheme.spacing,
  borderRadius: lightTheme.borderRadius,
};

const appThemes = {
  light: lightTheme,
  dark: darkTheme,
};

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

type AppBreakpoints = typeof breakpoints;
type AppThemes = typeof appThemes;

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  themes: appThemes,
  breakpoints,
  settings: {
    initialTheme: 'light',
    // adaptiveThemes: true,
  },
});
