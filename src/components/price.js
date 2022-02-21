import React from 'react';
import PriceJson from "../json/plan.json";
export default function PriceCard() {
    /*   PriceJson.map((item, index) => {
          console.log(item.plan);
          item.detalle.map((detalle, index2) => {
              console.log(detalle);
          })
      }
      ) */

    return (
        <>
            <div className="row p-5" id="price">
                <h1 className="center-text">  Nuestros planes</h1>
            </div>
            <div className="row pb-5">
                <div className="col-md-3 col-sm-12"></div>
                {PriceJson.map((item, index) => {
                    return (
                        <div className="col-md-3 col-sm-6 " key={index}>
                            <div  className="planbox highlight price-target">
                                <div className="title">
                                    <h4 className="caps center-text"><strong>{item.plan}</strong></h4>
                                </div>
                                <div className="prices text-center" style={{ "background": item.background }} id="price-card">
                                    <strong>$ {item.precio}</strong>
                                   {/* <b>Regularly <em>$16.99</em></b>
                                     <a href="#">
                                        Sign Up
                                    </a> */}
                                </div>
                                <ul className="p-1">
                                    {
                                        item.detalle.map((detail, idex2) => {
                                            let detailHead=detail.split(",");
                                            return (
                                                <li key={idex2}><strong>{detailHead[0]}</strong> {detailHead[1]}</li>
                                            );
                                        })}
                                </ul>
                            </div>
                        </div>
                    );
                })}

            </div>
        </>
    );
}