import React, { Component } from 'react';

class AddTimeBar extends Component {
    state = {
        min: new Date().getMinutes(), 
        hour: new Date().getHours(), 
        year: new Date().getFullYear(), 
        month : new Date().getMonth() + 1, 
        date : new Date().getDate(),
        sec : new Date().getSeconds()
    };

    componentDidMount() {
        this.timer = setInterval(() => {
            const date = new Date();
            if(this.state.sec === 59){
                this.setState({
                    sec: this.state.sec, 
                    min: date.getMinutes(), 
                    hour: date.getHours(), 
                    year: date.getFullYear(), 
                    month : date.getMonth() + 1, 
                    date : date.getDate()});
            }
            this.setState({
                sec: this.state.sec === 59 ? 0 : this.state.sec + 1,
                min: date.getMinutes(),
                hour: date.getHours(), 
                year: date.getFullYear(), 
                month : date.getMonth() + 1, 
                date : date.getDate()
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    addRef = React.createRef();

    onSubmit = (event) => {
        event.preventDefault();
        const name = this.addRef.current.value;
        if(name !== false){
            this.props.onAdd(name);
        }
        this.addRef.current.value = '';
    };

    render() {
        return (
            <>
                <header className="addTimeBar">
                    <form onSubmit={this.onSubmit}>
                        <input ref={this.addRef} className="inputSthToDo" type="text" placeholder="Input New Sth To Do" />
                        <button className="btnSthToDo">Add!!</button>
                    </form>
                    <span className="addTimeBar_date">{`${this.state.year > 9 ? this.state.year : `0${this.state.year}`}/${this.state.month > 9 ? this.state.month : `0${this.state.month}`}/${this.state.date > 9 ? this.state.date : `0${this.state.date}`}`}</span>
                    <span className="addTimeBar_time">{`${this.state.hour > 9 ? this.state.hour : `0${this.state.hour}`}/${this.state.min > 9 ? this.state.min : `0${this.state.min}`}/${this.state.sec > 9 ? this.state.sec : `0${this.state.sec}`}`}</span>
                </header>
                <div className="explain-content">Content: Something To Do, (Time), The number of projects, Priority, Delete</div>
            </>
        );
    };
};

export default AddTimeBar;