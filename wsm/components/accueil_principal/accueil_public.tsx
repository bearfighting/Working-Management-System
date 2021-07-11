import { Container,Row, Col } from "react-bootstrap";
import "./accueil_public.css";
import { 
    logo_front_page, 
    preview_contact, 
    tache_logo, 
    tache_logo_dashed  
} from "../../static"

export default function AccueilPublic({ props }) {

    return (
        <>
        <Container id="container-accueil">
            <Row className="row-inscription">
                <Col md={6} xs={12}>
                    <div>
                        <h1>L'outil de gestion personnel n° 1 pour votre gestion du temps</h1>
                        <a href="/pages/inscription" className="btn btn-primary">Créer un compte gratuitement</a>
                    </div>
                </Col>
                <Col md={6} xs={12}>
                    <div>
                        <img src={logo_front_page} />        
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="row-presentation">
                    <div>
                        <h2>Une meilleure gestion du temps débute par une bonne planification</h2>
                        <p>
                        Work System Management est une application web offrant divers services gratuits à votre disposition.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className="row-preview">
                <Col md={8} xs={12}>
                    <div>
                        <img src={preview_contact} />        
                    </div>
                </Col>
                <Col md={4} xs={12}>
                    <div>
                        <div>
                            <h3>Ajouter des contacts</h3>
                            <p>
                                Work System Management vous permet de conserver vos listes de contact dans notre application.
                                Null besoin de les saisirs à la main! Importer les directement de votre service de courriel et même
                                de votre téléphone cellulaire!
                            </p>
                        </div>
                        <div>
                            <h3>Automatiser vos messages</h3>
                            <p>
                                Vos contacts seront disponibles à travers l'entièreté de nos services.
                                Automatiser votre gestion du temps par l'envoi de courriel et de texto.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="row-preview">
                <Col md={4} xs={12}>
                    <div>
                        <div>
                            <h3>Ajouter des contacts</h3>
                            <p>
                                Work System Management vous permet de conserver vos listes de contact dans notre application.
                                Null besoin de les saisirs à la main! Importer les directement de votre service de courriel et même
                                de votre téléphone cellulaire!
                            </p>
                        </div>
                        <div>
                            <h3>Automatiser vos messages</h3>
                            <p>
                                Vos contacts seront disponibles à travers l'entièreté de nos services.
                                Automatiser votre gestion du temps par l'envoi de courriel et de texto.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col md={8} xs={12}>
                    <div>
                        <img src={preview_contact} />        
                    </div>
                </Col>
            </Row>
            <Row className="row-preview">
                <Col md={8} xs={12}>
                    <div>
                        <img src={preview_contact} />        
                    </div>
                </Col>
                <Col md={4} xs={12}>
                    <div>
                        <div>
                            <h3>Ajouter des contacts</h3>
                            <p>
                                Work System Management vous permet de conserver vos listes de contact dans notre application.
                                Null besoin de les saisirs à la main! Importer les directement de votre service de courriel et même
                                de votre téléphone cellulaire!
                            </p>
                        </div>
                        <div>
                            <h3>Automatiser vos messages</h3>
                            <p>
                                Vos contacts seront disponibles à travers l'entièreté de nos services.
                                Automatiser votre gestion du temps par l'envoi de courriel et de texto.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}
