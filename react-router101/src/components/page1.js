import React from 'react'
import { Link } from 'react-router-dom'

export default function page1() {
    return (
        <div>
            <h1> Page 1 </h1>
            <Link to='/page2'><button>go to page 2</button></Link>
        </div>
    )
}
