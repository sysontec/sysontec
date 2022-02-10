import  "../css/styless.css";
import Carousel from './carousel';
import navItems from '../json/navItem.json';
import Footer from './footer';
import Body from './body';
export default function header(){
    return (
       <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
                <div className="container-fluid ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand " href="#" >
                        {/* <img src={logo} alt="" width="100" height="60" class="d-inline-block align-text-top"/> */}
                        SySon TEC
                    </a>

                    <div className="collapse navbar-collapse space" id="navbarNav">
                        <ul className="navbar-nav px-12">
                            {
                                navItems.map((item,index) => {
                                    return (
                                        <li className="nav-item underline" key={index}>
                                            <a href={item.link} className="nav-link">{item.name}</a>
                                        </li>
                                    );
                                })
                            }
                                
                        
                        </ul>
                    </div>
                   <a href="https://www.facebook.com" rel="noreferrer noopener" target={"_blank"} className="btn btn-dark">
                    <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=593984100360&text=Hola,%20estoy%20interesado" className="btn btn-dark" rel="noreferrer noopener" target={"_blank"}>
                    <i className="fab fa-whatsapp"></i>
                    </a>
{/*                     <a href="https://www.instagram.com" className="btn btn-dark" rel="noreferrer noopener" target={"_blank"}>
                    <i className="fab fa-instagram"></i>
                    </a> */}
                    {/* <a href="https://www.twitter.com" className="btn btn-dark">
                    <i className="fab fa-twitter"></i>
                    </a> */}
                  

                </div>

            </nav>
            <div id="home"></div>
            <Carousel/>
    
           <Body/> 
            <Footer/>
      </>  

    );
}