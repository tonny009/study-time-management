import React, { useState } from 'react';
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
    const [brkTime, setBrktime] = useState();
    const addBrkTime = (inputTime) => {
        console.log(inputTime);
        setBrktime(inputTime);
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

        </div>

    );
};

export default Calculation;