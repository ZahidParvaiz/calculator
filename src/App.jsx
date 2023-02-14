import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <h2>Calculator</h2>
            <div className="screen">42123</div>
            <br />
            <button className="num">7</button>
            <button className="num">8</button>
            <button className="num">9</button>
            <button className="num">X</button>
            <br />
            <button className="num">4</button>
            <button className="num">5</button>
            <button className="num">6</button>
            <button className="num">-</button>
            <br />
            <button className="num">1</button>
            <button className="num">2</button>
            <button className="num">3</button>
            <button className="num">+</button>
            <br />
            <button className="num">0</button>
            <button className="num">.</button>
            <button className="num">/</button>
            <button className="num">=</button>
            <br />


        </div>
    )
}

export default App
