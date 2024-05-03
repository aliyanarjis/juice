export default function Hero() {
    return(
        <div className="container-fluid   py-6 my-6 mt-0">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-7 col-md-12">
                    <small className="d-inline-block fw-bold text-dark text-uppercase   border border-primary_orange  rounded-pill px-4 py-1 mb-4 animated bounceInDown">Welcome to CaterServ</small>
                    <h1 className="display-1 mb-4 animated bounceInDown">Revitalize with <span className="text-primary_orange"> FreshWave's</span> natural refreshment</h1>
                    <a href="" className=" top-primary_orange btn border-0 rounded-pill py-3 px-4 px-md-5 me-4 animated bounceInLeft">Book Now</a>
                    <a href="" className=" top-primary_orange btn border-0 rounded-pill py-3 px-4 px-md-5 animated bounceInLeft">Know More</a>
                </div>
                <div className="col-lg-5 col-md-12">
                    <img src="image/BeFunky-collage (1).jpg" className="img-fluid rounded animated zoomIn" />
                </div>
            </div>
        </div>
    </div>
    )
}