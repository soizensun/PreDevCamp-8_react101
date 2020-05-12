import React, { Component } from 'react'

export default class todolistClassComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
          newItem : "",
          list : [],
        }
      }
    
      updateInput = (key, value) => {
        this.setState({
          [key]: value
        })
      }
      
      addItem = () => {
        const newItem = {
          id : 10 * Math.random(),
          value : this.state.newItem
        }
    
        const tmpList = [...this.state.list]
        tmpList.push(newItem)
    
        this.setState({
          list : tmpList,
          newItem : ""
        })
        console.log(this.state.list);
        
      }
    
      deleteItem = (id) => {
        
        const newList = this.state.list.filter(item => item.id !== id)
        this.setState({
          list: newList 
        })
      }
      
      render(){
        return (
          <div className="App">
            
                <h1>
                    TODO LIST
                </h1>
              <input type="text" value={this.state.newItem} onChange={e => this.updateInput("newItem", e.target.value)}/>
              <button onClick={() => this.addItem()}>add</button>
            <ul>
              {
                this.state.list.map(item => {
                  return(
                    <li key={item.id}>
                      {item.value}
                      <button onClick={() => this.deleteItem(item.id)}>x</button>
                    </li>
                    
                  )
                })
              }
            </ul>
          </div>
        );
      }
}
