import styles from './NotFound.module.css'
import React, { useState, useEffect } from 'react';

function NotFound(){
    return (
        <div className={styles.not_found}>
            <img src='https://cdn2.hubspot.net/hubfs/242200/shutterstock_774749455.jpg'/>
            {/* <h1>404 | Not Found</h1>
            <h3>Go back to home</h3> */}
        </div>
    )
}
export default NotFound;