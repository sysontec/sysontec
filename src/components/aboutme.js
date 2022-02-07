import ProfilePicture from "../assets/img/img-service/movil.jpg";
export default function AboutMe() {
    return (
        <div id="about" className="m-0 p-5" style={{"background":"#f2f2f2"}}>
        <div className="container container-fluid">
            <div className="row">
                <div className="col-5 d-none d-lg-block align-self-center p-5">
                    <img src={ProfilePicture} alt="Abel Farinango"
                        className="border border-secondary "
                        width="375"
                        height="375" />
                </div>
                <div className="col-lg-7 p-5">
                    <h2 className="display-4 mb-5 text-center">Nosotros</h2>
                    <p className="lead text-center">
                        Somos una empresa de desarrollo de software, con más de 10 años de experiencia en el mercado,
                        brindando soluciones a empresas de todo el mundo. Nuestra misión es ofrecer soluciones
                        tecnológicas a las empresas, con una calidad y una solución que satisfaga las necesidades de
                        nuestros clientes.
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