import React, {useContext} from 'react';
import { ThemeContext } from '../../stores/ThemeStore';
import styles from './header.module.scss';

function Header() {
    const [themeState, themeDispatch] = useContext(ThemeContext);

    return (
        <div className={styles.header_wrapper}>
            <h2>
                calc
            </h2>

            <div className={styles.theme_switcher}>
                <span className={styles.theme_text}>THEME</span>
                
                <label className={styles.picker_wrapper}>
                <span className={styles.picker_input}>
                    <input 
                        type="radio" 
                        name="radio" 
                        checked={themeState.theme == 1} 
                        onClick={ ()=>{themeDispatch({type: 'CHANGE_THEME', payload: 1})} }
                        readOnly={true}
                        />
                    <span className={styles.picker_control + " " + styles.first}></span>
                </span>
                <span className={styles.picker_label}>1</span>
                </label>

                <label className={styles.picker_wrapper}>
                <span className={styles.picker_input}>
                    <input 
                        type="radio" 
                        name="radio" 
                        checked={themeState.theme == 2} 
                        onClick={ ()=>{themeDispatch({type: 'CHANGE_THEME', payload: 2})} }
                        readOnly={true}
                        />

                    <span className={styles.picker_control}></span>
                </span>
                <span className={styles.picker_label}>2</span>
                </label>

                <label className={styles.picker_wrapper}>
                <span className={styles.picker_input}>
                    <input 
                        type="radio" 
                        name="radio" 
                        checked={themeState.theme == 3} 
                        onClick={ ()=>{themeDispatch({type: 'CHANGE_THEME', payload: 3})} }
                        readOnly={true}
                        />

                    <span className={styles.picker_control + " " + styles.last}></span>
                </span>
                <span className={styles.picker_label}>3</span>
                </label>
                
            </div>
        </div>
    )
}

export default Header
