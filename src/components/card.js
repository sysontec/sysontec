import img from "../cards-img/1.jpeg";
import '../css/styless.css'
import cardItemJson from '../json/card-items.json';
const cardImg=require.context('../cards-img');
export default function card(props) {
    return (
        <div className="row"> {/* row */}
            {/* <div class="col-sm-3"> */}
            {
                cardItemJson.map((item, index) => {
                    return (
                    <div className="col col-lg-4 col-md-6 ">
                        <div className="card mx-auto animated-card box-effect" style={{"width":"17rem"}} >
                            <img src={cardImg("./"+item.img)} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.content}</p>
                                <a href={item["btn-link"]} className="btn btn-primary">{item["btn-text"]}</a>
                            </div>
                        </div>
                    </div>
                    );
                })
            }
        </div>
    );
}