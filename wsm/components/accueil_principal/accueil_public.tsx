import React, {useEffect} from "react";
import { Container,Row, Col } from "react-bootstrap";
import "./accueil_public.css";
import { 
    contact_logo_dashed,
    logo_front_page, 
    preview_contact, 
    tache_logo, 
    tache_logo_dashed  
} from "../../static"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faFacebookF,
  faPinterest,
  faInstagram,
  faLinkedinIn,
  faGooglePlusG,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

import { 
    faShieldAlt,
    faFingerprint,
    faClock,
    faMobileAlt
  } from '@fortawesome/free-solid-svg-icons'

export default function AccueilPublic({ props }) {

    return (
        <>
        <Container className="container-accueil">
            
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
            <Row className="row-preview" style={{marginTop:"100px !important"}}>
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

        <div className="row-work-flow">
            <div className="flex-container">
                <div className="flex-child">
                <h2>Sélectionnez les services qu'ils vous convient</h2>
                </div>
                <div className="flex-child">
                    <p style={{marginBottom: "5px"}}>
                        Comme nous sommes tous différents, nous avons tous des besoins uniques à nous.
                    </p>
                    <p>
                        Utilisez seulement les services qui vous reflète et devenez votre propre professionnel en gestion du temps.
                    </p>
                </div>
            </div>
        </div>

        <Container className="container-accueil">
            <Row className="row-detail mr-md-5 mr-3 fa-2x">
                <Col md={3} xs={6}>
                    <div>
                        <FontAwesomeIcon  icon={faShieldAlt} />
                        <h4>Sécurité</h4>
                        <p>
                            Work System Management protège vos données grâce à des contrôles 
                            tels que les autorisations et le chiffrement de vos informations personnels
                        </p>
                    </div>
                </Col>
                <Col md={3} xs={6}>
                    <div>
                        <FontAwesomeIcon  icon={faFingerprint} />
                        <h4>Confidentialité</h4>
                        <p>
                            Work System Management s'engage de ne pas divulger vos informations privées.
                        </p>
                    </div>
                </Col>
                <Col md={3} xs={6}>
                    <div>
                        <FontAwesomeIcon  icon={faClock} />
                        <h4>Service 24/7</h4>
                        <p>
                            Nous offrons du soutien technique 24 heures sur 24, 7 jours sur 7.
                            Laissez nos spécialistes résoudre vos problèmes.
                        </p>
                    </div>
                </Col>
                <Col md={3} xs={6}>
                    <div>
                        <FontAwesomeIcon  icon={faMobileAlt} />
                        <h4>Accessibilité</h4>
                        <p>
                            Des services pour votre gestion du temps accessible sur l'appareil électronique de votre choix.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>

        <footer className="page-footer font-small cyan darken-3">


            <div style={{backgroundColor:"#646ECB", width:"100%", padding:"50px 15px"}}>
            <Row>
                <Col>
                <div style={{width:"max-content", margin:"auto"}}>
                    <a href="#" className="fb-ic text-white mr-md-5 mr-3 fa-2x">
                    <FontAwesomeIcon  icon={faFacebookF} />
                    </a>
                
                    <a href="#" className="tw-ic text-white mr-md-5 mr-3 fa-2x">
                    <FontAwesomeIcon  icon={faTwitter} />
                    </a>

                    <a href="#" className="gplus-ic text-white mr-md-5 mr-3 fa-2x">
                    <FontAwesomeIcon  icon={faGooglePlusG} />
                    </a>
                    
                    <a href="#" className="li-ic text-white mr-md-5 mr-3 fa-2x">
                    <FontAwesomeIcon  icon={faLinkedinIn} />
                    </a>
                
                    <a href="#" className="ins-ic text-white mr-md-5 mr-3 fa-2x">
                    <FontAwesomeIcon  icon={faInstagram} />
                    </a>
            
                    <a href="#" className="pin-ic text-white mr-md-5 mr-3 fa-2x">
                    <FontAwesomeIcon  icon={faPinterest} />
                    </a>
                </div>
                </Col>
            </Row>
            </div>

            <div className="footer-copyright text-center py-3 text-white" style={{backgroundColor:"#303DA5"}}>
            Copyright © 2021 Work System Management
            </div>

            </footer>
        </>
    )
}
