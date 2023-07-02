import React from 'react';
import { PackageWrapperFooter } from './styles';
//import InmobiLogo from '@client/assets/images/inmobi_color_logo.svg';

const Footer = () => {
    return (
        <div className={PackageWrapperFooter}>
            <div className='curated-footer-cont'>
                <div className='wrapper-footer-cont'>
                    <div className="curated-footer">
                        {/* <img
                            src=""
                            alt="Inmobi logo"
                            height="18px"
                            width="98px"
                        /> */}
                        <div className="policy-container">
                            <div className="policy">
                                <a to="https://www.inmobi.com/terms-of-service" rel="noreferrer noopener" target="_blank">
                                    <p>Terms of Service</p>
                                </a>
                                <a to="https://www.inmobi.com/privacy-policy" rel="noreferrer noopener" target="_blank">
                                    <p>Privacy Policy</p>
                                </a>
                                <a to="https://www.inmobi.com/content-guidelines-advertisers" rel="noreferrer noopener" target="_blank">
                                    <p>More</p>
                                </a>
                            </div>
                            <div className="rights">
                                All Rights Reserved. InMobi © 2023
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
