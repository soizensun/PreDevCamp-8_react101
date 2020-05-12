import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>

            <Link to = './todolistFunctionComponent'> 
                <button>todolist funcComponent</button>
            </Link>
            <Link to='./todolistClassComponent'>
                <button>todolist classComponent</button>
            </Link>
            
        </div>
    )
}
export default HomePage