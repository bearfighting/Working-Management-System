import React, { useState, useEffect, useCallback } from "react";
import "./konami_code.css";

import { 
    konami_logo, 
  } from "../../static";

export default function KonamiCode() {

    const [isKonamiCode, setIsKonamiCode] = useState(false);
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;

    const detecterKeyDown = useCallback((event) => {
        
        if(konamiCode[konamiIndex] === event.keyCode){
            ++konamiIndex;
        }else{
            konamiIndex = 0;
        }

        if(konamiIndex === 10){
            
            setIsKonamiCode(isKonamiCode ? false : true);
            konamiIndex = 0;
        }

      }, []);

    useEffect(() => {
        document.addEventListener("keydown", detecterKeyDown, false);
    
        return () => {
          document.removeEventListener("keydown", detecterKeyDown, false);
        };
      }, []);

    return (
        <div className={`container-konami-code ${isKonamiCode ? "is-active" : ""}`}>
            <div className={`${isKonamiCode ? "" : "is-hidden"}`}>
                <img className={`konami-logo`} style={isKonamiCode ? {opacity:1} : {opacity:0}} src={konami_logo} />
            </div>
            
        </div>
    )
}
