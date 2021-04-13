import React from 'react';
import img from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = ({ doctor }) => {
    return (
        <div className="col-md-4 col-sm-6 text-center">
            <img style={{ height: '200px' }} className="img-fluid mb-3" src={doctor.imageUrl} alt={doctor.name} />
            <h4>{doctor.name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} />{doctor.phone}</p>
        </div>
    );
};

export default Doctor;
