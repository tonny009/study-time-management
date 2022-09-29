import React, { useEffect, useState } from 'react';
import Calculation from '../Calculation/Calculation';
import Header from '../Header/Header';
import Subject from '../Subjec/Subject';
import './Main.css';

const Main = () => {
    const subjects = [
        { id: 1, name: 'Physics 1st paper', time: 2, author: 'Dr. Shahjahan Tapan', instructions: 'Read any 2 lessons with full mcq and cq practises.', image: 'images/physics1st.jpg' },
        { id: 2, name: 'Physics 2nd paper', time: 1, author: 'Dr. Amir Hossain khan', instructions: 'Read any 1 lesson with full mcq and cq practises.', image: 'images/physics2nd.jpg' },
        { id: 3, name: 'Chemistry 1st paper', time: 2, author: 'Dr. Saroj Kanti Sign Hazari', instructions: 'Complete 3 lessons with practising all reaction terms.', image: 'images/chem1st.jpg' },
        { id: 4, name: 'Chemistry 2nd paper', time: 1., author: 'Dr. Sanjit Kumar Guha', instructions: 'Complete 1 lessons with al chemical reactions.', image: 'images/chem2nd.jpg' },
        { id: 5, name: 'Math 1st paper', time: 3, author: 'MA Jobbar', instructions: 'Practice any 2 lessons with exercise and example problem.', image: 'images/math1s.jpg' },
        { id: 6, name: 'Math 2nd paper', time: 2, author: 'MA Jobbar', instructions: 'Practice important exercise and example problem.', image: 'images/math2nd.jpg' },
        { id: 7, name: 'English 1st paper', time: 2, author: 'Board Book', instructions: 'Read any 6 lessons with model question solving.', image: 'images/eng1st.jpg' }
    ]

    const [list, setList] = useState([]);
    // console.log(list)


    const TimeAddtoList = (selectedSubject) => {

        let newList = [];
        const exists = list.find(subject => subject.id === selectedSubject.id)
        if (exists) {
            console.log("Already added");
        }
        else {
            newList = [...list, selectedSubject];
            setList(newList);
            const time = selectedSubject.time;
            // console.log(selectedSubject.time);
        }

    }
    return (

        <div className='main-container'>

            <div>
                <Header></Header>
                <div className='subject-container'>
                    {
                        subjects.map(subject => <Subject subject={subject} key={subject.id} TimeAddtoList={TimeAddtoList}></Subject>)
                    }
                </div>
            </div>
            <div className='calculation-container'>
                <Calculation list={list}></Calculation>
            </div>



        </div>
    );
};

export default Main;