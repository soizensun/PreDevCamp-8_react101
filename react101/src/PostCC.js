import React from 'react'

export default class PostCC extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            count : 0,
            active : 1,
        }
    }

    render() {
        return (
            <div style={{ backgroundColor: "yellow", margin: "10px" }}>
                <h3>{ this.props.username }</h3>
                <h1>post { this.props.title }</h1>
                <h3>detail</h3>
                state count => <span>{ this.state.count }</span>
                <button 
                    onClick={() => this.setState({ count : this.state.count + 1})}>
                    plus 1
                </button>
            </div>
        )
    }
}
