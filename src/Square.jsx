export default function Square({ value, func, val }) {
    return (
        <button className="Square" onClick={() => func(value)}>{val[value]}
        </button>
    )
}