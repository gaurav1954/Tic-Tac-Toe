export default function Square({ value, onclick }) {
    return (
        <button className="Square" onClick={onclick}>{value}
        </button>
    )
}