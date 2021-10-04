import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPhone, faAddressBook, faVoicemail} from '@fortawesome/free-solid-svg-icons'
// this variable is for showing contactDetails in contact page 
const ContactDetails = () => {
    return (
        <div className="d-lg-flex justify-content-around mt-3">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faPhone} className="fs-1 me-2" />
              <div>
              <h3>Phone</h3>
              <p>Phone: 01797719606</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faAddressBook} className="fs-1 me-2" />
              <div>
              <h3>Adress</h3>
              <p>Adress: 57/A Mohammadpur, Dhaka</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faVoicemail} className="fs-1 me-2" />
              <div>
              <h3>Email</h3>
              <p>Email: saiakzakarea7@gmail.com</p>
              </div>
            </div>
        </div>
    );
};

export default ContactDetails;