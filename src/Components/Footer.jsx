import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
    <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <div className="widget text-lg-start">
                    <Link to="/index"><img alt="" className="img-fluid mb20" src="assets/images/logo-light.png" /></Link>
                    <address className="s1">
                        <span><i className="id-color fa fa-map-marker fa-lg"></i>Manama Urban Forest, House-108, Road-12, Block-E, Banani, Dhaka</span>
                        <span><i className="id-color fa fa-phone fa-lg"></i>01631-51 22 15</span>
                        <span><i className="id-color fa fa-envelope-o fa-lg"></i><Link to="advazizul1377@gmail.com">advazizul1377@gmail.com</Link></span>
                        <span><i className="id-color fa fa-file-pdf-o fa-lg"></i><Link to="#">Download Brochure</Link></span>
                    </address>
                </div>
            </div>
            <div className="col-md-4">
                <h4 className="id-color mb20">Practice Areas</h4>
                <ul className="ul-style-2 text-lg-start">
                    <li>Civil and Criminal Law</li>
                    <li>Real Estate Law</li>
                    <li>Corporate Law</li>
                    <li>Company income Tax & VAT </li>
                    <li>Banking and Finance</li>
                </ul>
            </div>
            <div className="col-lg-4">
                <h4 className="id-color">Newsletter</h4>
                <p>Signup for our newsletter to get the latest news, updates and special offers in your inbox.</p>
                <form action="https://www.theaddresspms.com" className="row" id="form_subscribe" method="post" name="form_subscribe">
                    <div className="col text-center">
                        <input className="form-control" id="name_1" name="name_1" placeholder="enter your email" type="text" /> <Link to="#" id="btn-submit"><i className="fa fa-long-arrow-right"></i></Link>
                        <div className="clearfix"></div>
                    </div>
                </form>
                <div className="spacer-10"></div>
                <small>Your email is safe with us. We don't spam.</small>
            </div>
        </div>
    </div>
    <div className="subfooter">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="de-flex">
                        <div className="de-flex-col">
                            &copy; Copyright 2023 - The Address Law by BSOFTIT
                        </div>
                        <div className="de-flex-col">
                            <div className="social-icons">
                                <Link to="http://www.facebook.com"><i className="fa fa-facebook fa-lg"></i></Link>
                                <Link to="http://www.twitter.com"><i className="fa fa-twitter fa-lg"></i></Link>
                                <Link to="http://www.linkedin.com#"><i className="fa fa-linkedin fa-lg"></i></Link>
                                <Link to="http://www.pinterest.com"><i className="fa fa-pinterest fa-lg"></i></Link>
                                <Link to="http://www.rss.com"><i className="fa fa-rss fa-lg"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer