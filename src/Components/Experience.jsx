import React from 'react'

const Experience = () => {
  return (
    <>
    <section data-bgcolor="#111111" className="text-light bg-dark">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-5 offset-lg-7">
        <span className="p-title">Experiences</span><br />
        <h2>
          Let Our Experience<br />be Your Guide
        </h2>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Our Lawyers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Our Expertise</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Our Firm</a>
          </li>
        </ul>
        <div className="tab-content text-lg-start" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <p>Our team of accomplished lawyers is armed with extensive experience in a variety of legal domains. With a wealth of knowledge and a track record of successful cases, they are well-equipped to handle even the most complex legal challenges. Our lawyers are your trusted advisors, dedicated to safeguarding your rights and delivering positive outcomes. Whether you need assistance with civil and criminal matters, real estate transactions, tax and corporate issues, or banking-related concerns, our experienced legal professionals are here to guide you. With The Address Law, you can count on seasoned experts who are committed to achieving the best results for you. </p>
          </div>
          <div className="tab-pane fade text-lg-start" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <p>At The Address Law, our expertise is your greatest asset. With a proven track record of successfully navigating intricate legal terrain, our team boasts unrivaled proficiency in areas such as Civil & Criminal Law, Real Estate Law, Tax & Corporate Law, and Banking Law. We offer insights honed through years of practice, ensuring sound guidance and tailored solutions. Count on us to provide the expertise you need to address your legal matters effectively and efficiently, delivering peace of mind and favorable outcomes.</p>
          </div>
          <div className="tab-pane text-lg-start fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
            <p>Our firm, The Address Law, stands as a pillar of unwavering commitment to your legal needs. We prioritize your interests, ensuring that you receive comprehensive and reliable legal support. With a client-centric approach, we provide transparent communication, strategic guidance, and a strong work ethic. Our mission is to deliver results, offering excellence in areas such as Civil & Criminal Law, Real Estate Law, Tax & Corporate Law, and Banking Law. Trust in a firm that is dedicated to your success and the pursuit of justice."</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="jarallax image-container col-md-6 pull-right">
    <img src="assets/images/background/9.jpg" className="jarallax-img" alt="" />
  </div>
</section>

    </>
  )
}

export default Experience