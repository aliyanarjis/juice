import './style.css'
export default function Service() {
    return(
<>
        <div  className="container-fluid service py-6">
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
                                    <a href="#"  className="btn btn-primary_orange px-4 py-2 rounded-pill">Read More</a>
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

                                    <a href="#"  className="btn btn-primary_orange px-4 py-2 rounded-pill">Read More</a>
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

                                    <a href="#"  className="btn btn-primary_orange px-4 py-2 rounded-pill">Read More</a>
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
                                    <a href="#"  className="btn btn-primary_orange px-4 py-2 rounded-pill">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>

        {/* testimonial says */}

        <div className="container-fluid py-6">
            <div className="container">
                <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                    <small className="d-inline-block fw-bold text-dark text-uppercase   border border-primary_orange  rounded-pill px-4 py-1 mb-3">Testimonial</small>
                    <h1 className="display-5 mb-5">What Our Customers says!</h1>
                </div>
                <div className="owl-carousel owl-theme testimonial-carousel testimonial-carousel-1 mb-4 wow bounceInUp" data-wow-delay="0.1s">
                    <div className="testimonial-item rounded  ">
                        <div className="d-flex mb-3">
                            <img src="img/testimonial-1.jpg" className="img-fluid rounded-circle flex-shrink-0" />
                            <div className="position-absolute" style={{top: '15px', right: '20px'}}>
                                <i className="fa fa-quote-right fa-2x"></i>
                            </div>
                            <div className="ps-3 my-auto">
                                <h4 className="mb-0">Person Name</h4>
                                <p className="m-0">Profession</p>
                            </div>
                        </div>
                        <div className="testimonial-content">
                            <div className="d-flex">
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                            </div>
                            <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="testimonial-item rounded  ">
                        <div className="d-flex mb-3">
                            <img src="img/testimonial-2.jpg" className="img-fluid rounded-circle flex-shrink-0" alt=""/>
                            <div className="position-absolute" style={{top: '15px' , right: '20px'}}>
                                <i className="fa fa-quote-right fa-2x"></i>
                            </div>
                            <div className="ps-3 my-auto">
                                <h4 className="mb-0">Person Name</h4>
                                <p className="m-0">Profession</p>
                            </div>
                        </div>
                        <div className="testimonial-content">
                            <div className="d-flex">
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                            </div>
                            <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="testimonial-item rounded  ">
                        <div className="d-flex mb-3">
                            <img src="img/testimonial-3.jpg" className="img-fluid rounded-circle flex-shrink-0" alt=""/>
                            <div className="position-absolute" style={{'top': '15px', 'right': '20px'}}>
                                <i className="fa fa-quote-right fa-2x"></i>
                            </div>
                            <div className="ps-3 my-auto">
                                <h4 className="mb-0">Person Name</h4>
                                <p className="m-0">Profession</p>
                            </div>
                        </div>
                        <div className="testimonial-content">
                            <div className="d-flex">
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                            </div>
                            <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="testimonial-item rounded  ">
                        <div className="d-flex mb-3">
                            <img src="img/testimonial-4.jpg" className="img-fluid rounded-circle flex-shrink-0" alt=""/>
                            <div className="position-absolute" style={{top: '15px', right: '20px'}}>
                                <i className="fa fa-quote-right fa-2x"></i>
                            </div>
                            <div className="ps-3 my-auto">
                                <h4 className="mb-0">Person Name</h4>
                                <p className="m-0">Profession</p>
                            </div>
                        </div>
                        <div className="testimonial-content">
                            <div className="d-flex">
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                            </div>
                            <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel testimonial-carousel testimonial-carousel-2 wow bounceInUp" data-wow-delay="0.3s">
                    <div className="testimonial-item rounded  ">
                        <div className="d-flex mb-3">
                            <img src="img/testimonial-1.jpg" className="img-fluid rounded-circle flex-shrink-0" alt=""/>
                            <div className="position-absolute" style={{top: '15px', right: '20px'}}>
                                <i className="fa fa-quote-right fa-2x"></i>
                            </div>
                            <div className="ps-3 my-auto">
                                <h4 className="mb-0">Person Name</h4>
                                <p className="m-0">Profession</p>
                            </div>
                        </div>
                        <div className="testimonial-content">
                            <div className="d-flex">
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                            </div>
                            <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="testimonial-item rounded  ">
                        <div className="d-flex mb-3">
                            <img src="img/testimonial-2.jpg" className="img-fluid rounded-circle flex-shrink-0" alt=""/>
                            <div className="position-absolute" style={{top: '15px', right: '20px'}}>
                                <i className="fa fa-quote-right fa-2x"></i>
                            </div>
                            <div className="ps-3 my-auto">
                                <h4 className="mb-0">Person Name</h4>
                                <p className="m-0">Profession</p>
                            </div>
                        </div>
                        <div className="testimonial-content">
                            <div className="d-flex">
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                            </div>
                            <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="testimonial-item rounded  ">
                        <div className="d-flex mb-3">
                            <img src="img/testimonial-3.jpg" className="img-fluid rounded-circle flex-shrink-0" alt=""/>
                            <div className="position-absolute" style={{top: '15px', right: '20px'}}>
                                <i className="fa fa-quote-right fa-2x"></i>
                            </div>
                            <div className="ps-3 my-auto">
                                <h4 className="mb-0">Person Name</h4>
                                <p className="m-0">Profession</p>
                            </div>
                        </div>
                        <div className="testimonial-content">
                            <div className="d-flex">
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                            </div>
                            <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="testimonial-item rounded  ">
                        <div className="d-flex mb-3">
                            <img src="img/testimonial-4.jpg" className="img-fluid rounded-circle flex-shrink-0" alt=""/>
                            <div className="position-absolute" style={{top: '15px', right: '20px'}}>
                                <i className="fa fa-quote-right fa-2x"></i>
                            </div>
                            <div className="ps-3 my-auto">
                                <h4 className="mb-0">Person Name</h4>
                                <p className="m-0">Profession</p>
                            </div>
                        </div>
                        <div className="testimonial-content">
                            <div className="d-flex">
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                                <i className="fas fa-star text-primary_orange"></i>
                            </div>
                            <p className="fs-5 m-0 pt-3">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</>
        
    )
}