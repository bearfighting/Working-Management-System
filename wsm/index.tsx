import React, { useEffect, useState } from "react";
import { Container, Row, Col, } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './components/navi';
import AccueilPublic from './components/accueil_principal/accueil_public';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faFacebookF,
  faPinterest,
  faInstagram,
  faLinkedinIn,
  faGooglePlusG,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import KonamiCode from "./components/konami_code/konami_code";

export default function App(props) {
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
      <KonamiCode />
      <header>
        <Navi connecte={connecte} />
      </header>
      <main style={{ height: "90%" }}>
        <AccueilPublic props={props} />
      </main>
    
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
