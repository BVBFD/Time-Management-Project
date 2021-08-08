import React, { Component } from 'react';
import SthToDo from './sthToDo';

class SthsToDo extends Component {
    onHandleEnd = (endTime, finishBtnParentDiv) => {
        this.props.onHandleEnd(endTime, finishBtnParentDiv);
    };

    onPriorUpBtn = (sth) => {
        this.props.onPriorUpBtn(sth);
    };

    onPriorDownBtn = (sth) => {
        this.props.onPriorDownBtn(sth);
    };

    onDeleteBtn = (sth) => {
        this.props.onDeleteBtn(sth);
    };

    onOpenToDoList = (sth) => {
        this.props.onOpenToDoList(sth);
    };

    onAddToDoList = (toDoName, sth) => {
        this.props.onAddToDoList(toDoName, sth);
    };

    render() {
        return (
            <div>
                {this.props.sths.map(sth => (
                        <SthToDo
                            num={sth.id}
                            sth={sth}
                            onHandleEnd={this.onHandleEnd}
                            onPriorUpBtn={this.onPriorUpBtn}
                            onPriorDownBtn={this.onPriorDownBtn}
                            onDeleteBtn={this.onDeleteBtn}
                            onOpenToDoList={this.onOpenToDoList}
                            onAddToDoList={this.onAddToDoList}
                        />
                    ))
                }
            </div>
        );
    }
}

export default SthsToDo;