import React, { useEffect, useState } from "react"
import Die from "./components/Die";
import { nanoid } from 'nanoid';
import ReactConfetti from 'react-confetti';
import useWindowSize from "react-use/lib/useWindowSize";
import './App.css';

export default function App() {

    const [dice, setDice] = useState(allNewDice());
    const [rolls, setRolls] = useState(0);
    const [selectedDieCount, setSelectedDieCount] = useState(0);
    const [tenzies, setTenzies] = useState(false);

    const {width, height} = useWindowSize();

    useEffect(() => {
        const allHeld = dice.every(die => die.isHeld);
        const firstValue = dice[0].value;
        const allSame = dice.every(die => die.value === firstValue);
        if (allHeld && allSame) {
            setTenzies(true);
            console.log("Tenzies!");
        }
    }, [dice])


    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            })
        }
        return newDice;
    }

    function rollDice() {
        if (!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? die :
                    { ...die, value: Math.ceil(Math.random() * 6) }
            }));
            setRolls(oldRolls => oldRolls + 1);
        } else {
            setTenzies(false);
            setDice(allNewDice());
            setRolls(0);
            setSelectedDieCount(0);
        }

    }

    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ?
                { ...die, isHeld: !die.isHeld } :
                die
        }))
        setSelectedDieCount(oldSelectedDieCount => oldSelectedDieCount + 1);
    }

    const diceElements = dice.map((die, index) => {
        return (
            <Die
                key={index}
                value={die.value}
                isHeld={die.isHeld}
                holdDice={() => holdDice(die.id)}
            />
        )
    })

    return (
        <>
            <main className="main-container">
                {tenzies && <ReactConfetti width={width} height={height}/>}
                <div className="description">
                    <h1 className="title">Tenzzee</h1>
                    <p className="desc-text">Click on a die to hold it for the next roll.
                        Roll until all dice are the same. Make all the die the same and you win!
                    </p>
                    <h3 className="count-total">Total selected dice <span>{selectedDieCount}</span> & <span>{rolls}</span> rolls</h3>
                </div>
                <div className="container-grid">
                    {diceElements}
                </div>
                <button className="rollDice-btn" onClick={rollDice}>
                    {tenzies ? "New Game" : "Roll Dice"}
                </button>
            </main>
        </>
    )
}