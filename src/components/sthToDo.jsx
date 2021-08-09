import React, { Component } from 'react';

class SthToDo extends Component {
    endTimeBtn = (event) => {
        const finishBtn = event.target;
        const finishBtnParentName = event.target.parentNode.parentNode.querySelector('.obj-sthToDo_title').innerText;
        finishBtn.classList.remove('obj-sthToDo_finishBtn');
        finishBtn.classList.add('obj-sthToDo_part1');
        const endTime = document.querySelector('.addTimeBar_time').textContent;
        finishBtn.replaceWith(endTime);
        this.props.onHandleEnd(endTime, finishBtnParentName);
    };

    onPriorUpBtn = () => {
        this.props.onPriorUpBtn(this.props.sth);
    };

    onPriorDownBtn = () => {
        this.props.onPriorDownBtn(this.props.sth);
    };

    onDeleteBtn = () => {
        this.props.onDeleteBtn(this.props.sth);
    };

    onOpenToDoList = () => {
        this.props.onOpenToDoList(this.props.sth);
    };

    onAddToDoList = () => {
        if(this.toDoInput.current.value === ''){
            return;
        }else{
            this.props.onAddToDoList(this.toDoInput.current.value, this.props.sth);
        }
        this.toDoInput.current.value = '';
    };

    countToDoList = () => {
        console.log(this.props.sth);
        return this.props.sth.toDoList.length;
    }

    onEditTime = () => {
        this.props.onEditTime(this.props.sth, this.strChangedTime, this.endChangedTime);
    };

    onEditTimeReady = () => {
        this.props.onEditTimeReady(this.props.sth);
    };

    toDoInput = React.createRef();
    strChangedTime = React.createRef();
    endChangedTime = React.createRef();

    render() {
        return (
            <div className="obj-sthToDo">
                <div className="obj-sthToDo_part1">
                    <span className="obj-sthToDo_title">
                        {this.props.sth.name} 
                        <span>(</span>
                        <form className="obj-sthToDo_editStrForm">
                            <input ref={this.strChangedTime} className="obj-sthToDo_editInput" placeholder={this.props.sth.startTime}></input>
                            <button className="obj-sthToDo_editInputBtn">Add</button>
                        </form>
                    </span>

                    <span className="obj-sthToDo_time">
                        {this.props.sth.startTime} 
                    </span>

                    <span>~</span>
                    
                    <span className="obj-sthToDo_endTime">
                        <button className="obj-sthToDo_finishBtn" onClick={this.endTimeBtn}>Finish</button> 
                    </span>
                    <form className="obj-sthToDo_editFinishForm">
                            <input ref={this.endChangedTime} className="obj-sthToDo_editFinishInput" placeholder={this.props.sth.endTime}></input>
                            <button className="obj-sthToDo_editInputBtn">Add</button>
                    </form>)   
                    <button className="obj-sthToDo_editBtn" onClick={this.onEditTimeReady}><i class="fas fa-edit"></i></button>
                </div>

                <div className="obj-sthToDo_part2">
                    <span className="sthToDoList_count">0</span>
                    <button className="addingSthToDoBtn" onClick={this.onOpenToDoList}>
                        <i className="fas fa-caret-square-down fa-lg"></i>
                    </button>
                    <span className="priority_count">{this.props.sth.priority}</span>
                    <button className="plusBtn" onClick={this.onPriorUpBtn}>
                        <i className="fas fa-plus-square fa-lg"></i>
                    </button>
                    <button className="minusBtn" onClick={this.onPriorDownBtn}>
                        <i className="fas fa-minus-square fa-lg"></i>
                    </button>
                    <button className="trashBtn" onClick={this.onDeleteBtn}>
                        <i className="fas fa-trash fa-lg"></i>
                    </button>
                    <div className="project-list">
                        <input ref={this.toDoInput} type="text" className="project-list_input" placeholder="Project (Click Icon again when you want to close it)" />
                        <button className="project-list_btn" onClick={this.onAddToDoList}>Add!!</button>
                        <ul className="project-list_ul">

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SthToDo;