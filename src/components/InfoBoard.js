import React, { Component } from 'react'

export class InfoBoard extends Component {
    render() {
        console.log(this.props.userChoice)
        return (
            <div>
                {this.props.userChoice}
            </div>
        )
    }
}

export default InfoBoard
