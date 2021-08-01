const style = {
    margin: "15px";
}

export default function Entete({ description }) {
    return (
        <h2 style={style}>{description}</h2>
    )
}
