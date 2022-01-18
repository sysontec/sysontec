import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from "../img/1.jpg";
import  "../css/styless.css";
export default function header(){
    const navItems = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Contact',
            link: '/contact'
        },
        {
            name: 'Price',
            link: '/price'
        },
        {
            name: 'Portfolio',
            link: '/portfolio'
        }
    ];
    return (
        <Router>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mt-0">
                <div className="container-fluid ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand " to="/" >
                        {/* <img src={logo} alt="" width="100" height="60" class="d-inline-block align-text-top"/> */}
                        AF Software
                    </Link>

                    <div className="collapse navbar-collapse space" id="navbarNav">
                        <ul className="navbar-nav px-12">
                            {
                                navItems.map((item) => {
                                    return (
                                        <li className="nav-item">
                                            <Link to={item.link} className="nav-link">{item.name}</Link>
                                        </li>
                                    );
                                })
                                }
                        
                        </ul>
                    </div>
                   <a href="https://www.facebook.com" className="btn btn-dark">
                    <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.whatsapp.com" className="btn btn-dark">
                    <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href="https://www.instagram.com" className="btn btn-dark">
                    <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.twitter.com" className="btn btn-dark">
                    <i className="fab fa-twitter"></i>
                    </a>
                  

                </div>

            </nav>
        </Router>
    );
}