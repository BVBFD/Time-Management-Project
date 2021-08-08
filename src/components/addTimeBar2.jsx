import React, { createRef, useCallback, useEffect, useRef, useState } from 'react';

const AddTimeBar2 = (props) => {
    const date = new Date();
    const [seconds, setSeconds] = useState(date.getSeconds());
    const [min, setMin] = useState(date.getMinutes());
    const [hour, setHour] = useState(date.getHours());
    const [year, setYear] = useState(date.getFullYear());
    const [month, setMonth] = useState(date.getMonth() + 1);
    const [day, setDay] = useState(date.getDate());

    useEffect(useCallback(()=>{
        const timer = setInterval(() => {
            setSeconds(seconds + 1);
            if(seconds === 59){
                setSeconds(date.getSeconds());
                setMin(date.getMinutes());
                setHour(date.getHours());
                setYear(date.getFullYear());
                setMonth(date.getMonth() + 1);
                setDay(date.getDate());
            }
        }, 1000);
        return () => clearInterval(timer);
    }));

    const addNewSth = useRef();
    const onSubmit = (event) => {
        event.preventDefault();
        const name = addNewSth.current.value;
        if(name !== ''){
            props.onAdd(name);
        }else{
            return;
        }
        addNewSth.current.value = '';
    };

    return (
        <>
            <header className="addTimeBar">
                <form onSubmit={onSubmit}>
                    <input ref={addNewSth} className="inputSthToDo" type="text" placeholder="Input New Sth To Do" />
                    <button className="btnSthToDo">Add!!</button>
                </form>
                <span className="addTimeBar_date">{`${year > 9 ? year : `0${year}`}/${month > 9 ? month : `0${month}`}/${day > 9 ? day : `0${day}`}`}</span>
                <span className="addTimeBar_time">{`${hour > 9 ? hour : `0${hour}`}/${min > 9 ? min : `0${min}`}/${seconds > 9 ? seconds : `0${seconds}`}`}</span>
            </header>
            <div className="explain-content">Content: Something To Do, (Time), The number of projects, Priority, Delete</div>
        </>
    );
};

export default AddTimeBar2;