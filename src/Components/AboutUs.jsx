import React from 'react'
import { Link } from 'react-router-dom';


const AboutUs = () => {
  return (
    <>
      <section id="section-highlight" className=" mt-lg-auto relative text-light bg-dark" data-bgcolor="#111111">
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-md-4">
              <span className="p-title mt-auto"><br/>Welcome</span><br />
              <h2>
              Integrity <br />Honor. Outcome.
              </h2>
              <div className="small-border sm-center"></div>
            </div>
            <div className="col-md-8 justify-content-around">
              <p><br /> <br />Welcome to The Address Law, your trusted destination for legal excellence. We specialize in a wide array of legal domains, including Civil & Criminal Law, Real Estate Law, Company Tax and VAT Law, Corporate Law, and Banking Law. Our dedicated team of legal experts is committed to delivering comprehensive solutions tailored to your specific needs. Whether you're seeking justice, navigating property matters, managing taxation, or addressing corporate concerns, we're here to provide you with reliable legal guidance and expertise. Choose The Address Law for a seamless journey through the complexities of the legal world.</p>
            </div>
          </div>
          <div className="spacer-double"></div>
        </div>
      </section>
      <section className="no-top relative z1000">
        <div className="container">
          <div className="row mt-100">
            <div className="col-md-4 mb-sm-30 wow fadeInRight" data-wow-delay=".2s">
              <div className="mask">
                <div className="cover">
                  <div className="c-inner">
                    <h3><i className="icofont-people"></i><span>Real Estate Law</span></h3>
                    <p>We have vast experience in Real Estate law practices. </p>
                    <div className="spacer20"></div>
                    <Link to="#" className="btn-custom capsule">Read more</Link>
                  </div>
                </div>
                <img src="assets/images/services/1.jpg" alt="" className="img-responsive" />
              </div>
            </div>
            <div className="col-md-4 mb-sm-30 wow fadeInRight" data-wow-delay=".4s">
              <div className="mask">
                <div className="cover">
                  <div className="c-inner">
                    <h3><i className="icofont-home"></i><span>Income Tax & VAT Law</span></h3>
                    <p>We have successfully deals Taxt and VAT matters. </p>
                    <div className="spacer20"></div>
                    <Link to="#" className="btn-custom capsule">Read more</Link>
                  </div>
                </div>
                <img src="assets/images/services/2.jpg" alt="" className="img-responsive" />
              </div>
            </div>
            <div className="col-md-4 mb-sm-30 wow fadeInRight" data-wow-delay=".6s">
              <div className="mask">
                <div className="cover">
                  <div className="c-inner">
                    <h3><i className="icofont-law-order"></i><span>Criminal Law</span></h3>
                    <p>We have faced many more criminal cases and achieved justice in favor of our clients in various aspects, both in Judges' court and the Supreme Court of Bangladesh.</p>
                    <div className="spacer20"></div>
                    <Link to="#" className="btn-custom capsule">Read more</Link>
                  </div>
                </div>
                <img src="assets/images/services/3.jpg" alt="" className="img-responsive" />
              </div>
            </div>
          </div>
        </div>
      </section>
   
    </>
  )
}

export default AboutUs;


