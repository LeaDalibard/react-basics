import React, {Component} from 'react'

//On importe Component

class HelloWorld extends Component {
    state = {
        value: '',
        //label: 'World',
    }
    // By default label state is World

    _updateValue = ({target: {value}}) => this.setState(
        {value}
//label: this.props.label

    )

    render = () => {
        const {value} = this.state

        return (
            <div>
                <h1>Hello {value} !</h1>
                <input value={value} type="text" onChange={this._updateValue}/>
                <button onClick={this._updateValue}>GO</button>
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
        

