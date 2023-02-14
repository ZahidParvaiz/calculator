import React from 'react'
import './App.css'

function App() {
    const [screen, setScreen] = React.useState("");
    const [prev, setPrev] = React.useState("");
    const [op, setOp] = React.useState("");
    const add = () => {
        setPrev(screen);
        setScreen("");
        setOp("+");
    };
    const calculate = ()=> {
        const res= parseFloat(prev) + parseFloat(screen);
        setScreen(res);

    };
    


    return (
        <div className="App">
            <h2>Calculator</h2>
            <div className="screen">{screen}</div>
            <br />
            <button className="num" onClick={() => setScreen(p => p + 7)}>7</button>
            <button className="num" onClick={() => setScreen(p => p + 8)}>8</button>
            <button className="num" onClick={() => setScreen(p => p + 9)}>9</button>
            <button className="num">X</button>
            <br />
            <button className="num" onClick={() => setScreen(p => p + 4)}>4</button>
            <button className="num" onClick={() => setScreen(p => p + 5)}>5</button>
            <button className="num" onClick={() => setScreen(p => p + 6)}>6</button>
            <button className="num">-</button>
            <br />
            <button className="num" onClick={() => setScreen(p => p + 1)}>1</button>
            <button className="num" onClick={() => setScreen(p => p + 2)}>2</button>
            <button className="num" onClick={() => setScreen(p => p + 3)}>3</button>
            <button className="num" onClick={add}>+</button>
            <br />
            <button className="num" onClick={() => setScreen(p => p + 0)}>0</button>
            <button className="num" onClick={() => setScreen(p => p + ".")}>.</button>
            <button className="num">/</button>
            <button className="num" onClick={calculate}>=</button>
            <br />


        </div>
    )
}

export default App
