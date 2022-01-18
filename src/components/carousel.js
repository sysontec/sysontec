import React from "react";
import imgs from "../json/carousel.json";
const images = require.context('../img', true);
export default function Carousel() {
    let height = "400px";
    return (
        <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
            {
                imgs.map((item, index) => {
                    return (
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={index} className={item.active?"active":undefined} aria-current={item.active?"true":undefined} aria-label={"Slide "+(index+1)}></button>
                    );
                    })
            }
            </div>
            <div className="carousel-inner">
                {
                    imgs.map((item) => {
                        return (
                            <div className={item.active?"carousel-item active":"carousel-item"} data-bs-interval="2000">
                                <img src= {images(item.path)} className="d-block w-100" height={height} alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{item.title}</h5>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        );
                    }
                    )
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}