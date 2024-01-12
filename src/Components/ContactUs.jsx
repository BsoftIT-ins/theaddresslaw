import React from 'react'

const ContactUs = () => {
  return (
    <>
    <div>
    <section id="subheader" class="jarallax text-white position-relative">
    <img src="assets/images/background/subheader2.jpg" class="img-fluid" alt="" />
    <div class="position-absolute top-50 start-50 translate-middle text-center">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Contact Us</h1>
                    <p>Reputation. Respect. Result.</p>
                </div>
            </div>
        </div>
    </div>
</section>


<section className='align-content-center' aria-label="section">
<div className="container d-flex justify-content-center">
    <div className="row">
        <div className="col-lg-12">
            <img src="assets/images/misc/p1.jpg" alt="" className="img-fluid mb30" />
            <h3>Our Office</h3>
            <address className="s1 text-start">
                <span className=''><i className="id-color fa fa-map-marker fa-lg "></i>Manama Urban Forest, Level-3, House-108, Road-12, Block-E, Banani, Dhaka </span>
                <span className=''><i className="id-color fa fa-phone fa-lg "></i>8801631 512 215 </span>
                <span className=''><i className="id-color fa fa-envelope-o fa-lg "></i><a href="mailto:advazizul1377@gmail.com">advazizul1377@gmail.com</a></span>
            </address>
        </div>
    </div>
</div>
</section>

            <section aria-label="section" className="text-light bg-dark" data-bgcolor="#111111">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 mb-sm-30 text-center">
                        <h3>Do you have any question?</h3>
                        <form name="contactForm" id="contact_form" className="form-border" method="post" action="https://www.madebydesignesia.com/themes/justica/email.php">
                            <div className="field-set">
                                <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" />
                            </div>
                            <div className="field-set">
                                <input type="text" name="email" id="email" className="form-control" placeholder="Your Email" />
                            </div>
                            <div className="field-set">
                                <input type="text" name="phone" id="phone" className="form-control" placeholder="Your Phone" />
                            </div>
                            <div className="field-set">
                                <textarea name="message" id="message" className="form-control" placeholder="Your Message"></textarea>
                            </div>
                            <div className="spacer-half"></div>
                            <div id="submit">
                                <input type="submit" id="send_message" value="Submit Form" className="btn btn-custom" />
                            </div>
                            <div id="mail_success" className="success">Your message has been sent successfully.</div>
                            <div id="mail_fail" className="error">Sorry, error occured this time sending your message.</div>
                        </form>
                    </div>
                    <div className="col-lg-4">
                    </div>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default ContactUs