import './app.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import AddTimeBar from './components/addTimeBar';
import SthsToDo from './components/sthsToDo';
import AddTimeBar2 from './components/addTimeBar2';
class App extends Component {
  state = {
    sths: [
  
    ]
  };
  handleAdd = (name) => {
    const sths = [...this.state.sths, 
      { id: this.state.sths.length + 1, 
        name: name, 
        priority: 0,
        startTime: document.querySelector('.addTimeBar_time').textContent,
        endTime: '',
        toDoList: []
      }];
    this.setState({sths});
  };

  addEndTime = (endTime, finishBtnParentName) => {
    const sths = [...this.state.sths];
    sths.map(sth => {
      if(finishBtnParentName === sth.name + "("){
        sth.endTime = endTime;
      }
      this.setState({sths});
      console.log({sths});
    });
  };

  priorUpBtn = (sth) => {
    const sths = this.state.sths.map(value => {
      if(value.id === sth.id){
        return {...sth, priority: sth.priority + 1};
      }else{
        return value;
      }
    });
    this.setState({sths})
  };

  priorDownBtn = (sth) => {
    const sths = this.state.sths.map(value => {
      if(sth.id === value.id){
        const sthPriority = sth.priority - 1;
        if(sthPriority < 0){
          return {...sth, priority: 0};
        }else{
          return {...sth, priority: sth.priority - 1};
        }
      }else{
        return value;
      }
    })
    this.setState({sths});
  };

  deleteBtn = (sth) => {
    const sths = this.state.sths.filter(value => sth.id !== value.id);
    this.setState({sths});
  };

  openToDoList = (sth) => {
    this.state.sths.forEach(value => {
      if(sth.id === value.id){
        const index = this.state.sths.indexOf(sth);
        const toDoList = document.querySelectorAll('.project-list ')[`${index}`];
        toDoList.classList.toggle('list-show');
      }
    });
  };

  addToDoList = (toDoName, sth) => {
    this.state.sths.forEach(value => {
      if(value.id === sth.id){
        const index = this.state.sths.indexOf(sth);
        const listToDo_ul = document.querySelectorAll('.project-list_ul')[index];
        const listToDo_li = document.createElement('li');
        const listToDo_cnt = document.createTextNode(toDoName);
        const listToDo_btn = document.createElement('button');
        const listToDo_cnt_exit = document.createTextNode('x');

        listToDo_btn.addEventListener("click", event => {
          listToDo_ul.removeChild(event.target.parentNode);
          console.log(event.target.parentNode.textContent);
          console.log(`${sth.toDoList}`);
          const toDoList = sth.toDoList.filter(value => 
            value + "x" !== event.target.parentNode.textContent
          );
          console.log(toDoList);
          const sths = this.state.sths.map(value => {
            if(value.id === sth.id){
              sth.toDoList = toDoList;
              return sth;
            } 
            return value;
          });
          this.setState({sths});
          const count = sth.toDoList.length;
          document.querySelectorAll(".sthToDoList_count")[index].innerText = count;
        });
      
        listToDo_li.appendChild(listToDo_cnt);
        listToDo_ul.appendChild(listToDo_li);
        listToDo_btn.appendChild(listToDo_cnt_exit);
        listToDo_li.appendChild(listToDo_btn);
        sth.toDoList.push(toDoName);
        const count = sth.toDoList.length;
        document.querySelectorAll(".sthToDoList_count")[index].innerText = count;
      }
    });
  };

  editEndTime = (sth) => {
    const index = this.state.sths.indexOf(sth);
    const editStrForm = document.querySelectorAll('.obj-sthToDo_editStrForm')[index];
    const editFinishForm = document.querySelectorAll('.obj-sthToDo_editFinishForm')[index];
    const strTime = document.querySelectorAll('.obj-sthToDo_time')[index];
    const endTime = document.querySelectorAll('.obj-sthToDo_endTime')[index];
    const newEndTime = document.querySelectorAll('.obj-sthToDo_editFinishInput')[index].value;
    editStrForm.style.display = "none";
    editFinishForm.style.display = "none";
    strTime.style.display = "inline";
    endTime.style.display = "inline";
    endTime.innerText = newEndTime;
    const sths = this.state.sths.map(value => {
      if(value.id === sth.id){
        return {...value, endTime: newEndTime};
      }
      return value;
    });
    this.setState({sths});
  };

  editStrTime = (sth) => {
    console.log(sth);
    const index = this.state.sths.indexOf(sth);
    const editStrForm = document.querySelectorAll('.obj-sthToDo_editStrForm')[index];
    const editFinishForm = document.querySelectorAll('.obj-sthToDo_editFinishForm')[index];
    const strTime = document.querySelectorAll('.obj-sthToDo_time')[index];
    const endTime = document.querySelectorAll('.obj-sthToDo_endTime')[index];
    const newStrTime = document.querySelectorAll('.obj-sthToDo_editInput')[index].value;
    editStrForm.style.display = "none";
    editFinishForm.style.display = "none";
    strTime.style.display = "inline";
    endTime.style.display = "inline";
    strTime.innerText = newStrTime;
    const sths = this.state.sths.map(value => {
      if(value.id === sth.id){
        return {...value, startTime: newStrTime};
      }
      return value;
    });
    this.setState({sths});
  };

  editTimeReady = (sth) => {
    this.state.sths.forEach(value => {
      if(sth.id === value.id){
          const index = this.state.sths.indexOf(sth);
          const editStrForm = document.querySelectorAll('.obj-sthToDo_editStrForm')[index];
          const editFinishForm = document.querySelectorAll('.obj-sthToDo_editFinishForm')[index];
          const strTime = document.querySelectorAll('.obj-sthToDo_time')[index];
          const endTime = document.querySelectorAll('.obj-sthToDo_endTime')[index];
        if(editStrForm.style.display !== "none"){
          editStrForm.style.display = "none";
          editFinishForm.style.display = "none";
          endTime.style.display = "inline";
          strTime.style.display = "inline";
        }
        else{
          editStrForm.style.display = "inline-block";
          editFinishForm.style.display = "inline-block";
          strTime.style.display = "none";
          endTime.style.display = "none";
        }
      }
    });
  };

  totalToDoCount = () => {
    const count = this.state.sths.length;
    return count;
  };

  render() {
    return (
      <div>
        <Navbar onTotalToDoCount={this.totalToDoCount}/>
        {/* <AddTimeBar onAdd={this.handleAdd}/> */}
        <AddTimeBar2 onAdd={this.handleAdd}/>
        <SthsToDo 
          sths={this.state.sths}
          onHandleEnd={this.addEndTime}
          onPriorUpBtn={this.priorUpBtn}
          onPriorDownBtn={this.priorDownBtn}
          onDeleteBtn={this.deleteBtn}
          onOpenToDoList={this.openToDoList}
          onAddToDoList={this.addToDoList}
          onEditEndTime={this.editEndTime}
          onEditStrTime={this.editStrTime}
          onEditTimeReady={this.editTimeReady}
        />
      </div>
    );
  }
}
export default App;