import ConsulterWidget from "./widget_outils/consulter_widget";
import "./commun/commun.css";

export default function Accueil({ props }) {
    return (
        <>
            <h1 className="titre-accueil">WSM Console De Gestion</h1>
            <ConsulterWidget />
        </>
    )
}
