import React from 'react';
import {SunIcon, MoonIcon} from '@heroicons/react/solid';
import FAB from './FAB';
import {ThemeContext} from './ThemeContext';

export default function ThemeToggle(props) {
    const [theme, setTheme] = React.useContext(ThemeContext);

    return (
        <FAB className={props.className ?? ''} icon={theme === 'dark' ? SunIcon : MoonIcon} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
    );
}
