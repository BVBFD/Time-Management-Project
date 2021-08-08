import React, { useCallback, useEffect, useRef, useState } from 'react';

const Practics = (props) => {
    const [count, setCount] = useState(0);
    const spanRef = useRef();

    const handlePlus = useCallback(() => {
        setCount(count + 1);
    });

    const handleMinus = useCallback(() => {
        if(count !== 0){
            setCount(count - 1);
        }
    });

    useEffect(() => {
        console.log(`mounted & updated!: ${count}`);
    }, [count]);

    return (
        <div className="habit-box">
            <span ref={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button className="btn-habit btn-plus" onClick={handlePlus}>
                <i class="fas fa-plus-square"></i>
            </button>
            <button className="btn-habit btn-minus" onClick={handleMinus}>
                <i class="fas fa-minus-square"></i>
            </button>
            <button className="btn-habit btn-trash">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Practics;