import Footer from "./footer";
import Card from "./card";
export default function body() {
    return (
        <div className="container-fluid">
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
            <Card />
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