import React from "react";
import Card from "./card";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceCard from "./service-card";
import AboutMe from "./aboutme";
import Teams from "./teams";
export default function Body() {
useEffect(() => {
    AOS.init();

    AOS.refresh();
}, []);     
    return (
        <div className="container-fluid" id="demos" >
            <div className="row pb-5"style={{"background":"#f2f2f2"}}>
                <h1 className="title center-text p-5" >
                    <strong>Modelos de Páginas Estáticas</strong>
                </h1>
                <Card />
            </div>
            
            
            <div className="row" id="services" >
                <h1 className="title center-text dsm-gradient-text p-5">
                    <strong>Servicios</strong>
                </h1>
            </div>

            <ServiceCard/>
            <AboutMe/>
            <Teams/>
                
        </div>

    );
}