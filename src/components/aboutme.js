import ProfilePicture from "../assets/img/abaout/abaout.jpg";
export default function AboutMe() {
    return (
        <div id="about" className="m-0 p-5" style={{"background":"#f2f2f2"}}>
        <div className="container container-fluid">
            <div className="row">
                <div className="col-5 d-none d-lg-block align-self-center p-5">
                    <img src={ProfilePicture} alt="Abel Farinango"
                        className="border border-secondary bordered"
                        width="375"
                        height="375" />
                </div>
                <div className="col-lg-7 p-5">
                    <h2 className="display-4 mb-5 text-center">Nosotros</h2>
                    <p className="lead text-center">
                        Somo una empresa dedicada al desarrollo de software genérico y 
                        a medida de acorde a las necesiades
                        del cliente.
                        Nuestra misión es ofrecer soluciones tecnológicas a pequeñas y medianas empresas a 
                        tráves de páginas informativas con el fin de mostrar su precencia en el mundo digital.
                    </p>
{/*                     <p className="lead text-center">
                        <button className="btn btn-outline-dark btn-lg " href="https://drive.google.com/file/d/1sh69l-dXehLJ7G-j92ymNpNjMbpcmR-a/view?usp=sharing" role="button" aria-label="Learn more about me">
                            Curriculum
                        </button>
                    </p> */}
                </div>

            </div>
        </div>
        </div>
    );

}