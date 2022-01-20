import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from "../img/1.jpg";
import  "../css/styless.css";
import Carousel from './carousel';
import navItems from '../json/navItem.json';
import Footer from './footer';
import Body from './body';
export default function header(){
    return (
        <Router>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
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
                                        <li className="nav-item underline">
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
                    {/* <a href="https://www.twitter.com" className="btn btn-dark">
                    <i className="fab fa-twitter"></i>
                    </a> */}
                  

                </div>

            </nav>
            <Carousel/>
    
           <Body/> 
            <Footer/>
        </Router>

    );
}