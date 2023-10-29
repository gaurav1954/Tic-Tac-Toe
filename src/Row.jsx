import Square from "./Square";

export default function Row({ bcolor }) {
    return (
        <div className="Row" style={{ backgroundColor: bcolor }}>
            <Square></Square>
            <Square></Square>
            <Square></Square>
        </div>
    )
}