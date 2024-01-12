import React from 'react'
import { Link } from 'react-router-dom'


const SliderArea = () => {
  return (
    <div className="no-bottom no-top" id="content">
            <div id="top"></div>
            {/* <!-- revolution slider begin --> */}
            <section
            id="de-carousel"
            className="no-top no-bottom carousel slide carousel-fade shadow-2-strong"
            data-mdb-ride="carousel"
          >
            {/* Indicators */}
            <ol className="carousel-indicators">
              <li data-mdb-target="#de-carousel" data-mdb-slide-to={0} className="active"></li>
              <li data-mdb-target="#de-carousel" data-mdb-slide-to={1}></li>
              <li data-mdb-target="#de-carousel" data-mdb-slide-to={2}></li>
            </ol>
      
            {/* Inner */}
            <div className="carousel-inner">
              {/* Single item 1 */}
              <div
                className="carousel-item active"
                style={{ backgroundImage: 'url(assets/images/slider/1.jpg)' }}
              >
                <div className="mask">
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="container text-white">
                      <div className="row">
                        <div className="col-lg-5">
                          <h4 className="id-color wow fadeInUp">Need Any Help?</h4>
                          <h1 className="mb-3 wow fadeInUp">We Stand for Right</h1>
                          <p className="lead wow fadeInUp" data-wow-delay=".3s">
                            Providing legal representation and counsel to safeguard your rights. Navigate
                            complex legal challenges, and pursue justice with unwavering dedication.
                          </p>
                          <div className="spacer-10"></div>
                          <Link to="/practice-areas" className="btn-custom wow fadeInUp" data-wow-delay=".6s">
                            Explore
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      
              {/* Single item 2 */}
              <div
                className="carousel-item"
                style={{ backgroundImage: 'url(assets/images/slider/2.jpg)' }}
              >
                <div className="mask">
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="container text-white">
                      <div className="row">
                        <div className="col-lg-5">
                          <h4 className="id-color wow fadeInUp">Real Estate Law & Tax & VAT Specialist</h4>
                          <h1 className="mb-3 wow fadeInUp">Because We Care</h1>
                          <p className="lead wow fadeInUp" data-wow-delay=".3s">
                            Providing legal representation and counsel to safeguard your rights. Navigate
                            complex legal challenges, and pursue justice with unwavering dedication.
                          </p>
                          <div className="spacer-10"></div>
                          <Link to="/practice-areas" className="btn-custom wow fadeInUp" data-wow-delay=".6s">
                            Explore
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            <a className="carousel-control-prev" href="#de-carousel" role="button" data-mdb-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#de-carousel" role="button" data-mdb-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </section>
           
        </div>
  )
}

export default SliderArea