import TeamsCard from "./teams-card";
import TeamsJson  from "../json/teams.json";
const TeamPhoto= require.context("../assets/img/img-teams", true);
export default function Teams() {
    return (
        <>
            <div className="row" id="team">
                <h1 className="title center-text p-5">
                    Nuestro Equipo
                </h1>
                <p className="lead center-text ">
                    Nuestro equipo esta conformado por profesionales con conocimientos y experiencia en el desarrollo de 
                    de Software web, móvil y aplicaciones de escritorio, con fin de dar soluciones optimas a pequeñas, medianos y grandes empresas.

                </p>
            </div>
           <div className="row" style={{"paddingLeft":"30px","paddingRight":"30px","paddingBottom":"50px"}}>
            {
                
                TeamsJson.map(
                    (item, index) => {
                        return (
                            <TeamsCard
                                img={ TeamPhoto("./"+item.photo) }
                                name={item.name}
                                job={item.job}
                                facebook={item.facebook}
                                instagram={item.instagram}
                                linkedin={item.linkedin}
                                github={item.github}
                                key={index}
                            />
                        );
                    }
                )

            }
            </div>
</>
    );
}