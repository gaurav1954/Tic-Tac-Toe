import Square from "./Square";
export default function Row({ num, fun, value }) {
    return (
        <div className="Row" >
            <Square value={num * 3 + 0} func={fun} val={value}></Square>
            <Square value={num * 3 + 1} func={fun} val={value}></Square>
            <Square value={num * 3 + 2} func={fun} val={value}></Square>
        </div>
    )
}
