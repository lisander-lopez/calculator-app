import React, { useContext } from 'react'
import styles from './content.module.scss';
import { InputContext } from '../../../stores/InputStore';

function Content() {
    const [inputState, inputDispatch] = useContext(InputContext);

    return (
        <div className={styles.content_wrapper}>
            <div 
                className={styles.primary_button} 
                onClick={ () => { inputDispatch({type: 'INPUT_NUMBER', payload: '7' }) } } >
                    7
            </div>
            <div 
                className={styles.primary_button} 
                onClick={ () => { inputDispatch({type: 'INPUT_NUMBER', payload: '8' }) } } >
                    8
            </div>
            <div 
                className={styles.primary_button} 
                onClick={ () => { inputDispatch({type: 'INPUT_NUMBER', payload: '9' }) } } >
                    9
            </div>
            <div 
                className={styles.secondary_button}
                onClick={ () => { inputDispatch({ type: 'CLEAR_INPUT' }) } }>
                    DEL
            </div>

            <div 
                className={styles.primary_button} 
                onClick={ () => { inputDispatch({type: 'INPUT_NUMBER', payload: '4' }) } } >
                    4
            </div>
            <div 
                className={styles.primary_button} 
                onClick={ () => { inputDispatch({type: 'INPUT_NUMBER', payload: '5' }) } } >
                    5
            </div>
            <div 
                className={styles.primary_button} 
                onClick={ () => { inputDispatch({type: 'INPUT_NUMBER', payload: '6' }) } } >
                    6
            </div>
            <div 
                className={styles.primary_button} 
                onClick={ () => { inputDispatch({type: 'INPUT_OPERATOR', payload: '+' }) } } >
                    +
            </div>
            
            <div 
                className={styles.primary_button} 
                onClick={ () => { inputDispatch({type: 'INPUT_NUMBER', payload: '3' }) } } >
                    3
            </div>
            <div 
                className={styles.primary_button} 
                onClick={ () => { inputDispatch({type: 'INPUT_NUMBER', payload: '2' }) } } >
                    2
            </div>
            <div 
                className={styles.primary_button} 
                onClick={ () => { inputDispatch({type: 'INPUT_NUMBER', payload: '1' }) } } >
                    1
            </div>
            <div 
                className={styles.primary_button} 
                onClick={ () => { inputDispatch({type: 'INPUT_OPERATOR', payload: '-' }) } } >
                    -
            </div>

            <div 
                className={styles.primary_button} 
                onClick={ () => { inputDispatch({type: 'INPUT_NUMBER', payload: '.' }) } } >
                    .
            </div>
            <div 
                className={styles.primary_button} 
                onClick={ () => { inputDispatch({type: 'INPUT_NUMBER', payload: '0' }) } } >
                    0
            </div>
            <div 
                className={styles.primary_button} 
                onClick={ () => { inputDispatch({type: 'INPUT_OPERATOR', payload: '/' }) } } >
                    /
            </div>
            <div 
                className={styles.primary_button} 
                onClick={ () => { inputDispatch({type: 'INPUT_OPERATOR', payload: 'x' }) } } >
                    x
            </div>

            <div className={styles.secondary_button + ' ' + styles.two_col}>
                RESET
            </div>
            
            <div 
                className={styles.terceary_button + ' ' + styles.two_col} 
                onClick={ () => { inputDispatch({type: 'INPUT_OPERATOR', payload: '=' }) } } >
                =
            </div>

        </div>
    )
}

export default Content
