import img from "../cards-img/1.jpeg";
import '../css/styless.css'
export default function card(props) {
    return (
        <div className="row"> {/* row */}
            {/* <div class="col-sm-3"> */}
            <div className="col col-lg-3 col-md-6 ">
                <div className="card mx-auto animated-card card-size" >
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}