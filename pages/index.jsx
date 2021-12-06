import React from 'react';
import Button from '../components/Button';

export default function Index() {
    const [disabled, setDisabled] = React.useState(false);
    
    return <Button className='w-32 p-1' onClick={() => {setDisabled(true); setTimeout(setDisabled, 2000, false)}} disabled={disabled}>Click me!</Button>;
}
