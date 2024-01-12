import React from 'react'


const Testimonial = () => {
    
  return (
    <>
      {/* You should include the Owl Carousel dependencies (scripts and styles) here */}
      <section aria-label="section" className="jarallax text-light">
        <img src="assets/images/background/3.jpg" className="jarallax-img" alt="" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center text-light">
                <h2>Testimonials</h2>
                <div className="small-border"></div>
              </div>
              <div className="owl-carousel owl-theme" id="testimonial-carousel">
                <div className="item">
                  <div className="de_testi opt-2 review">
                    <blockquote>
                      <i className="fa fa-quote-left id-color"></i>
                      <h3>Trustworthy lawyer</h3>
                      <p>Where integrity, dedication, and justice meet, ensuring your legal needs are in safe hands.</p>
                      <div className="de_testi_by"><span>Engr Faisal Islam</span></div>
                    </blockquote>
                  </div>
                </div>
                {/* Repeat similar blocks for other testimonials */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
