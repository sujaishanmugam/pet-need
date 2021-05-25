import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <div>
                    <div>
                        <p>Services</p>
                    </div>
                    <div>
                        <small>Emergency Care</small>
                        <br />
                        <small>Check Up</small>
                        <br />
                        <small>Treatment of Diseases</small>
                        <br />
                        <small>Pet health</small>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Pet Health</p>
                    </div>
                    <div>
                        <small>Pet Training</small>
                        <br />
                        <small>Check Up</small>
                        <br />
                        <small>Doctors</small>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Our Address</p>
                    </div>
                    <div>
                        <small>Tamilnadu, India</small>
                        <div className="brandIcon">
                            <FontAwesomeIcon icon={faFacebookF} />
                            <FontAwesomeIcon icon={faGooglePlusG} />
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <small>Call Now</small>
                        <p className="callNow">+91 9498035674</p>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "30px" }}>
                <small>Copyright 2021 All Right Reserved</small>
            </div>
        </div>
    );
};

export default Footer;