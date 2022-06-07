import React from "react";
import { Button } from '@mui/material';
import { Checkbox } from '@mui/material';

class Todo extends React.Component { 
    constructor(props) { 
      super(props); 
      this.state = { 
        value: '', 
        itemList: [],
        itemDone: [], 
      }; 
      this.handleChange = this.handleChange.bind(this); 
      this.handleSubmit = this.handleSubmit.bind(this); 
    } 
    handleChange(event) { 
      this.setState({value: event.target.value}); 
    } 
    handleSubmit(event) { 
      this.state.itemList.push(this.state.value);
      this.state.itemDone.push(false); 
      this.setState({value: '', itemList: this.state.itemList, itemDone:this.state.itemDone}); 
      event.preventDefault(); 
    }
    handleDelete(event){
        const tmp1 = this.state.itemList.filter((index,i)=>{
            return event != i;
        })
        const tmp2 = this.state.itemDone.filter((index,i)=>{
            return event != i;
        })
        this.setState({value:'', itemList:tmp1, itemDone:tmp2});
    }
    handleDone(event){
        const tmp = this.state.itemDone;

        if (tmp[event] == true) tmp[event] = false;
        else tmp[event] = true;

        this.setState({itemDone:tmp});
    }
    render() { 
      return ( 
        <div> 
          <form onSubmit={this.handleSubmit}> 
            <h1>CGU Todo list</h1>
              <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="add a new todo..."/> 
              <input type="submit" value="Add"/> 
          </form> 
          <div> 
              {this.state.itemList.map((item, index) => 
              <div key = {`item_${index}`}>
                  <Checkbox id = {index} onClick={() => this.handleDone(index)}></Checkbox>
                  {this.state.itemDone[index] ? 
                    <label for={index} style={{textDecoration:'line-through'}}>{item}</label>
                    : <label for={index}>{item}</label>}
                  <Button onClick={() => this.handleDelete(index)}>X</Button>
              </div>
              )} 
          </div> 
        </div> 
      ); 
    } 
  } 

export default Todo;