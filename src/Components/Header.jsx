import React from 'react'
import { Link } from 'react-router-dom/dist'

const Header = () => {
  return (
    <header>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="de-flex sm-pt10">
                    <div className="de-flex-col">
                        {/* <!-- logo begin --> */}
                        <div id="logo">
                            <Link to="/">
                                <img alt="" className="logo" src="assets/images/logo-light.png" />
                                <img alt="" className="logo-2" src="assets/images/logo.png" />
                            </Link>
                        </div>
                        {/* <!-- logo close --> */}
                    </div>
                    <div className="de-flex-col header-col-mid">
                        {/* <!-- mainmenu begin --> */}
                      <ul id="mainmenu">
                    <li>
                        <Link to="/">Home</Link>
                        
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                        
                    </li>
                    <li>
                        <Link to="/practice-areas">Practice Areas</Link>
                      
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                     
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                   
                    </ul>
                        {/* <!-- mainmenu close --> */}
                    </div>
                    <div className="de-flex-col">
                        <div className="h-phone md-hide"><span>Need&nbsp;Help?</span><i className="fa fa-phone"></i> 01631 51 22 15</div>
                        <span id="menu-btn"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
  )
}

export default Header