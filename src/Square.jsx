export default function Square({ value, func, val }) {
    let color;
    if (val[value] == "X")
        color = " rgb(9, 171, 171)"
    else
        color = "rgb(255, 165, 0)"

    return (
        <div className="Square" onClick={() => func(value)} style={{ color: color }}>{val[value]}
        </div>
    )
}