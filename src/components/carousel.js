import { Button } from "@mui/material";
import React from "react";
import imgs from "../json/carousel.json";
const images = require.context('../img', true);
export default function Carousel() {
    let height = "400px";
    return (
        <div id="carouselExampleDark" className="carousel  slide" data-bs-ride="carousel"  style={{"marginTop":"56px"}}>
            <div className="carousel-indicators">
            {
                imgs.map((item, index) => {
                    return (
                        <button key={index}type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={index} className={item.active?"active":undefined} aria-current={item.active?"true":undefined} aria-label={"Slide "+(index+1)}></button>
                    );
                    })
            }
            </div>
            <div className="carousel-inner h-inherit w-inherit w-100">
                {
                    imgs.map((item, index) => {
                        return (
                            <div key={index} className={item.active?"carousel-item h-inherit w-inherit w-100 active":"carousel-item h-inherit w-inherit w-100"} data-bs-interval="2000">
                                <img src= {images(item.path)} className="d-block w-100" height={height} id="carousel-img" alt="..." />
{/*                                 <div className="carousel-caption d-none d-md-block">
                                    <button type="button" className="btn btn-primary" >{item.title}</button>
                                    <p>{item.description}</p>
                                </div> */}
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