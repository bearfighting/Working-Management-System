import React from "react";
import ConsulterWidget from "./consulter_widget";
import "./consulter_widget.css";
import "./../commun/commun.css"

export default function ConteneurWidget() {

    return (
        <>
            <ConsulterWidget />
        </>
    )

    /*const [estVisible, setEstVisible] = useState(false);
    const toggleEstVisible = () => {
        setEstVisible(estVisible ? false : true);
    }*/

    /*return (
        <>
            <div className="container" onClick={toggleEstVisible}>asdasdasd</div>
            <main className="cd-main-content">
            </main>

            <div className={`cd-panel cd-panel--from-left js-cd-panel-main ${estVisible ? "cd-panel--is-visible" : ""}`}>
                <div className="cd-panel__container">
                    <div className="cd-panel__content">
                        <ConsulterWidget />
                    </div>
                </div>
            </div>
        </>
    )*/
}
