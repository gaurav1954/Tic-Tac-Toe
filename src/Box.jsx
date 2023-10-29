import { useCallback, useState } from "react"
import Square from "./Square"
export default function Box() {
    const [values, setValues] = useState(new Array(9).fill(null))
    const [nextIsX, setNextIsX] = useState(true)
    const winner = check(values)
    let status;
    if (winner)
        status = `WINNER is ${!nextIsX ? "X" : "O"}`
    else
        status = "Next player: " + (nextIsX ? "X" : "O");
    const handleClick = (i) => {
        if (values[i] || check(values))
            return;
        setValues((oldvalues) => oldvalues.map((m, indx) => {
            if (indx == i) {
                if (nextIsX)
                    return "X"
                else
                    return "O"
            }
            return oldvalues[indx]
        }))
        setNextIsX(!nextIsX)
    }
    return (
        <div className="Box">
            <div className="status">{status}</div>
            <div className="row">
                <Square value={values[0]} onclick={() => handleClick(0)}></Square>
                <Square value={values[1]} onclick={() => handleClick(1)}></Square>
                <Square value={values[2]} onclick={() => handleClick(2)}></Square>
            </div>
            <div className="row">
                <Square value={values[3]} onclick={() => handleClick(3)}></Square>
                <Square value={values[4]} onclick={() => handleClick(4)}></Square>
                <Square value={values[5]} onclick={() => handleClick(5)}></Square>
            </div>
            <div className="row">
                <Square value={values[6]} onclick={() => handleClick(6)}></Square>
                <Square value={values[7]} onclick={() => handleClick(7)}></Square>
                <Square value={values[8]} onclick={() => handleClick(8)}></Square>
            </div>
        </div >
    )
}
const check = (matrix) => {
    const winnerLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]];
    for (let i = 0; i < winnerLines.length; i++) {
        const [a, b, c] = winnerLines[i]
        if (matrix[a] && matrix[a] == matrix[b] && matrix[b] == matrix[c])
            return matrix[a]
    }
    return null
}