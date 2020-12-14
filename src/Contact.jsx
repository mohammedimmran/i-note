import React from 'react'
import ContactSvg from '../src/images/Contact.svg';

const Contact = () => {

    return (
        <> <div className = "my-5" >
             <h1 className="text-center">
            Contact Us
           </h1>

        
    </div>

    <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">

                        <div
                            className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <form action="./Contact.php" method="POST" name="form">
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                                    <input

                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        required="required"
                                        name="name"    
                                        />
                                </div>

                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        required="required"
                                        name="email"
                                        />
                                </div>

                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Mobile</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        required="required"
                                        name="mobile"
                                        />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Enter your Message</label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        required="required"
                                        name="message"></textarea>
                                </div>

                                <button type="submit" class="btn-get-started">Submit</button>

                            </form>
                        </div>

                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={ContactSvg} className="img-fluid animated" alt="home-img"/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

</>
    )
}

export default Contact
