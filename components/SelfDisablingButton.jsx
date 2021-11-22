import React from 'react';
import Button from './Button';

export default function SelfDisablingButton(props) {
    const [disabled, setDisabled] = React.useState(false);

    return <Button {...props} disabled={disabled} onClick={() => {
        setDisabled(true);
        setTimeout(setDisabled, props.delay ?? 3000, false);

        if (props.onClick) props.onClick();
    }} />;
}
