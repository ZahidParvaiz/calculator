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

    const sub = () => {
        setPrev(screen);
        setScreen("");
        setOp("-");
    };

    const mul = () => {
        setPrev(screen);
        setScreen("");
        setOp("*");
    };

    const div = () => {
        setPrev(screen);
        setScreen("");
        setOp("/");
    };

    const calculate = () => {
        let res = 0;
        const p = parseFloat(prev);
        const s = parseFloat(screen);
        switch (op) {
            case "+":
                res = p + s;
                break;
            case "-":
                res = p - s;
                break;
            case "*":
                res = p * s;
                break;
            case "/":
                res = p / s;
                break;
        }

        setScreen(res);
    };

    return (
        <div className="App">
            <h2>Calculator</h2>
            <h4>Zahid Parvaiz</h4>
            <div className="screen">{screen}</div>
            <br />
            <button className="num" onClick={() => setScreen(p => p + 7)}>7</button>
            <button className="num" onClick={() => setScreen(p => p + 8)}>8</button>
            <button className="num" onClick={() => setScreen(p => p + 9)}>9</button>
            <button className="num" onClick={mul}>X</button>
            <br />
            <button className="num" onClick={() => setScreen(p => p + 4)}>4</button>
            <button className="num" onClick={() => setScreen(p => p + 5)}>5</button>
            <button className="num" onClick={() => setScreen(p => p + 6)}>6</button>
            <button className="num" onClick={sub}>-</button>
            <br />
            <button className="num" onClick={() => setScreen(p => p + 1)}>1</button>
            <button className="num" onClick={() => setScreen(p => p + 2)}>2</button>
            <button className="num" onClick={() => setScreen(p => p + 3)}>3</button>
            <button className="num" onClick={add}>+</button>
            <br />
            <button className="num" onClick={() => setScreen(p => p + 0)}>0</button>
            <button className="num" onClick={() => setScreen(p => p + ".")}>.</button>
            <button className="num" onClick={div}>/</button>
            <button className="num" onClick={calculate}>=</button>
            <br />


        </div>
    )
}

export default App
