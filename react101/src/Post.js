import React, { useState } from 'react'
import './Post.css'

const Post = (props) => {
    const [count, setCount] = useState(0)
    const [active, setActive] = useState(1)

    return (
        <div className="card">
            <h3>{ props.username }</h3>
            <h1> => {props.title} </h1>
            <h3>detail</h3>
            state count => <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>plus 1</button>
        </div>
    )
}

export default Post
