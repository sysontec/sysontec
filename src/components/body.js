import React from "react";
import Footer from "./footer";
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
        <div className="container-fluid">
            <div className="row">
                <h1 className="title center-text p-5">
                    <strong>Modelos de paginas estáticas</strong>
                </h1>
            </div>
            <Card />
            
            <div className="row">
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