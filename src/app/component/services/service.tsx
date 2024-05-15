'use client'

import { useRef } from 'react';
import gsap from "gsap";
gsap.registerPlugin(useGSAP);
import './style.css'
import { useGSAP } from '@gsap/react';
export default function Service() {

    const container = useRef();

    useGSAP(() => {
      
      gsap.from(".align-items-center", {
          y: 50,
          //   scale: 0.2,
          opacity: 0,
          duration:1,
          yoyo: true
      });
      gsap.to(".align-items-center", {
          y: 0,
          //   scale: 0.2,
          opacity: 1,
          duration: 1,
          yoyo: true
      });
    
  
     }, {scope: container}); 
  
    return(
<>
        <div ref={container} className="container-fluid service py-6">
            <div  className="container">
                <div  className="text-center wow bounceInUp" data-wow-delay="0.1s">
                    <small  className="d-inline-block fw-bold text-dark text-uppercase   border border-primary_orange  rounded-pill px-4 py-1 mb-3">Our Services</small>
                    <h1  className="display-5 mb-5">What We Offer</h1>
                </div>
                <div  className="row g-4">
                    <div  className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.1s">
                        <div  className="  rounded service-item">
                            <div  className="service-content d-flex align-items-center justify-content-center p-4">
                                <div  className="service-content-icon text-center">
                                    {/* <!-- <i  className="fas fa-cheese fa-7x    mb-4"></i> --> */}
                                    <img  className="text-primary_orange width-fixed mb-4" src="/image/fresh water.png" />
                                    <h4  className="mb-3 colored-blue">Purified Water</h4>
                                    <p  className="mb-4">Crystal clear purified water, refreshing and revitalizing, for everyday hydration.</p>
                                    <a href="#"  className="btn btn-primary_orange top-primary_orange px-4 py-2 rounded-pill">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.3s">
                        <div  className="  rounded service-item">
                            <div  className="service-content d-flex align-items-center justify-content-center p-4">
                                <div  className="service-content-icon text-center">
                                    {/* <!-- <i  className="fas fa-pizza-slice fa-7x text-primary_orange   mb-4"></i> --> */}
                                    <img  className="text-primary_orange mb-4 width-fixed" src="image/slice-bottle-removebg-preview-removebg-preview.png" />
                                    <h4  className="mb-3 colored-blue">Mango Juice</h4>
                                    <p  className="mb-4">Tropical bliss in every sip</p>

                                    <a href="#"  className="btn btn-primary_orange top-primary_orange px-4 py-2 rounded-pill">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.5s">
                        <div  className="  rounded service-item">
                            <div  className="service-content d-flex align-items-center justify-content-center p-4">
                                <div  className="service-content-icon text-center">
                                    {/* <!-- <i  className="fas fa-hotdog fa-7x text-primary_orange   mb-4"></i> --> */}
                                    <img src="image/small-packet-removebg-preview.png"  className="text-primary_orange mb-4 width-fixed_mini"/>
                                    <h4  className="mb-3">Juice box</h4>
                                    <p  className="mb-4">A small sip is required, for a big refreshment</p>

                                    <a href="#"  className="btn btn-primary_orange top-primary_orange px-4 py-2 rounded-pill">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.7s">
                        <div  className="  rounded service-item">
                            <div  className="service-content d-flex align-items-center justify-content-center p-4">
                                <div  className="service-content-icon text-center">
                                    {/* <!-- <i  className="fas fa-hamburger fa-7x text-primary_orange   mb-4"></i> --> */}
                                    <img src="image/big-pcket-removebg-preview.png"   className="mb-4 text-primary_orange width-fixed"/>
                                    <h4  className="mb-3">Fresh Juice</h4>
                                    <p  className="mb-4">Pure, refreshing liters of delicious juice, perfect for any occasion</p>
                                    <a href="#"  className="btn btn-primary_orange top-primary_orange px-4 py-2 rounded-pill">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>

        
</>
        
    )
}