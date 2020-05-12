import React, { useState } from 'react'

const TodolistFunctionComponent = () => {
    const [lists, setList] = useState([])
    const [newItem, setNewItem] = useState("")

    const addItem = (e) => {
        e.preventDefault()
        const taskformat = {
            id : 10 * Math.random(),
            task : e.target.task.value
        }

        const tmpLists = [...lists]
        tmpLists.push(taskformat)

        setList(tmpLists)
        setNewItem("")

        console.log(lists);
    }

    const deleteItem = (id) => {
        const tmpList = lists.filter((item) => item.id !== id )
        setList(tmpList)
    }

    return (
        <div>
            <h1>
                MY TODO LIST
            </h1>
            <form onSubmit={addItem}>
                <input type="text" name="task" value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
                <button type="submit">add</button>
            </form>
            
            {
                lists.map((item) => {
                    return(                    
                        <li key={item.id}> 
                            {item.task} 
                            <button onClick={() => deleteItem(item.id)}>x</button>
                        </li>
                    )
                })
            }
            

        </div>
    )
}
export default TodolistFunctionComponent