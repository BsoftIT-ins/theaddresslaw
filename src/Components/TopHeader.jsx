import React from 'react'
import { Link } from 'react-router-dom/dist'
const TopHeader = () => {
  return (
    <div id="topbar" className="topbar-noborder">
            <div className="container">
                <div className="topbar-left sm-hide">
                    <span className="topbar-widget tb-social">
                        <Link to="http://www.facebook.com"><i className="fa fa-facebook"></i></Link>
                        <Link to="http://www.twitter.com"><i className="fa fa-twitter"></i></Link>
                        <Link to="http://www.instagram.com"><i className="fa fa-instagram"></i></Link>
                    </span>
                </div>
                <div className="topbar-right">
                    <div className="topbar-right">
                        <span className="topbar-widget"><Link to="#">Privacy policy</Link></span>
                        <span className="topbar-widget"><Link to="#">Request Quote</Link></span>
                        <span className="topbar-widget"><Link to="#">FAQ</Link></span>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
  )
}

export default TopHeader