import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../Utilities/fakedb';
import BreakTime from '../BreakTime/BreakTime';
import Profile from '../ProfileSection/Profile';
import './Caculation.css';


const Calculation = (props) => {
    const { list } = props;
    // console.log(list);
    let totaltime = 0;
    let time = 0;
    for (const readsubject of list) {
        totaltime = totaltime + readsubject.time;
    }

    //breake time showing-------------
    const [brkTime, setBrktime] = useState(0);



    useEffect(() => {
        const storedbrktime = getStoredCart();
        console.log(storedbrktime);
        for (const id in storedbrktime) {
            const addedProduct = storedbrktime[id];
            if (addedProduct) {
                setBrktime(addedProduct);

            }
        }

    }
        , [])


    const addBrkTime = (inputTime) => {
        const attribute = 'BreakTime';
        // console.log(inputTime);
        setBrktime(inputTime);
        addToDb(inputTime, attribute)

    }
    return (
        <div className='calculation-part'>
            <Profile></Profile>
            <BreakTime addBrkTime={addBrkTime}></BreakTime>
            <div className='total-time'>
                <p>Total Time : {totaltime}hrs</p>
            </div>
            <div className='total-time'>
                <p>Breake Time : {brkTime} mnt</p>
            </div>
            <div><button className='complete-btn'>Study Complete !</button></div>

        </div>

    );
};

export default Calculation;