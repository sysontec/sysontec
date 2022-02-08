import img from "../cards-img/1.jpeg";
import movilImg from "../assets/img/img-service/aplicaciones.png";
import webImg from "../assets/img/img-service/web.jpg";
export default function ServiceCard(props) {
    return (
        <div className="row" style={{"paddingLeft":"30px","paddingRight":"30px","paddingBottom":"50px"}}>
            <div className="col col-lg-4 col-md-6 "  style={{"paddingBottom":"10px"}}>
                <div className="card mx-auto animated-card  service-card"  >
                    <img src={movilImg} className="card-img-top"  sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) and (max-width: 1280px) 1280px, (min-width: 1281px) 1620px, 100vw" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Aplicaciones móviles</h5>
                        <p className="lead card-text">Diseño y desarrollo de aplicaciones
                            móviles para plataformas Android.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4 col-md-6 " style={{"paddingBottom":"10px"}}>
                <div className="card mx-auto animated-card service-card"  >
                    <img src={webImg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Aplicaciones Wpeb</h5>
                        <p className="lead card-text">Análisis, diseño y desarrollo de páginas web
                        estáticas y dinámicas, de acorde a las necesidades de su empresa.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4 col-md-6 " style={{"paddingBottom":"10px"}}>
                <div className="card mx-auto animated-card service-card" >
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Software a medida</h5>
                        <p className=" lead card-text">
                            Aplicaciones web y móviles para la gestión de negocios, que
                            se adapten a sus necesidades.
                        </p>
                       
                    </div>
                </div>
            </div>
        </div>

    );
}