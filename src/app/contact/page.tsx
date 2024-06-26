import './style.css'
export default function Contact() {
    return(
        <div className="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="p-5 bg-light_peach rounded contact-form">
                <div className="row g-4">
                    <div className="col-12">
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light_peach border border-primary_orange rounded-pill px-4 py-1 mb-3">Get in touch</small>
                        <h1 className="display-5 mb-0">Contact Us For Any Queries!</h1>
                    </div>
                    <div className="col-md-6 col-lg-7">
                        <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                        <form>
                            <input type="text" className="w-100 form-control p-3 mb-4 border-primary_orange bg-light_peach" placeholder="Your Name"/>
                            <input type="email" className="w-100 form-control p-3 mb-4 border-primary_orange bg-light_peach" placeholder="Enter Your Email"/>
                            <textarea className="w-100 form-control mb-4 p-3 border-primary_orange bg-light_peach" rows={4} cols={10} placeholder="Your Message"></textarea>
                            <button className="w-100 btn btn-primary_orange form-control p-3 border-primary_orange bg-primary_orange rounded-pill" type="submit">Submit Now</button>
                        </form>
                    </div>
                    <div className="col-md-6 col-lg-5">
                        <div>
                            <div className="d-inline-flex w-100 border border-primary_orange p-4 rounded mb-4">
                                <i className="fas fa-map-marker-alt fa-2x text-primary_orange me-4"></i>
                                <div className="">
                                    <h4>Address</h4>
                                    <p>123 Street, New York, USA</p>
                                </div>
                            </div>
                            <div className="d-inline-flex w-100 border border-primary_orange p-4 rounded mb-4">
                                <i className="fas fa-envelope fa-2x text-primary_orange me-4"></i>
                                <div className="">
                                    <h4>Mail Us</h4>
                                    <p className="mb-2">info@example.com</p>
                                    <p className="mb-0">support@example.com</p>
                                </div>
                            </div>
                            <div className="d-inline-flex w-100 border border-primary_orange p-4 rounded">
                                <i className="fa fa-phone-alt fa-2x text-primary_orange me-4"></i>
                                <div className="">
                                    <h4>Telephone</h4>
                                    <p className="mb-2">(+012) 3456 7890 123</p>
                                    <p className="mb-0">(+704) 5555 0127 296</p>
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