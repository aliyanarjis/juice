import './style.css'

export default function Blog() {

    
  
    return(
        <>
        <div className="container-fluid blog py-6">
            <div  className="container">
                <div  className="text-center wow bounceInUp" data-wow-delay="0.1s">
                    <small  className="d-inline-block fw-bold text-dark text-uppercase    border border-primary_orange  rounded-pill px-4 py-1 mb-3">Our Blog</small>
                    <h1  className="display-5 mb-5">Be First Who Read News</h1>
                </div>
                <div  className="row gx-4 justify-content-center">
                    <div  className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s">
                        <div  className="blog-item">
                            <div  className="overflow-hidden rounded">
                                <img src="image/IMG-20240402-WA0061.jpg"  className="img-fluid w-100" alt=""/>
                            </div>
                            <div  className="blog-content mx-4 d-flex rounded   ">
                                <div  className="text-dark bg-primary_orange rounded-start">
                                    <div  className="h-100 p-3 d-flex flex-column justify-content-center text-center">
                                        <p  className="fw-bold mb-0">16</p>
                                        <p  className="fw-bold mb-0">Sep</p>
                                    </div>
                                </div>
                                <a href="#"  className="h5 lh-base my-auto h-100 p-3">How to get more test in your food from</a>
                            </div>
                        </div>
                    </div>
                    <div  className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.3s">
                        <div  className="blog-item">
                            <div  className="overflow-hidden rounded">
                                <img src="image/IMG-20240402-WA0062.jpg"  className="img-fluid w-100" alt=""/>
                            </div>
                            <div  className="blog-content mx-4 d-flex rounded   ">
                                <div  className="text-dark bg-primary_orange rounded-start">
                                    <div  className="h-100 p-3 d-flex flex-column justify-content-center text-center">
                                        <p  className="fw-bold mb-0">16</p>
                                        <p  className="fw-bold mb-0">Sep</p>
                                    </div>
                                </div>
                                <a href="#"  className="h5 lh-base my-auto h-100 p-3">How to get more test in your food from</a>
                            </div>
                        </div>
                    </div>
                    <div  className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.5s">
                        <div  className="blog-item">
                            <div  className="overflow-hidden rounded">
                                <img src="image/IMG-20240402-WA0063.jpg"  className="img-fluid w-100" alt=""/>
                            </div>
                            <div  className="blog-content mx-4 d-flex rounded   ">
                                <div  className="text-dark bg-primary_orange rounded-start">
                                    <div  className="h-100 p-3 d-flex flex-column justify-content-center text-center">
                                        <p  className="fw-bold mb-0">16</p>
                                        <p  className="fw-bold mb-0">Sep</p>
                                    </div>
                                </div>
                                <a href="#"  className="h5 lh-base my-auto h-100 p-3">How to get more test in your food from</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}