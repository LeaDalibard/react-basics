import React from 'react'
import HelloWorld from "./HelloWorld";

const App = () => (
    <div className="App">
        <h2>Re-use of components</h2>

        <HelloWorld label="Pauline"/>
        <HelloWorld label="Gabriel"/>
        <HelloWorld label="Léa"/>

        <p>Don't forget to export default App</p>
    </div>


)

export default App