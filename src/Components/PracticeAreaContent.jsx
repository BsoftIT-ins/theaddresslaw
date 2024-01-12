import React from 'react'
import { Link } from "react-router-dom"

const PracticeAreaContent = () => {
  return (
    <>
    <div className="no-bottom no-top" id="content">
    <div id="top"></div>

    <section id="subheader" className="jarallax text-white position-relative">
      <img src="assets/images/background/subheader1.jpg" className="jarallax-img" alt="" />
      <div className="position-absolute top-50 start-50 translate-middle text-center">
        <div className="container">
          <div className="row">
            <div className="col text-center ">
              <h1 className="display-4">Practice Areas</h1>
              <p className="lead">Reputation. Respect. Result.</p>
              <br />
              <p className="text-center" style={{ maxWidth: '500px', margin: '0 auto'}}>
        Our practice areas encompass a wide spectrum of legal expertise, including Civil & Criminal Law, Real Estate Law, Tax & Corporate Law, and Banking Law. With a seasoned team of lawyers, we provide comprehensive solutions tailored to your specific needs, ensuring your rights and interests are protected.
      </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
    <div className="container">
        <div className="row">

        <div className="col-lg-4 col-md-6 col-12 mb-3">
        <div className="dcg-four dcg-item">
          <Link className="dcg-url" to="#"></Link>
          <img className="dcg-image" src="assets/images/practice-areas/1.jpg" alt="" />
          <div className="dcg-title"><i className="dcg-icon id-color icofont-law-order"></i>Civil Law</div>
          <div className="dcg-content">
          As an advocate working with lower court and Supreme Court of Bangladesh, our expertise lies in civil law. We handle a range of cases, including all civil matters with a deep understanding of the Bangladesh legal system, we strive to provide effective representation and solutions for our clients in civil litigation. Our commitment is to uphold justice and advocate for the best interests of those we represent before the courts.
          </div>
          <Link to="#" className="dcg-text btn btn-primary">Read More</Link>
          <div className="dcg-overlay"></div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-xs-12 mb30">
      <div className="dcg-four dcg-item">
      <Link className="dcg-url" to="#"></Link>
          <img className="dcg-image" src="assets/images/practice-areas/7.jpg" alt="" />                                
          <div className="dcg-title"><i className="dcg-icon id-color icofont-law-order"></i>Criminal Law</div>
          <div className="dcg-content">As experts in Criminal Law in Bangladesh, we possess a profound understanding of the legal intricacies surrounding criminal offenses. Our commitment involves diligent defense strategies, ensuring the protection of our clients' rights in all stages of criminal proceedings. With a track record of successful representation, we strive for justice within the boundaries of the Bangladesh legal system.</div>
          <div className="dcg-text">Read More</div>
          <div className="dcg-overlay"></div>
      </div>
  </div>

            <div className="col-lg-4 col-md-6 col-xs-12 mb30">
                <div className="dcg-four dcg-item">
                    <Link className="dcg-url" to="#"></Link>
                    <img className="dcg-image" src="assets/images/practice-areas/2.jpg" alt="" />                                
                    <div className="dcg-title"><i className="dcg-icon id-color icofont-law-order"></i>Income Tax &amp; VAT Law</div>
                    <div className="dcg-content">Specializing in Tax and VAT law in Bangladesh, our expertise ensures comprehensive understanding and effective navigation of the complex taxation landscape. With a focus on compliance and strategic planning, we provide tailored solutions to meet the specific needs of our clients, optimizing their financial positions within the legal framework.</div>
                    <div className="dcg-text">Read More</div>
                    <div className="dcg-overlay"></div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-xs-12 mb30">
                <div className="dcg-four dcg-item">
                    <Link className="dcg-url" to="#"></Link>
                    <img className="dcg-image" src="assets/images/practice-areas/3.jpg" alt="" />                                
                    <div className="dcg-title"><i className="dcg-icon id-color icofont-building"></i>Realestate Law</div>
                    <div className="dcg-content">Specializing in Real Estate Law in Bangladesh, we offer comprehensive expertise in property transactions, legal vetting process, chronological chain of title searches, and lease agreements. We focus on due diligence and safeguard our clients' interests in all aspects of real estate law.</div>
                    <div className="dcg-text">Read More</div>
                    <div className="dcg-overlay"></div>
                </div>
            </div>
            
            <div className="col-lg-4 col-md-6 col-xs-12 mb30">
                <div className="dcg-four dcg-item">
                    <Link className="dcg-url" to="#"></Link>
                    <img className="dcg-image" src="assets/images/practice-areas/4.jpg" alt="" />                                
                    <div className="dcg-title"><i className="dcg-icon id-color icofont-law-order"></i>Contract Law</div>
                    <div className="dcg-content">In Contract Law in Bangladesh, our expertise shines in drafting meticulous contracts, ensuring clarity and legal compliance. We excel in contract negotiations and dispute resolution, offering strategic guidance for favorable outcomes. Clients trust our proficiency to safeguard their interests in diverse contractual matters.</div>
                    <div className="dcg-text">Read More</div>
                    <div className="dcg-overlay"></div>
                </div>
            </div>
            
            <div className="col-lg-4 col-md-6 col-xs-12 mb30">
                <div className="dcg-four dcg-item">
                    <Link className="dcg-url" to="#"></Link>
                    <img className="dcg-image" src="assets/images/practice-areas/5.jpg" alt="" />                                
                    <div className="dcg-title"><i className="dcg-icon id-color icofont-group-students"></i>Family &amp; Marriage Law</div>
                    <div className="dcg-content">As authorities in Family and Marriage Law in Bangladesh, we provide compassionate and strategic legal support for matters like divorce, child custody, and marital disputes. Our expertise extends to navigating complex family laws, ensuring clients receive comprehensive guidance and representation during emotionally challenging times. Trust us for personalized solutions that prioritize the well-being and legal rights of our clients.</div>
                    <div className="dcg-text">Read More</div>
                    <div className="dcg-overlay"></div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-xs-12 mb30">
                <div className="dcg-four dcg-item">
                    <Link className="dcg-url" to="#"></Link>
                    <img className="dcg-image" src="assets/images/practice-areas/6.jpg" alt="" />                                
                    <div className="dcg-title"><i className="dcg-icon id-color icofont-money"></i>Corporate &amp; Investment</div>
                    <div className="dcg-content">In Corporate and Investment Law in Bangladesh, our expertise lies in structuring sound legal frameworks for businesses and investors. We excel in facilitating regulatory compliance, mergers, and acquisitions, ensuring clients navigate the dynamic corporate landscape seamlessly. Trust us for strategic counsel that optimizes opportunities and safeguards the interests of corporations and investors in Bangladesh.</div>
                    <div className="dcg-text">Read More</div>
                    <div className="dcg-overlay"></div>
                </div>
            </div>

           

            <div className="col-lg-4 col-md-6 col-xs-12 mb30">
                <div className="dcg-four dcg-item">
                    <Link className="dcg-url" to="#"></Link>
                    <img className="dcg-image" src="assets/images/practice-areas/8.jpg" alt="" />                                
                    <div className="dcg-title"><i className="dcg-icon id-color icofont-bank"></i>Banking &amp; Insurance</div>
                    <div className="dcg-content">As authorities in Banking and Insurance Law in Bangladesh, Our expertise extends to advising on compliance, transactions, and dispute resolution, ensuring our clients in the banking and insurance sectors receive comprehensive legal support for their diverse needs. Trust us for strategic counsel that safeguards your interests in this dynamic industry.</div>
                    <div className="dcg-text">Read More</div>
                    <div className="dcg-overlay"></div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-xs-12 mb30">
                <div className="dcg-four dcg-item">
                    <Link className="dcg-url" to="#"></Link>
                    <img className="dcg-image" src="assets/images/practice-areas/9.jpg" alt="" />                                
                    <div className="dcg-title"><i className="dcg-icon id-color icofont-light-bulb"></i>Intellectual &amp; Property</div>
                    <div className="dcg-content">In Intellectual Property Law in Bangladesh, we boast extensive expertise in securing and protecting patents, trademarks, and copyrights. Our specialized legal team offers strategic guidance on IP portfolio management and enforces rights through litigation when necessary. Trust us for comprehensive solutions that safeguard your intellectual assets in the dynamic landscape of Bangladesh.</div>
                    <div className="dcg-text">Read More</div>
                    <div className="dcg-overlay"></div>
                </div>
            </div>
            
        </div>
    </div>
</section>
  </div>
  </>
  )
}

export default PracticeAreaContent 