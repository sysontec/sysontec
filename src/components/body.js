import React from "react";
import Footer from "./footer";
import Card from "./card";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceCard from "./service-card";
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
            <div className="row">
                <h1 className="title center-text">
                    <strong>Tecnologías con los que trabajamos</strong>
                </h1>
            </div>
            <div className="row">
                <div className="col col-lg-3 col-md-6 ">
                    Back end
                    <img className="img img-fluid" src="https://cdn.worldvectorlogo.com/logos/node-js-icon.svg" alt="node" />
                </div>
                <div className="col col-lg-3 col-md-6 ">
                    Front end
                    <img className="img img-fluid"  src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt="react" />
                </div>
            </div>
            <div className="row">
                <h1 className="title center-text">
                    <strong>Quienes somos</strong>
                </h1>
            </div>
            <div className="row">
                <h1 className="title center-text">
                    <strong>Contactos</strong>
                </h1>
            </div>

        </div>

    );
}