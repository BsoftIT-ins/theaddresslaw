import React from 'react'
import { Link } from 'react-router-dom'

const LegalTeam = () => {
  return (
    <>
    <section className='bg-dark' aria-label="section ">
    <div className="container ">
        <div className="row">
            <div className="col-md-12 text-center text-white ">
                <h2>Our Lawyer Team</h2>
                <div className="small-border"></div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 mb30 wow fadeInRight" data-wow-delay=".2s">
                <div className="f-profile text-center">
                    <div className="fp-wrap f-invert">
                        <div className="fpw-overlay">
                            <div className="fpwo-wrap">
                                <div className="fpwow-icons">
                                    <Link to="#"><i className="fa fa-facebook fa-lg"></i></Link>
                                    <Link to="#"><i className="fa fa-twitter fa-lg"></i></Link>
                                    <Link to="#"><i className="fa fa-linkedin fa-lg"></i></Link>
                                    <Link to="#"><i className="fa fa-pinterest fa-lg"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="fpw-overlay-btm"></div>
                        <img src="assets/images/team/1.jpg" className="fp-image img-fluid" alt="" />
                    </div>
                    <h4 className='text-white'>Advocate M.M. Jariat Hossain</h4>
                    <span className='text-white'>Supreme Court of Bangladesh</span>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 mb30 wow fadeInRight" data-wow-delay=".4s">
                <div className="f-profile text-center">
                    <div className="fp-wrap f-invert">
                        <div className="fpw-overlay">
                            <div className="fpwo-wrap">
                                <div className="fpwow-icons">
                                    <Link to="https://www.facebook.com"><i className="fa fa-facebook fa-lg"></i></Link>
                                    <Link to="https://twitter.com"><i className="fa fa-twitter fa-lg"></i></Link>
                                    <Link to="https://linkedin.com"><i className="fa fa-linkedin fa-lg"></i></Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="fpw-overlay-btm"></div>
                        <img src="assets/images/team/2.jpg" className="fp-image img-fluid" alt="" />
                    </div>
                    <h4 className='text-white'>Advocate Md. Azizul Islam</h4>
                    <span className='text-white'>Supreme Court of Bangladesh</span>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 mb30 wow fadeInRight" data-wow-delay=".6s">
                <div className="f-profile text-center">
                    <div className="fp-wrap f-invert">
                        <div className="fpw-overlay">
                            <div className="fpwo-wrap">
                                <div className="fpwow-icons">
                                    <Link to="https://www.facebook.com"><i className="fa fa-facebook fa-lg"></i></Link>
                                    <Link to="https://www.twitter.com/"><i className="fa fa-twitter fa-lg"></i></Link>
                                    <Link to="https://www.linkedin.com/feed/"><i className="fa fa-linkedin fa-lg"></i></Link>
                                    <Link to="#"><i className="fa fa-pinterest fa-lg"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="fpw-overlay-btm"></div>
                        <img src="assets/images/team/3.jpg" className="fp-image img-fluid" alt="" />
                    </div>
                    <h4 className='text-white'>Md. Amzad Hossain</h4>
                    <span className='text-white'>ITP Lawyer <br/> Enlisted by National Board of Revenue (NBR)</span>
                </div>
            </div>
        </div>
    </div>
</section>
    
    </>
  )
}

export default LegalTeam