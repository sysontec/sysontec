export default function Footer() {
    return (

        <footer className="text-center text-lg-start bg-light text-muted pt-3" id="contact">


            <section className="">
                <div className="container text-center text-md-start mt-5">

                    <div className="row mt-3">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Company name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>


                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                                        Tecnologías
                                    </h6>
                            <div className="row">
                                <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mb-4">
                                   
                                    <p>
                                        <a href="#!" className="text-reset">PHP</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">React</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Java</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">SQL</a>
                                    </p>

                                </div>
                                <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mb-4">

                                    <p>
                                        <a href="#!" className="text-reset">Python</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">C/C++</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Android</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">JavaScript</a>
                                    </p>
                                </div>
                            </div>


                        </div>


                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Contactos
                            </h6>
                            <p><i className="fas fa-home me-3"></i> Quito, Ecuador</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p><i className="fab fa-whatsapp"></i> + 01 234 567 88</p>
                            <p><i className="fab fa-telegram-plane"></i> + 01 234 567 89</p>

                        </div>

                    </div>

                </div>
            </section>

            <div className="text-center p-4" style={{ "backgroundColor": "rgba(0, 0, 0, 0.05)" }}>
                © 2021 Copyright

            </div>

        </footer>

    )
}
