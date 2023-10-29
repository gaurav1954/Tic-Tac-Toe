import Box from "./Box";
import { useState } from "react";

export default function Game() {
    const [history, setHistory] = useState([new Array(9).fill(null)]);
    const [nextIsX, setNextIsX] = useState(true);
    const [current, setCurrent] = useState(0)
    const v = history[current];

    const handlePlay = (newSquares) => {
        const nextHistory = [...history.slice(0, current + 1), newSquares]
        setHistory(nextHistory);
        setCurrent(nextHistory.length - 1)
        setNextIsX(!nextIsX);
    };
    const jumpTo = (i) => {
        setCurrent(i)
        setNextIsX(i % 2 === 0)
    }
    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });
    const rst = () => {
        setNextIsX(1);
        setHistory([new Array(9).fill(null)])
        setCurrent(0)
    }
    return (<>
        <div className="game-board">
            <Box values={v} nextIsX={nextIsX} onPlay={handlePlay} />
        </div>
        <div className="game-info">
            <ol>
                {moves}
            </ol>
        </div>
        <div className="reset">
            <button className="rst" onClick={rst}>Reset</button>
        </div>
    </>
    );

}
