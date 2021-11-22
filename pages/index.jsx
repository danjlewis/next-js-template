import React from 'react';
import SelfDisablingButton from '../components/SelfDisablingButton';
import styles from '../styles/index.module.css';

export default function Index() {
    return (
        <div>
            <SelfDisablingButton className={styles.button} variant='contained' delay={1000}>Click me!</SelfDisablingButton>
        </div>
    );
}
