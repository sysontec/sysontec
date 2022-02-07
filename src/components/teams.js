import img from "../assets/img/img-service/movil.jpg";
import TeamsCard from "./teams-card";
export default function Teams() {
    return (
        <div className="">
            <div className="row">
                <h1 className="title center-text p-5">
                    Nuestro equipo
                </h1>
                <p className="center-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed euismod, urna eu tincidunt consectetur, nisl nunc
                    aliquet nunc, eget tincidunt nisl nunc eget purus.
                    Pellentesque habitant morbi tristique senectus et netus
                    et malesuada fames ac turpis egestas.
                </p>
            </div>
           <div className="row">
            <TeamsCard img={img}/>
            </div>
        </div>


    );
}