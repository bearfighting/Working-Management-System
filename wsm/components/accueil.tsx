import ConsulterWidget from "./widget_outils/consulter_widget";


export default function Accueil({ props }) {
    console.log(props);
    return (
        <>
            <h1 style={{ fontSize: 200, textAlign: "center" }}>Bienvenue {props?.user?.nom}</h1>
            <ConsulterWidget />
        </>
    )
}
