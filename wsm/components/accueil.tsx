export default function Accueil({ props }) {
    console.log(props);
    return (
        <h1 style={{ fontSize: 200, textAlign: "center", marginTop: 300 }}>Bienvenue {props?.user?.nom}</h1>
    )
}
