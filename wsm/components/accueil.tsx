import ConsulterWidget from "./widget_outils/consulter_widget";
import "./commun/commun.css";
import Themes from "./commun/themes";

export default function Accueil({ props }) {
    
    Themes();
    
    return (
        <>
            <h1 className="titre-accueil">WSM Console de Gestion</h1>
            <ConsulterWidget />
        </>
    )
}
