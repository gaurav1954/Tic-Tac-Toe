import { useCallback, useState } from "react"
import Row from "./Row"
export default function Box({ values, nextIsX, onPlay }) {
    const winner = check(values)
    let draw = 0;
    const n = values.filter((v) => v == null)
    if (n.length === 0)
        draw = 1;
    let status;
    if (winner)
        status = `WINNER is ${!nextIsX ? "X" : "O"}`
    else if (draw)
        status = `Game Drawwwww`
    else
        status = "Next player: " + (nextIsX ? "X" : "O");
    const handleClick = (i) => {
        if (values[i] || check(values))
            return;
        let nextValues = [...values]
        if (nextIsX)
            nextValues[i] = "X"
        else
            nextValues[i] = "O"
        onPlay(nextValues)
    }
    return (
        <div className="Box">
            <div className="status">{status}</div>
            <Row num={0} fun={handleClick} value={values}></Row>
            <Row num={1} fun={handleClick} value={values}></Row>
            <Row num={2} fun={handleClick} value={values}></Row>
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