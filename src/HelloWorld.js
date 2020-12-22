import React, {Component} from 'react'

//On importe Component

class HelloWorld extends Component {
    state = {
        label: 'World',
    }
    // By default label state is World

    _updateLabel = () => this.setState({label: this.props.label})

    render = () => {
        const {label} = this.state

        return (
            <div>
                <h1>Hello {label} !</h1>
                <button onClick={this._updateLabel}>GO</button>
            </div>

        )
    }
//convention JS underscore => private method
//setState method inherit from Commponent to update state of our app
}

    export default HelloWorld


//avec component quand on utilise JSX obligés d'utiliser render()

//My former code without component :
//const HelloWorld = props => (
//     <div>
//         <h1> Hello {props.label} </h1>
//
//         <p>My component is reusable + modulable with label </p>
//     </div>
// )
