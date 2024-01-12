import React from 'react'
import { Link } from 'react-router-dom'

const BlogContent = () => {
  return (
    <>
    <section aria-label="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <h2>Latest News</h2>
                                <div className="small-border"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb30">
                            <div className="bloglist item">
                                <div className="post-content">
                                    <div className="date-box">
                                        <div className="m">10</div>
                                        <div className="d">JULY</div>
                                    </div>
                                    <div className="post-image">
                                        <img alt="" src="assets/images/news/1.jpg" />
                                    </div>
                                    <div className="post-text">
                                        <span className="p-tagline">The Addres Law</span>
                                        <h4><Link to="news-single.html">Process of protecting immovable land property and proof ownership<span></span></Link></h4>
                                        <p>
                                        Ownership means you have absolute right over the property that can be exercised at whatever means you like and no one can restrain you in such activities except in accordance with the order of the Court or respective authorities. An ownership may be conditional as well such as lease. An owner means a person who is entitled to use, transfer or confine the ‘subject’ of ownership as per his whims and wishes</p>
                                        <span className="p-author">Advocate Shoaibur Rahman Shoaib:</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb30">
                            <div className="bloglist item">
                                <div className="post-content">
                                    <div className="date-box">
                                        <div className="m">15</div>
                                        <div className="d">NOV</div>
                                    </div>
                                    <div className="post-image">
                                        <img alt="" src="assets/images/news/2.jpg" />
                                    </div>
                                    <div className="post-text">
                                        <span className="p-tagline">The Address Law</span>
                                        <h4><Link to="news-single.html">Rights Groups Challenge Colonial and Discriminatory Character Evidence Rules<span></span></Link></h4>
                                        <p>The High Court Division of the Supreme Court of Bangladesh today, adjourned the hearing of a challenging Section 155 (4) and Section 146 (3) of the Evidence Act, 1872 which enable defence lawyers to question women and girls who are complainants in cases of rape about their character and prior sexual history with the accused (without prior permission of the court) and with persons other than the accused.</p>
                                        <span className="p-author">High Court Division, SCB</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb30">
                            <div className="bloglist item">
                                <div className="post-content">
                                    <div className="date-box">
                                        <div className="m">23</div>
                                        <div className="d">OCT</div>
                                    </div>
                                    <div className="post-image">
                                        <img alt="" src="assets/images/news/3.jpg"/>
                                    </div>
                                    <div className="post-text">
                                        <span className="p-tagline">The Address Law</span>
                                        <h4><Link to="news-single.html">ILO sued by a former employee for non-payment of wages and end-service benefits<span></span></Link></h4>
                                        <p>A retired employee of the International Labour Organization (ILO) in Bangladesh has filed a case against the organization in the First Labour Court in Dhaka on Sunday (23 October 2022).

                                        The employee named Md. Alam Miah alias Md. Ismail has joined the ILO Country Office in Dhaka on 07 April 1982 in the post of a Messenger/Chowkidar; and, later on he continued in the service without any interruption as a Messenger/Cleaner and was sent to retirement on 31 December 2020. Thus, he has served for about 39 years with satisfaction of ILO.</p>
                                        <span className="p-author">News Room</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    </>
  )
}

export default BlogContent