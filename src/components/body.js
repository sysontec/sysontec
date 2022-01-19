import Footer from "./footer";
import Card from "./card";
export default function body() {
    return (
        <div className="container-lg">
            <div className="row">
                <h1 className="title center-text">
                    <strong>Nuestros trabajos</strong>
                </h1>
            </div>
            <Card />
            <div className="row">
                <h1 className="title center-text">
                    <strong>Servicios</strong>
                </h1>
            </div>
            <div className="row">
                <h1 className="title center-text">
                    <strong>Tecnologías con los que trabajamos</strong>
                </h1>
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