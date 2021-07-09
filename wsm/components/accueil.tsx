import ConteneurWidget from "./widget_outils/conteneur_widget";

export default function Accueil({ props }) {
    console.log(props);
    return (
        <>
            <ConteneurWidget />
            <h1 style={{ fontSize: 200, textAlign: "center", marginTop: 300 }}>Bienvenue {props?.user?.nom}</h1>
        </>
    )
}
