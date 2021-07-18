import React, { useContext, useState } from 'react';
import styles from './top.module.scss';
import { InputContext } from '../../../stores/InputStore';

function Top() {
    const [inputState, inputDispatch] = useContext(InputContext);

    return (
        <div className={styles.top_wrapper}>
            {inputState.display}
        </div>
    )
}

export default Top
