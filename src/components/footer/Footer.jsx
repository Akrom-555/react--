import React from 'react';
import FooterLogo from './FooterLogo';
import FooterMenu from './FooterMenu';
import FooterCopyriht from './FooterCopyriht';

const Footer = () => {
    return (
        <div className="footer-content">
        <FooterLogo />
        <FooterMenu />
        <FooterCopyriht />

        </div>
    );
};

export default Footer;