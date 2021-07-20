import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from '../../../components/navi';
import Profil from '../../../components/profil/profil';

export default function ProfilPage(props) {

    const id = props?.url?.params?.id;
    const { user } = props;

    const [connecte, setConnecte] = useState(false);

    useEffect(() => {
        if (props?.user?.id) {
            setConnecte(true);
        } else {
            setConnecte(false);
        }
    }, [props]);

    return (
        <>
            <header>
                <Navi connecte={connecte} />
            </header>
            <main style={{ height: "90%" }}>

            <div className="flex-container-min-height">
                    <div className="flex-child">
                        <Profil user={user} />
                    </div>
                </div>
            </main>
        </>
    )
}
