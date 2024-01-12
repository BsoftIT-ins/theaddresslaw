import React from 'react'
import { Link } from 'react-router-dom'

const Consultation = () => {
  return (
    <section className="pt40 pb40 bg-color text-light">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-8 mb-sm-30 text-lg-start text-sm-center">
                <h3 className="no-bottom">Contact Us Now! Get a Free Consultation for Your Case.</h3>
            </div>
            <div className="col-md-4 text-lg-end rtl-lg-start text-sm-center">
                <Link to="#" className="btn-custom btn-black light">Make Appointment</Link>
            </div>
        </div>
    </div>
</section>
  )
}

export default Consultation