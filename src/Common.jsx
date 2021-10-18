import React from "react";
import { NavLink } from "react-router-dom";
import rocket from "../src/assets/Rocket-Man.svg";
const Common = (props) => {
  return (
    <>
            <section>
                <div className='container_fluid nav-bg'>
                    <div className='row'>
                        <div className="col-10 mx-auto">
                            <div className='row'>
                            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                        
                                <h1> {props.name} <br/><strong className='brand-name'>This Application</strong></h1>
                                
                                <h2 className='my-3'> Mumbai based tech-solution providers</h2>
                                <div className='mt-3'>
                                    <NavLink to={props.route} className='btn-get-started'> {props.buttonText} </NavLink>
                                </div>
                            </div>

                
                            <div className='col-lg-6 order-1 order-lg-2 image'>
                                <br />
                                <br />
                                <br />
                                <img src={props.img} className="image-fluid animated" alt="home img"/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
  );
};

export default Common;
