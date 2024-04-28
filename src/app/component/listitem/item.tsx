import './style.css'
export default function Item() {
    return(
        <div className="container-fluid event py-6">
            <div   className="container">
                <div   className="text-center wow bounceInUp" data-wow-delay="0.1s">
                    <small   className="d-inline-block fw-bold text-dark text-uppercase bg-light_peach border border-primary_orange  rounded-pill px-4 py-1 mb-3">Latest Items</small>
                    <h1   className="display-5 mb-5">List of Items</h1>
                </div>
                <div   className="tab-class text-center">
                    <ul   className="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp" data-wow-delay="0.1s">
                        <li   className="nav-item p-2">
                            <a   className="d-flex mx-2 py-2 border border-primary_orange  bg-light_peach rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                                <span   className="text-dark" style={{width: '150px'}}>All Items</span>
                            </a>
                        </li>
                        <li   className="nav-item p-2">
                            <a   className="d-flex py-2 mx-2 border border-primary_orange  bg-light_peach rounded-pill" data-bs-toggle="pill" href="#tab-2">
                                <span   className="text-dark" style={{width: '150px'}}>Juice</span>
                            </a>
                        </li>
                        <li   className="nav-item p-2">
                            <a   className="d-flex mx-2 py-2 border border-primary_orange  bg-light_peach rounded-pill" data-bs-toggle="pill" href="#tab-3">
                                <span   className="text-dark" style={{width: '150px'}}>Water</span>
                            </a>
                        </li>
                       
                    </ul>
                    {/* <!-- changing required --> */}
                    <div   className="tab-content">
                        <div id="tab-1"   className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s">
                                            <div className="event-img position-relative">
                                                <img   className="img-fluid rounded w-100" src="image/fresh-juice.jpg" />
                                                <div   className="event-overlay d-flex flex-column p-4">
                                                    <h4   className="me-auto">juice</h4>
                                                    <a href="image/fresh-juice.jpg" data-lightbox="event-1"   className="my-auto"><i   className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div   className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.3s">
                                            <div   className="event-img position-relative">
                                                <img   className="img-fluid rounded w-100" src="image/IMG-20240402-WA0030.jpg" />
                                                <div   className="event-overlay d-flex flex-column p-4">
                                                    <h4   className="me-auto">juice</h4>
                                                    <a href="image/IMG-20240402-WA0030.jpg" data-lightbox="event-2"   className="my-auto"><i   className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div   className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.5s">
                                            <div   className="event-img position-relative">
                                                <img   className="img-fluid rounded w-100" src="image/IMG-20240402-WA0002.jpg" />
                                                <div   className="event-overlay d-flex flex-column p-4">
                                                    <h4   className="me-auto">Juice</h4>
                                                    <a href="image/IMG-20240402-WA0002.jpg" data-lightbox="event-3"   className="my-auto"><i   className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div   className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.7s">
                                            <div   className="event-img position-relative">
                                                <img   className="img-fluid rounded w-100" src="image/IMG-20240402-WA0008.jpg" />
                                                <div   className="event-overlay d-flex flex-column p-4">
                                                    <h4   className="me-auto">Juice</h4>
                                                    <a href="image/IMG-20240402-WA0008.jpg" data-lightbox="event-4"   className="my-auto"><i   className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div   className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s">
                                            <div   className="event-img position-relative">
                                                <img   className="img-fluid rounded w-100" src="image/IMG-20240402-WA0010.jpg" />
                                                <div   className="event-overlay d-flex flex-column p-4">
                                                    <h4   className="me-auto">Juice</h4>
                                                    <a href="image/IMG-20240402-WA0010.jpg" data-lightbox="event-5"   className="my-auto"><i   className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div   className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.3s">
                                            <div   className="event-img position-relative">
                                                <img   className="img-fluid rounded w-100" src="image/IMG-20240402-WA0011.jpg" />
                                                <div   className="event-overlay d-flex flex-column p-4">
                                                    <h4   className="me-auto">Juice</h4>
                                                    <a href="image/IMG-20240402-WA0011.jpg" data-lightbox="event-6"   className="my-auto"><i   className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div   className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.5s">
                                            <div   className="event-img position-relative">
                                                <img   className="img-fluid rounded w-100" src="image/IMG-20240402-WA0019.jpg" />
                                                <div   className="event-overlay d-flex flex-column p-4">
                                                    <h4   className="me-auto">Juice</h4>
                                                    <a href="image/IMG-20240402-WA0019.jpg" data-lightbox="event-7"   className="my-auto"><i   className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div   className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.7s">
                                            <div   className="event-img position-relative">
                                                <img   className="img-fluid rounded w-100" src="image/IMG-20240402-WA0017.jpg" />
                                                <div   className="event-overlay d-flex flex-column p-4">
                                                    <h4   className="me-auto">Juice</h4>
                                                    <a href="image/IMG-20240402-WA0017.jpg" data-lightbox="event-17"   className="my-auto"><i   className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div   className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.7s">
                                            <div   className="event-img position-relative">
                                                <img   className="img-fluid rounded w-100" src="image/water.jpg" />
                                                <div   className="event-overlay d-flex flex-column p-4">
                                                    <h4   className="me-auto">Water</h4>
                                                    <a href="image/water.jpg" data-lightbox="event-17"   className="my-auto"><i   className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div   className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.7s">
                                            <div   className="event-img position-relative">
                                                <img   className="img-fluid rounded w-100" src="image/water1.jpg" />
                                                <div   className="event-overlay d-flex flex-column p-4">
                                                    <h4   className="me-auto">Water</h4>
                                                    <a href="image/water1.jpg" data-lightbox="event-17"   className="my-auto"><i   className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-2"   className="tab-pane fade show p-0">
                            <div   className="row g-4">
                                <div   className="col-lg-12">
                                    <div   className="row g-4">
                                        <div   className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s">
                                            <div   className="event-img position-relative">
                                                <img   className="img-fluid rounded w-100" src="image/fresh-juice.jpg" />
                                                <div   className="event-overlay d-flex flex-column p-4">
                                                    <h4   className="me-auto">juice</h4>
                                                    <a href="image/fresh-juice.jpg" data-lightbox="event-1"   className="my-auto"><i   className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div   className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.3s">
                                            <div   className="event-img position-relative">
                                                <img   className="img-fluid rounded w-100" src="image/IMG-20240402-WA0030.jpg" />
                                                <div   className="event-overlay d-flex flex-column p-4">
                                                    <h4   className="me-auto">juice</h4>
                                                    <a href="image/IMG-20240402-WA0030.jpg" data-lightbox="event-2"   className="my-auto"><i   className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div   className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.5s">
                                            <div   className="event-img position-relative">
                                                <img   className="img-fluid rounded w-100" src="image/IMG-20240402-WA0002.jpg" />
                                                <div   className="event-overlay d-flex flex-column p-4">
                                                    <h4   className="me-auto">Juice</h4>
                                                    <a href="image/IMG-20240402-WA0002.jpg" data-lightbox="event-3"   className="my-auto"><i   className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div   className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.7s">
                                            <div   className="event-img position-relative">
                                                <img   className="img-fluid rounded w-100" src="image/IMG-20240402-WA0008.jpg" />
                                                <div   className="event-overlay d-flex flex-column p-4">
                                                    <h4   className="me-auto">Juice</h4>
                                                    <a href="image/IMG-20240402-WA0008.jpg" data-lightbox="event-4"   className="my-auto"><i   className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div   className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.1s">
                                            <div   className="event-img position-relative">
                                                <img   className="img-fluid rounded w-100" src="image/IMG-20240402-WA0010.jpg" />
                                                <div   className="event-overlay d-flex flex-column p-4">
                                                    <h4   className="me-auto">Juice</h4>
                                                    <a href="image/IMG-20240402-WA0010.jpg" data-lightbox="event-5"   className="my-auto"><i   className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div   className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.3s">
                                            <div   className="event-img position-relative">
                                                <img   className="img-fluid rounded w-100" src="image/IMG-20240402-WA0011.jpg" />
                                                <div   className="event-overlay d-flex flex-column p-4">
                                                    <h4   className="me-auto">Juice</h4>
                                                    <a href="image/IMG-20240402-WA0011.jpg" data-lightbox="event-6"   className="my-auto"><i   className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div   className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.5s">
                                            <div   className="event-img position-relative">
                                                <img   className="img-fluid rounded w-100" src="image/IMG-20240402-WA0019.jpg" />
                                                <div   className="event-overlay d-flex flex-column p-4">
                                                    <h4   className="me-auto">Juice</h4>
                                                    <a href="image/IMG-20240402-WA0019.jpg" data-lightbox="event-7"   className="my-auto"><i   className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div   className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.7s">
                                            <div   className="event-img position-relative">
                                                <img   className="img-fluid rounded w-100" src="image/IMG-20240402-WA0017.jpg" />
                                                <div   className="event-overlay d-flex flex-column p-4">
                                                    <h4   className="me-auto">Juice</h4>
                                                    <a href="image/IMG-20240402-WA0017.jpg" data-lightbox="event-17"   className="my-auto"><i   className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         {/* <!-- W A T E R --> */}
                        <div id="tab-3"   className="tab-pane fade show p-0">
                            <div   className="row g-4">
                                <div   className="col-lg-12">
                                    <div   className="row g-4">
                                        <div   className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.7s">
                                            <div   className="event-img position-relative">
                                                <img   className="img-fluid rounded w-100" src="image/water.jpg" />
                                                <div   className="event-overlay d-flex flex-column p-4">
                                                    <h4   className="me-auto">Water</h4>
                                                    <a href="image/water.jpg" data-lightbox="event-17"   className="my-auto"><i   className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div   className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.7s">
                                            <div   className="event-img position-relative">
                                                <img   className="img-fluid rounded w-100" src="image/water1.jpg" />
                                                <div   className="event-overlay d-flex flex-column p-4">
                                                    <h4   className="me-auto">Water</h4>
                                                    <a href="image/water1.jpg" data-lightbox="event-17"   className="my-auto"><i   className="fas fa-search-plus text-dark fa-2x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>


        
    )
}