import React from 'react';
import {QuestionMarkCircleIcon} from '@heroicons/react/solid';
import Card from './Card';

export default function FAB(props) {
    return (
        <Card className={`w-12 h-12 hover:text-black dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md transition-colors duration-200 cursor-pointer ${props.className ?? ''}`} margin={0} padding={2}>
            {React.createElement(props.icon ?? QuestionMarkCircleIcon, {onClick: props.onClick})}
        </Card>
    );
}
