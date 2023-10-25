import React from 'react';
import cardCSS from '../cssModules/shiftCard.module.css';

const ShiftCard = (props) => {
    const shift = props.shift;
        return (
            <div style={styles.card}>
            <div className={cardCSS["top"]}>
                <div className={cardCSS["top-left"]}>
                <h3>Name: {shift.name}</h3>
                </div>
                <div className={cardCSS["top-right"]}>
                <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" alt="User" />
                </div>
            </div>
            <div className={cardCSS["bottom"]}>
                <div className={cardCSS["bottom-left"]}>
                <p>Date: {shift.date}</p>
                </div>
                <div className={cardCSS["bottom-right"]}>
                <p>Shift Start: {shift.startTime}</p>
                <p>Shift End: {shift.endTime}</p>
                </div>
            </div>
            </div>
        );
};
    

const styles = {
    card: {
        margin: '15px 10px',
        height: '100%',
        padding: 0,
        borderRadius: '16px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
    }
}

export default ShiftCard;
