import React from 'react';

function getInitialTheme() {
    if (window) {
        const storedValue = window.localStorage.getItem('theme');
        if (['light', 'dark'].includes(storedValue)) return storedValue;

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    }
    
    return null;
}

export const ThemeContext = React.createContext();

export default function ThemeProvider(props) {
    const [theme, setTheme] = React.useState('light');

    React.useEffect(() => {
        setTheme(getInitialTheme() ?? (['light', 'dark'].includes(props.initialTheme) ? props.initialTheme : 'light'));
    }, [props.initialTheme]);

    React.useEffect(() => {
        const root = window.document.documentElement;

        if (theme === 'dark') root.classList.add('dark');
        else root.classList.remove('dark');

        window.localStorage.setItem('theme', theme);
    });

    return <ThemeContext.Provider className={props.className ?? ''} value={[theme, setTheme]}>{props.children}</ThemeContext.Provider>;
}
