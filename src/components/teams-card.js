export default function TeamsCard(props) {
    return (
        <>   <div className="col-lg-4 col-md-6">
            <div className="card mb-3  teams-photo-container" >
                <div className="row g-0">
                    <div className="col-md-4 py-3 ps-2 teams-photo-subcontainer">
                        <img src={props.img} className="img-fluid rounded teams-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.job}
                            </p>
                            <hr />
                            Sigueme en:
                            <ul className="list-inline text-center">
                                <li className="list-inline-item ">
                                    <a className="social-icon" href={props.facebook} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook-square"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="social-icon" href={props.instagram} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="social-icon" href={props.linkedin} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </li>

                                <li className="list-inline-item">
                                    <a className="social-icon" href={props.github} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </li>
                            </ul>


                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}