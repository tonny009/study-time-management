import React from 'react';
import './Subject.css';

const Subject = (props) => {
    const { name, time, author, instructions, image } = props.subject;
    const { TimeAddtoList, subject } = props;
    return (
        <div className='each_subject_style'>
            <img src={image} alt="" />
            <div className='sub_info'>
                <p><strong>Subject:</strong>  {name}</p>
                <p><strong>Author:</strong> {author}</p>
                <p><strong>Instructions :</strong> {instructions}</p>
                <p><small><strong>Time : </strong>{time} hrs</small></p>
            </div>
            <button onClick={() => { TimeAddtoList(subject) }} className='btn-add'>Add to list</button>

        </div>
    );
};

export default Subject;