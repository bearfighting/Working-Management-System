import React, {useEffect} from "react";

export default function Themes() {

    // Similar to componentDidMount and componentDidUpdate:  
    useEffect(() => {    
        // Update the document title using the browser API    
        document.body.classList.add("theme-wsm");  
    });
}