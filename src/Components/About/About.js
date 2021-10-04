import React from 'react';
import img from '../../images/teacher.jpg';



// this variable  will show the about page 


const About = () => {
    return (
        <div>
            <div className="d-lg-flex justify-content-evenly align-items-center mb-4">
                <div className="w-50">
                    <h3 className="text-warning text-center">World Class Facilities</h3>
                    <p className="fw-bold text-center">The concept of our coaching center consists of all programs of SSC and HSC in our academy.We have best teachers among the Dhaka city.They are so caring and want to teach student. </p>
                </div>
                <div className="w-50">
                    <img width="500px" src={img} alt="" />
                </div>
            </div>
            <div>
                <h1 className="text-warning text-center">Testimonials about center</h1>
                <div className="d-lg-flex mb-4">
                    <div className="border border-dark">
                        <p className="text-center">
                            My younger son returns happy with all activites happening in your center. He always share me how he learn a lot of things in easy methods from your teachers.
                        </p>
                        <h3 className="text-primary fw-bold text-center">-Sheikh Sadi</h3>
                    </div>
                    <div className="border border-dark">
                        <p className="text-center">
                            My brother used to fail in Chemistry always. But beacuse of your center's teaching method now he get 80% marks in each and every subject.We are so happy for him.
                        </p>
                        <h3 className="text-primary fw-bold text-center">-Shayla</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;