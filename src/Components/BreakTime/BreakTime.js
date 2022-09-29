import React from 'react';
import './BreakTime.css';

const BreakTime = (props) => {
    const { addBrkTime } = props;
    return (
        <div className='break-container'>
            <p>Take Break Time (in mnts):</p>
            <button onClick={() => { addBrkTime(20) }} className='brk-btn'> 20 </button>
            <button onClick={() => { addBrkTime(40) }} className='brk-btn'> 40</button>
            <button onClick={() => { addBrkTime(10) }} className='brk-btn'>10</button>
            <button onClick={() => { addBrkTime(45) }} className='brk-btn'>45</button>
        </div>
    );
};

export default BreakTime;